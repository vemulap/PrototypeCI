
var ck_Adapter = /^[A-Za-z0-9 ]{3,20}$/;
//var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]
//{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
//var ck_Adapter = /^[A-Za-z0-9_]{1,20}$/;
//var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

function validate(form){
    var Adapter = form.Adapter.value;
    //var email = form.email.value;

    var errors = [];

    if (!ck_Adapter.test(Adapter)) {
        errors[errors.length] = "Enter valid Adapter .";
    }
    //if (!ck_email.test(email)) {
    //    errors[errors.length] = "You must enter a valid email
    //    address.";
    //}

    if (errors.length > 0) {

        reportErrors(errors);
        return false;
    }
    return true;
}
function reportErrors(errors){
    var msg = "Please Enter Valid Data...\n";
    for (var i = 0; i<errors.length; i++) {
        var numError = i + 1;
        msg += "\n" + numError + ". " + errors[i];
    }
    alert(msg);
}
