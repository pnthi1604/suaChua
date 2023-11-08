// COMMON 

TEXT_NOT_EMPTY = "Không được để trống";
INVALID = "không hợp lệ"; 
function debug(element) {
    console.log("DEBUG");
    console.log(element);
}

// END COMMON 

// BAI TAP 1

let formSearch = document.querySelector(".search-product");
let inputSearch = formSearch.querySelector('input.search');
let cartBtn = document.querySelector('form.search-product .btn.cart');

cartBtn.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = 'donhang.html'; //BAI TAP 4: go to page donhang.html
});

function emptyText(text) {
    return text == undefined || text.length == 0;
}

formSearch.addEventListener('submit', (event) => {
    if(emptyText(inputSearch.value)) {
        event.preventDefault();
        alert(TEXT_NOT_EMPTY);
    }
});

// END BAI TAP 1