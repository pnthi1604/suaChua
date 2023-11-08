// COMMON 

TEXT_NOT_EMPTY = "Không được để trống";
INVALID = "không hợp lệ"; 
function debug(element) {
    console.log("DEBUG");
    console.log(element);
}

// END COMMON 

// BAI TAP 2

function isEmail(email) {
    let emailReg = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return emailReg.test(email);
}

function isPassword(password) {
    return password.length >= 8;
}

function isUsername(name) {
    return name.length >= 4;
}

function isContact(content) {
    return content.length >= 10;
}

function validateInput(element) {
    let name = element.name;
    let value = element.value;
    if(name == 'email') {
        return isEmail(value);
    } else if(name == 'password') {
        return isPassword(value);
    } else if(name == 'username') {
        return isUsername(value);
    } else if(name == 'contact') {
        return isContact(value);
    }
    return true;
}

let formUser = document.querySelector('.info-user');

validateForm(formUser);

function findSubmitBtn(inputs) {
    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].type == 'submit') {
            return inputs[i]; //Found!
        }
    }
    return undefined; //Not found!
}

function validateForm(form) {
    let inputs = form.querySelectorAll('input');
    let lenInputs = inputs.length;
    let submitBtn = findSubmitBtn(inputs);
    if(submitBtn != undefined) {
        submitBtn.addEventListener('click', (event) => {
            for(let i = 0; i < lenInputs; i++) {
                if(validateInput(inputs[i]) == false) {
                    event.preventDefault();
                    alert(inputs[i].name + ' ' + INVALID);
                    break;
                }
            }
        });
    }
}

// END BAI TAP 2