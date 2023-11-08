// COMMON 

TEXT_NOT_EMPTY = "Không được để trống";
INVALID = "không hợp lệ"; 
function debug(element) {
    console.log("DEBUG");
    console.log(element);
}

// END COMMON 

// BAI TAP 4

let itemList = {
    "sp001": {
        "name": "Sữa Chua Vị Kiwi",
        "photo": "./images/sanpham/kiwi.jpg",
        "price": 21000,
    },
    "sp002": {
        "name": "Sữa Chua Vị Xoài",
        "photo": "./images/sanpham/mango.jpg",
        "price": 22000,
    },
    "sp003": {
        "name": "Sữa Chua Vị Dưa lưới",
        "photo": "./images/sanpham/cantaloupe.jpg",
        "price": 23000,
    },
    "sp004": {
        "name": "Sữa Chua Vị Mâm Xôi",
        "photo": "./images/sanpham/blackberry.jpg",
        "price": 24000,
    },
    "sp005": {
        "name": "Sữa Chua Vị Dâu Tây",
        "photo": "./images/sanpham/strawberry.jpg",
        "price": 25000,
    },
    "sp006": {
        "name": "Sữa Chua Vị Việt Quất",
        "photo": "./images/sanpham/blueberry.jpg",
        "price": 26000,
    },
    "sp007": {
        "name": "Sữa Chua Vị Bưởi",
        "photo": "./images/sanpham/grapes.jpg",
        "price": 27000,
    },
    "sp008": {
        "name": "Sữa Chua Vị Táo Xanh",
        "photo": "./images/sanpham/green-apple.jpg",
        "price": 28000,
    },
    "sp009": {
        "name": "Sữa Chua Vị Dứa",
        "photo": "./images/sanpham/pineapple.jpg",
        "price": 29000,
    },
};

//show don hang

let tableOrder = document.querySelector('.order tbody');

function create(nameTag, nameClass) {
    let element = document.createElement(nameTag);
    element.classList.add(nameClass);
    return element;
}

function calcIntoMoney(number, price) {
    return Number(number) * Number(price);
}

let totalMoney; //tong thanh tien (A)
let discount; //chiet khau (B)
let tax; //thue (C)
let totalOrder; //tong don hang

function renderTableOrder() {
    tableOrder.innerHTML = `
        <tr>
        <th>Hình SP</th>
        <th>Tên SP</th>
        <th>Số lượng</th>
        <th>Giá</th>
        <th>Thành tiền</th>
        <th></th>
        </tr>`;
    totalMoney = 0;
    discount = 0;
    tax = 0;
    totalOrder = 0;
    for(let i = 0; i < localStorage.length; ++i) {
        let code = localStorage.key(i);
        let product = create('tr', 'product');
        let imgSrc = itemList[code].photo;
        let name = itemList[code].name;
        let number = localStorage[code];
        let price = itemList[code].price;
        let intoMoney = calcIntoMoney(number, price);
    
        totalMoney += intoMoney;
    
        product.innerHTML = `
            <td class="img">
                <img style="width: 100px;" src="${imgSrc}" alt="">
            </td>
            <td class="name">
                <p>
                    ${name}
                </p>
            </td>
            <td class="number">
                <span>
                    ${number}
                </span>
            </td>
            <td class="price">
                <p>
                    ${price} đ
                </p>
            </td>
            <td class="into-money">
                <p>
                    ${intoMoney} đ
                </p>
            </td>
            <td class="delete-product">
                <button class="delete" onclick = "deleteItem(this)" code = "${code}">
                    <i class="red-color icon fa-solid fa-trash"></i>
                </button>
            </td>
        `;
        tableOrder.append(product);
    }
    discount = 0;
    tax = 0;
    totalOrder = 0;
}

function getDiscount() {
    let d = new Date(); //lay ngay hien tai cua may tinh
    let weekday = d.getDay(); //lay ngay trong tuan
    let totalMins = d.getHours() * 60 + d.getMinutes();
    //doi thoi gian hien tai ra so phut tuong doi trong ngay
    if(weekday >= 1 && weekday <= 3 && ((totalMins >= 420 && totalMins <= 660) || (totalMins >= 780 && totalMins <= 1020))) {
        return 0.1;
    }
    return 0;
}

let detailOrder = document.querySelector('.order tfoot');

function renderDetailOrder() {
    discount = getDiscount() * totalMoney;
    tax = 0.1 * (totalMoney - discount);
    totalOrder = totalMoney - discount + tax;
    detailOrder.innerHTML = `
    <tr>
    <td colspan="6">
        Tổng thành tiền (A) = ${totalMoney}đ
    </td>
    </tr>
    <tr>
    <td colspan="6">
        Chiết Khấu (B) = 0.1 x A = ${discount}đ
    </td>
    </tr>
    <tr>
    <td colspan="6">
        Thuế (C) = 10% x (A - B) = ${tax}đ
    </td>
    </tr>
    <tr>
    <td colspan="6">
        Tổng đơn hàng = A - B + C = ${totalOrder}đ
    </td>
    </tr>
    `;
}

renderTableOrder();
renderDetailOrder();

window.onstorage = function(){
    renderTableOrder();
    renderDetailOrder();
};

function deleteItem(btn) {
    let code = btn.getAttribute("code");
    localStorage.removeItem(code);
    renderTableOrder();
    renderDetailOrder();
}

// END BAI TAP 4 