
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); 


    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const paymentMethod = document.getElementById("paymentMethod").value;


    if (!fullName || !email || !address || !phoneNumber || !paymentMethod) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }


    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Email không hợp lệ!");
        return;
    }


    alert(`Chúc mừng! Bạn đã thanh toán thành công.\nThông tin:\nTên: ${fullName}\nEmail: ${email}\nĐịa chỉ: ${address}\nSố điện thoại: ${phoneNumber}\nPhương thức thanh toán: ${paymentMethod}`);
});
