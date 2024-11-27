
const qrCodeContainer = document.getElementById("qrCodeContainer");


const paymentURL = "https://bank-payment-system.com/payment?account=123456789&amount=500000&currency=VND";

QRCode.toCanvas(qrCodeContainer, paymentURL, function (error) {
    if (error) console.error(error);
    console.log("Mã QR đã được tạo!");
});
