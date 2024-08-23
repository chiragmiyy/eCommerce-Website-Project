$(document).ready(function () {
    $(".getQuery").click(function () {
        $('#description').hide();
    });
});

// Form Code 

$(document).ready(function () {
    $('#myform').on('submit', function () {
        var fname = $('#fname').val();
        var cname = $('#cname').val();
        var dob = $('#dob').val();
        var email = $('#email').val();
        var cnum = $('#cnum').val();
        var pswd = $('#pswd').val();
        var add = $('#add').val();

        if (fname == '') {
            $('#fname_error').text("Full name is required!");
            return false;
        } else if (cname == '') {
            $('#cname_error').text("Country Name is required!");
            return false;
        } else if (dob == '') {
            $('#dob_error').text("Date of Birth is required!");
            return false;
        } else if (email == '') {
            $('#email_error').text("Email is required!");
            return false;
        } else if (cnum == '') {
            $('#cnum_error').text("Contact Number is required!");
            return false;
        } else if (!validatePhone(cnum)) {
            $('#cnum_error').text("Invalid Contact Number!");
            return false;
        } else if (pswd == '') {
            $('#pswd_error').text("Password is required!");
            return false;
        } else if (add == '') {
            $('#add_error').text("Address is required!");
            return false;
        }
        else {
            $('#fname_error').hide();
            $('#cname_err').hide();
            $('#dob_err').hide();
            $('#email_err').hide();
            $('#cnum_err').hide();
            $('#pswd_err').hide();
            $('#add_err').hide();

            $('#success_error').text('Your data has been submitted successfully');
            $('#myform').trigger('reset');
            return false;
        }
    });
});

function validatePhone(cnum) {
    const re = /^\d{10}$/;
    return re.test(cnum);
}