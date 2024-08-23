$(document).ready(function () {
    $(".getQuery").click(function () {
        $('#description').hide();
    });
});

// Form Code 

$(document).ready(function () {
    $('#myform').on('submit', function () {
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var cnum = $('#cnum').val();
        var add = $('#add').val();
        var payment_method = $('#payment_method').val();
        var upi = $('#upi').val().trim();

        if (fname == '') {
            $('#fname_error').text("First name is required!");
            return false;
        } else if (lname == '') {
            $('#lname_error').text("Last name is required!");
            return false;
        } else if (cnum == '') {
            $('#cnum_error').text("Contact Number is required!");
            return false;
        } else if (!validatePhone(cnum)) {
            $('#cnum_error').text("Invalid Contact Number!");
            return false;
        } else if (add == '') {
            $('#add_error').text("Address is required!");
            return false;
        } else if (email == '') {
            $('#email_error').text("Email ID is required!");
            return false;
        } else if (payment_method == 'select') {
            $('#payment_error').text("Please select a payment method!");
            return false;
        } else if (payment_method == 'upi' && !validateUpi(upi)) {
            $('#upi_error').text("Invalid UPI ID!");
            return false;
        } else {
            $('#fname_error').hide();
            $('#lname_error').hide();
            $('#cnum_err').hide();
            $('#add_err').hide();
            $('#email_err').hide();
            $('#payment_err').hide();
            $('#upi_err').hide();

            $('#success_error').text('Your Order has been placed!!');
            $('#myform').trigger('reset');
            return false;
        }
    });
    $('#payment_method').on('change', function () {
        const upiContainer = $('#upi_container');

        if (this.value === 'upi') {
            upiContainer.show();
        } else {
            upiContainer.hide();
        }
    });
});

function validatePhone(cnum) {
    const re = /^\d{10}$/;
    return re.test(cnum);
}

function validateUpi(upi) {
    const re = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{3,}$/;
    return re.test(upi);
}