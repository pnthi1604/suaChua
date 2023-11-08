// COMMON 

TEXT_NOT_EMPTY = "Không được để trống";
INVALID = "không hợp lệ"; 
function debug(element) {
    console.log("DEBUG");
    console.log(element);
}

// END COMMON 

// BAI TAP 3

//add cart

function getSum(val1, val2) {
    return Number(val1) + Number(val2);
}

let products = document.querySelectorAll('.products .list-item .item');

for(let i = 0; i < products.length; i++) {
    let orderBtn = products[i].querySelector('button.orderBtn');
    let code = `sp00${i + 1}`;
    orderBtn.addEventListener('click', (event) => {
        let inputNumber = products[i].querySelector('span.number input');
        let number = inputNumber.value;
        if(typeof localStorage[code] === "undefined") {
            localStorage.setItem(code, number);
        } else {
            let current = localStorage.getItem(code);
            let total = getSum(number, current);
            localStorage[code] = Math.min(100, total);
        }
    });
}

// END BAI TAP 3