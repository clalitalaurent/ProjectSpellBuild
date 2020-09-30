function validation()
{   
    
    var nama = document.forms["RegForm"]["nama"];
    var letters = /^[a-zA-Z ]+$/;
    var email = document.forms["RegForm"]["email"];
    var username = document.forms["RegForm"]["username"];
    var minimalchar = 7;
    var minimalcharpw = 9;
    var password = document.forms["RegForm"]["password"];
    var alphanumeric = /^[a-zA-Z0-9]*$/;
    var confirmpassword = document.forms["RegForm"]["confirmpassword"];
    var gender = document.forms["RegForm"]["gender"];
    var genderValue = false;
    var quantity = document.forms["RegForm"]["quantity"];
    var minimalqty = 1;
    var address = document.forms["RegForm"]["address"];
    var agreement = document.forms["RegForm"]["agreement"];

    //Validasi Fullname
    if (nama.value == "")
    {
        window.alert("Name must be filled");
        nama.focus();
        return false;
    }

    if( nama.value.includes('0') ||
        nama.value.includes('1') ||
        nama.value.includes('2') ||
        nama.value.includes('3') ||
        nama.value.includes('4') ||
        nama.value.includes('5') ||
        nama.value.includes('6') ||
        nama.value.includes('7') ||
        nama.value.includes('8') ||
        nama.value.includes('9'))
 {
     window.alert("Name must consist letter only")
     nama.focus();
     return false;
 }

    if(password.value.match(alphanumeric))
    {

    }
    else{
        window.alert("Password must be alphanumeric (contain letter and digit)");
        password.focus();
        return false;
    }

    //Validasi Email
    if (email.value == "")
    {
        window.alert("Email must be filled");
        email.focus();
        return false;
    }

    if(!email.value.includes('@') || !email.value.includes('.'))
    {
        window.alert("Email must consist @ and .")
        email.focus();
        return false;
    }

    if(email.value.includes('@.'))
    {
        window.alert("Email can't contain @.")
        email.focus();
        return false;
    }

    //Validasi Username
    if(username.value == "")
    {
        window.alert("Username must be filled");
        username.focus();
        return false;
    }

    if(RegForm.username.value.length < minimalchar)
    {
        window.alert("Username must be greater than 6 characters")
        RegForm.username.focus();
        return false;
    }

    if(username.value.includes(' '))
    {
        window.alert("Username can't contain space character ")
        username.focus();
        return false;
    }

    //Validasi Password
    if(password.value == "")
    {
        window.alert("Password must be filled");
        password.focus();
        return false;
    }

    if(RegForm.password.value.length < minimalcharpw)
    {
        window.alert("Password length must be greater than 8 characters")
        RegForm.password.focus();
        return false;
    }

    if(!password.value.includes('0') && 
       !password.value.includes('1') &&
       !password.value.includes('2') &&
       !password.value.includes('3') &&
       !password.value.includes('4') &&
       !password.value.includes('5') &&
       !password.value.includes('6') &&
       !password.value.includes('7') &&
       !password.value.includes('8') &&
       !password.value.includes('9')) 
    {
        window.alert("Password must alphanumeric")
        password.focus();
        return false;
    }

    //Validasi Confirm Password
    if(confirmpassword.value == "")
    {
        window.alert("Confirm password must be filled");
        confirmpassword.focus();
        return false;
    }

    if(confirmpassword.value != password.value)
    {
        window.alert("Confirm password must be the same with password")
        RegForm.confirmpassword.focus();
        return false;
    }

    //Validasi Gender
    for (var i=0; i<gender.length;i++)
    {
        if(gender[i].checked == true)
        {
            genderValue = true;
        }
    }

    if(!genderValue)
    {
        window.alert("Gender must be chosen");
        return false;
    }

    //Validasi Quantity
    if(quantity.value < minimalqty)
    {
        window.alert("Quantity must be greater than 0")
        RegForm.quantity.focus();
        return false;
    }

    //Validasi Address
    if(address.value == "")
    {
        window.alert("Address must be filled")
        address.focus();
        return false;
    }

    if(!address.value.endsWith(" Street"))
    {
        window.alert("Address must ends with ' Street'")
        RegForm.address.focus();
        return false;
    }

    //Validasi Agreement
    if(!agreement.checked)
    {
        window.alert("Agreement must be checked")
        agreement.focus();
        return false;
    }

    return true;
}