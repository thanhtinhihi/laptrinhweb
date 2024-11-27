
const API_URL = 'products.json';

let cart = [];


async function getProducts() {
    try {
        const response = await fetch(API_URL);
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error("Lỗi khi lấy sản phẩm: ", error);
    }
}


function displayProducts(products) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = '';

    products.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${product.name} - ${product.price}</span>
            <button onclick="addToCart(${product.id})">Thêm vào giỏ</button>
        `;
        productsContainer.appendChild(li);
    });
}

function addToCart(productId) {
    fetch(API_URL)
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id === productId);
            if (product) {
                cart.push(product);
                updateCart();
            }
        });
}

function updateCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = '';

    let totalPrice = 0;

    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.name} - ${item.price}</span>
            <button onclick="removeFromCart(${item.id})">Xóa</button>
        `;
        cartItemsContainer.appendChild(li);

        totalPrice += parseInt(item.price.replace('đ', '').replace('.', '').trim());
    });


    document.getElementById("total-price").textContent = formatCurrency(totalPrice);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

function formatCurrency(amount) {
    return amount.toLocaleString('vi-VN') + 'đ';
}


document.getElementById("checkout-button").addEventListener("click", function() {
    alert("Chuyển hướng tới thanh toán");
});


window.onload = function() {
    getProducts();
};
