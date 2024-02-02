let key = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
let input = document.querySelector(".topinput");
let button = document.querySelector(".topbutton");
let img = document.querySelector(".myimg");
let bottom = document.querySelector(".buttom");
function generateqrcode() {
    if (input.value === "") {
        alert("You must write something !!!")
    }
    else {
        let qrcode = key + input.value;
        img.src = qrcode;
    }


}
button.addEventListener("click", () => {
    generateqrcode();
})