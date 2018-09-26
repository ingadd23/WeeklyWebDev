function navButton(x) {
    x.classList.toggle("change");
    document.querySelector(".nav__container").classList.toggle("nav__container--visible");
}

$(".form-1").click(function(){
    masking(".form-1");
});

$(".form-2").click(function(){
    masking(".form-2");
});
   
function masking(formNumb){
    $(formNumb + " #firstName").inputmask({
        mask: "*{1,30}", 
        placeholder: '',
        definitions: {
            '*': {
                validator: "[A-Za-z,`-]"
            }
        }
    });

    $(formNumb + " #lastName").inputmask({
        mask: "*{1,30}", 
        placeholder: '',
        definitions: {
            '*': {
                validator: "[A-Za-z,`-]"
            }
        }
    });

    $(formNumb + " #phone").inputmask({
        mask: "(a{1}b{1}c{1}) *{1}99-9999",
        showMaskOnHover: false,
        definitions: {
            'a': {
                validator: "[67]"
            }, 

            "b": {
                validator: "[08]"
            },

            "c": {
                validator: "[469]"
            },

            '*': {
                validator: "[01]"
            }
        }
    });
    
};


function checkSelect(formNumb) {
    var selectProgramVal = false;
    var selectProgram = document.querySelector(formNumb +  " #selectProgram").value;
    
    if(selectProgram == "s0"){
        $(formNumb + " #selectProgramVal div").addClass("icon-cancel");
        $(formNumb + " #selectProgramVal div").removeClass("icon-check");
        
        $(formNumb + " #selectProgramVal select").addClass("red");
        selectProgramVal = false;
    }
    else{
        $(formNumb + " #selectProgramVal div").addClass("icon-check");
        $(formNumb + " #selectProgramVal div").removeClass("icon-cancel");
        
        $(formNumb + " #selectProgramVal select").removeClass("red");
        selectProgramVal = true;
    }
    
    return selectProgramVal;
};

function checkFirstName(formNumb) {

    var firstName = document.querySelector(formNumb + " #firstName").value;
    var firstNameREGX = /^[a-zA-Z,`-]*$/;
    var firstNameVal = firstNameREGX.test(firstName);
    
    if(firstNameVal == false || firstName.length == 0){
        $(formNumb +  " #firstNameVal div").addClass("icon-cancel");
        $(formNumb +  " #firstNameVal div").removeClass("icon-check");
        
        $(formNumb +  " #firstNameVal input").addClass("red");
        firstNameVal = false;
    }
    if(firstNameVal == true){
        $(formNumb +  " #firstNameVal div").addClass("icon-check");
        $(formNumb + " #firstNameVal div").removeClass("icon-cancel");
        
        $(formNumb + " #firstNameVal input").removeClass("red");
    }
    
    return firstNameVal;
};

function checkLastName(formNumb){
    var lastName = document.querySelector(formNumb + " #lastName").value;
    
    var lastNameREGX = /^[a-zA-Z,`-]*$/;
    var lastNameVal = lastNameREGX.test(lastName);
    
    if(lastNameVal == false || lastName.length == 0){
        $(formNumb + " #lastNameVal div").addClass("icon-cancel");
        $(formNumb + " #lastNameVal div").removeClass("icon-check");
        
        $(formNumb + " #lastNameVal input").addClass("red");
        lastNameVal = false;
    }
    if(lastNameVal == true){
        $(formNumb + " #lastNameVal div").addClass("icon-check");
        $(formNumb + " #lastNameVal div").removeClass("icon-cancel");
        
        $(formNumb + " #lastNameVal input").removeClass("red");
    }
    
    return lastNameVal;
}

function checkPhone(formNumb) {
    var phoneMasks = document.querySelector(formNumb + " #phone").value;
    var phone = Inputmask.unmask(phoneMasks, { alias: "(999) 999-9999"});
    
    var phoneREGX = /^[0-9]{10}$/;
    var phoneVal = phoneREGX.test(phone);
    
    if(phone.length < 10 || phoneVal == false || phone.length == 0 || phone.slice(0,3) != "604" || phone.slice(0,3) != "609" || phone.slice(0,3) != "786"){
        $(formNumb + " #phoneVal div").addClass("icon-cancel");
        $(formNumb + " #phoneVal div").removeClass("icon-check");
        
        $(formNumb + " #phoneVal input").addClass("red");
        phoneVal = false;
    }
    if(phone.length == 10 && (phoneVal == true || phone.slice(0,3) == "604" || phone.slice(0,3) == "609" || phone.slice(0,3) == "786")){
        $(formNumb + " #phoneVal div").addClass("icon-check");
        $(formNumb + " #phoneVal div").removeClass("icon-cancel");
        
        $(formNumb + " #phoneVal input").removeClass("red");
        phoneVal = true;
    }

    return phoneVal;
};

function checkEmail(formNumb) {
    var email = document.querySelector(formNumb + " #email").value;
    
    var emailREGX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailVal = emailREGX.test(email);
    
    if(emailVal == false || emailVal.length == 0){
        $(formNumb + " #emailVal div").addClass("icon-cancel");
        $(formNumb + " #emailVal div").removeClass("icon-check");
        
        $(formNumb + " #emailVal input").addClass("red");
        emailVal = false;
    }
    if(emailVal == true){
        $(formNumb + " #emailVal div").addClass("icon-check");
        $(formNumb + " #emailVal div").removeClass("icon-cancel");
        
        $(formNumb + " #emailVal input").removeClass("red");
    }

    return emailVal;
};

function checkForm(formNumb){
    var res = false;
    
    var s = checkSelect(formNumb);
    var f = checkFirstName(formNumb);
    var l = checkLastName(formNumb);
    var p = checkPhone(formNumb);
    var e = checkEmail(formNumb);
    
    if(s == true && f == true && l == true && p == true && e == true){
        res = true;
    } 
    else{
        
        res = false;
    }
    
    return res;

};

function phoneUnmask(phoneMasked){
    var phone = Inputmask.unmask(phoneMasks, { alias: "(999) 999-9999"});
    return phone;
};

$(function () {
    function e() {
        return window.pageYOffset || document.documentElement.scrollTop
    }
    var a = 500;
    $(window).scroll(function () {
        var n = e();
         n >= a ? 
             $(".get-info-button").addClass("get-info-button--visible") 
         : $(".get-info-button").removeClass("get-info-button--visible")
    })
});

$("#get-info-button").click(function(){
    $(".modal-overlay").addClass("modal-is-visible")
    $("#modal-form").addClass("modal-is-visible")
});


$(".modal-close").click(function(){
    $(".modal-overlay").removeClass("modal-is-visible")
    $(".modal").removeClass("modal-is-visible")
});
