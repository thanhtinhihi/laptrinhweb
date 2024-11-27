const products = [
    { name: "Tội Ác Và Trừng Phạt", price: "50.000đ", image: ".vscode/New folder/toi-ac-va-trung-phat.webp" },
    { name: "Bố Già", price: "100.000đ", image: ".vscode/New folder/8601463018e420c01e4cd5966da3ce76.jpg.webp" },
    { name: "Cuộc Sống Không Giới Hạn", price: "200.000đ", image: ".vscode/New folder/untitled_1_3_6.jpg.webp" },
    { name: "Nghĩ Lớn Để Thành Côngc", price: "120.000đ", image: ".vscode/New folder/2a1f69e6342d5efa45444af70f770779.jpg.webp" },
    { name: "7 Thói Quen Của Bạn Trẻ Thành Đạt", price: "70.000đ", image: ".vscode/New folder/41bd23bb8564f28020baeb4d23ec1427.png.webp" },
    { name: "Đời Thay Đổi Khi Chúng Ta Thay Đổi", price: "45.000đ", image: ".vscode/New folder/anh1.jpg" },
    { name: "Dragon Ball Z", price: "30.000đ", image: ".vscode/New folder/dragonballz.jpg" },
    { name: "Khôn Ninh (Phần 1) ", price: "60.000đ", image: ".vscode/New folder/khon-ninh-tap-1.jpg" },
    { name: "Hồ Oán Hận", price: "50.000đ", image: ".vscode/New folder/ho-oan-han.jpg" },
    { name: "Cẩm Tứ Kỳ Bào", price: "20.000đ", image: ".vscode/New folder/cam-tu-ky-bao-tap-1.jpg" },
    { name: "Nhà Thôi Miên Tà Ác", price: "200.000đ", image: ".vscode/New folder/nha-thoi-mien-ta-ac-tap-1.jpg" },
    { name: "Cẩm Thư Quán", price: "120.000đ", image: ".vscode/New folder/cam-thu-quan.jpg" },
    { name: "Trần Triều Nhàn Thoại", price: "70.000đ", image: ".vscode/New folder/tran-trieu-nhan-thoai.jpg" },
    { name: "Doraemon Nobita Và Cuộc Chiến Vũ Trụ Tí Hon", price: "45.000đ", image: ".vscode/New folder/doraemon-nobita-va-cuoc-chien-vu-tru-ti-hon-2021-2022-218-6464297.png" },
    { name: "Naruto", price: "30.000đ", image: ".vscode/New folder/naruto.jpg" },
    { name: "Dragon Ball Super", price: "60.000đ", image: ".vscode/New folder/15_38932a2e80914e10ab41e4639a00e198_77d7686046a14181b02fb4da9fd74063_master.webp" }
];


const productsPerPage = 4;
let currentPage = 1;


function displayProducts(page) {
    const productSection = document.getElementById("product-section");
    productSection.innerHTML = "";

    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;


    const productsToShow = products.slice(start, end);

    productsToShow.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">${product.price}</p>
                    <a href="giohang.html">
                    <button class="btn">Thêm vào giỏ hàng</button></a>
                </div>
            </div>
        `;
        productSection.innerHTML += productCard;
    });


    document.getElementById("page-info").textContent = `Trang ${currentPage}`;
    updateButtons();
}


function updateButtons() {
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === Math.ceil(products.length / productsPerPage);
}


document.getElementById("prev").addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        displayProducts(currentPage);
    }
});

document.getElementById("next").addEventListener("click", () => {
    if (currentPage < Math.ceil(products.length / productsPerPage)) {
        currentPage++;
        displayProducts(currentPage);
    }
});


displayProducts(currentPage);
