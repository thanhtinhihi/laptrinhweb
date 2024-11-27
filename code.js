
const products = [
    { name: "Đắc Nhân Tâm", price: "50,000đ", img: ".vscode/New folder/dacnhantam86.jpg" },
    { name: "Đại Việt Sử Ký Toàn Thư", price: "200,000đ", img: ".vscode/New folder/dai-viet-su-ky-toan-thu-1.jpg" },
    { name: "Hạt Giống Tâm Hồn", price: "20,000đ", img: ".vscode/New folder/1.jpg" },
    { name: "Combo Sách Văn Học", price: "120,000đ", img: ".vscode/New folder/combo-van-hoc-trong-nha-truong-bo-10-cuon.jpg" },
    { name: "Sách Kỹ Năng Sống", price: "80,000đ", img: ".vscode/New folder/[POKI] Icon Publication-05-2018-12-27-01-32-34.png" },
    { name: "Truyện Tranh Naruto", price: "100,000đ", img: ".vscode/New folder/6068e62d978311faaad26f6bfb3f2bcb.jpg" },
    { name: "Sách Toán Tư Duy", price: "70,000đ", img: ".vscode/New folder/toan-tu-duy-mockup-front-scaled.jpg" },
    { name: "Tiểu Thuyết Sherlock Holmes", price: "150,000đ", img: ".vscode/New folder/174px-Charles_Frohman_presents_William_Gillette_in_his_new_four_act_drama,_Sherlock_Holmes_(LOC_var_1364)_(edit).jpg" },
    { name: "Sách Lịch Sử", price: "90,000đ", img: ".vscode/New folder/images.jpg" },
    { name: "Sách Thiếu Nhi", price: "60,000đ", img: ".vscode/New folder/KHU_RUNG_TRONG_CHAI-.jpg" },
];

const itemsPerPage = 4; 
let currentPage = 1;


function renderProducts(page) {
    const container = document.getElementById("product-container");
    container.innerHTML = ""; 

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = products.slice(start, end);

   
    productsToShow.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}" class="product-img">
            <h3 class="product-title">${product.name}</h3>
            <p class="product-price">Giá: ${product.price}</p>
            <a href="giohang.html"
            <button class="add-to-cart">
            Thêm vào giỏ hàng</button></a>
        `;
        container.appendChild(productItem);
    });

    document.getElementById("page-indicator").innerText = `Trang ${page} / ${Math.ceil(products.length / itemsPerPage)}`;
}


function changePage(direction) {
    const totalPages = Math.ceil(products.length / itemsPerPage);
    currentPage += direction;

    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages;

    renderProducts(currentPage);
}
renderProducts(currentPage);

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");


hamburger.addEventListener("click", () => {
    menu.classList.toggle("active"); 
});
