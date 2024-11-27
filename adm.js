
let users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" }
];
let orders = [
    { id: 1, product: "Sản phẩm A", status: "Chờ Duyệt" },
    { id: 2, product: "Sản phẩm B", status: "Chờ Duyệt" }
];
let products = [
    { id: 1, name: "Sản phẩm A", price: "10.000đ" },
    { id: 2, name: "Sản phẩm B", price: "20.000đ" }
];
let posts = [
    { id: 1, title: "Bài viết 1", content: "Nội dung bài viết 1" },
    { id: 2, title: "Bài viết 2", content: "Nội dung bài viết 2" }
];


function showDashboard() {
    document.getElementById("dashboard").style.display = "block";
    document.getElementById("users").style.display = "none";
    document.getElementById("orders").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("posts").style.display = "none";
    document.getElementById("settings").style.display = "none";


    document.getElementById('total-users').textContent = users.length;
    document.getElementById('total-orders').textContent = orders.length;
    document.getElementById('total-products').textContent = products.length;
}

function showUsers() {
    document.getElementById("users").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("orders").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("posts").style.display = "none";
    document.getElementById("settings").style.display = "none";

   
    let userList = document.getElementById("user-list");
    userList.innerHTML = "";
    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = `${user.name} (${user.email})`;
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Xóa";
        deleteButton.className = "delete";
        deleteButton.onclick = function() {
            deleteUser(user.id);
        };
        li.appendChild(deleteButton);
        userList.appendChild(li);
    });
}


function deleteUser(userId) {
    users = users.filter(user => user.id !== userId);
    showUsers(); 
}


function addUser() {
    let newUser = { id: users.length + 1, name: "Người Dùng Mới", email: `newuser${users.length + 1}@example.com` };
    users.push(newUser);
    showUsers();
}

function showOrders() {
    document.getElementById("orders").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("posts").style.display = "none";
    document.getElementById("settings").style.display = "none";

    let orderList = document.getElementById("order-list");
    orderList.innerHTML = "";
    orders.forEach(order => {
        let li = document.createElement("li");
        li.textContent = `Đơn Hàng #${order.id}: ${order.product} - Trạng Thái: ${order.status}`;
        let approveButton = document.createElement("button");
        approveButton.textContent = "Duyệt";
        approveButton.className = "approve";
        approveButton.onclick = function() {
            approveOrder(order.id);
        };
        li.appendChild(approveButton);
        orderList.appendChild(li);
    });
}


function approveOrder(orderId) {
    let order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = "Đã Duyệt";
        showOrders(); 
    }
}

function showProducts() {
    document.getElementById("products").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("orders").style.display = "none";
    document.getElementById("posts").style.display = "none";
    document.getElementById("settings").style.display = "none";


    let productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        let li = document.createElement("li");
        li.textContent = `${product.name} - Giá: ${product.price}`;
        productList.appendChild(li);
    });
}


function showPosts() {
    document.getElementById("posts").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("orders").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("settings").style.display = "none";


    let postList = document.getElementById("post-list");
    postList.innerHTML = "";
    posts.forEach(post => {
        let li = document.createElement("li");
        li.textContent = `${post.title}: ${post.content}`;
        postList.appendChild(li);
    });
}


function showSettings() {
    document.getElementById("settings").style.display = "block";
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("users").style.display = "none";
    document.getElementById("orders").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("posts").style.display = "none";
}
