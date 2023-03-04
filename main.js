function showpass() {
  if (nhap.type === "password") {
    nhap.type = "text";
  } else {
    nhap.type = "password";
  }
  console.log(nhap);
}

function sang() {
  console.log(doibc);
  doibc.setAttribute("class", "toi");
}
function toi() {
  var doibct = document.querySelector(".toi");
  console.log(doibct);
  doibct.setAttribute("class", "sang");
}
function hiensign() {
  if (nhan.className === "fa-solid fa-plus check") {
    nhan.className = "fa-solid fa-xmark check";
    anfrom.style.display = "none";
    containerfrom.style.height = "620px";
    // containerfrom.style.transition = "0.25s";
    ansignin.style.display = "block";
    ansignin.style.background = "#FFFFFF";
  } else {
    nhan.className = "fa-solid fa-plus check";

    anfrom.style.display = "block";
    containerfrom.style.height = "400px";
    ansignin.style.display = "none";
  }
  var dung = true;
  if (dung === false) {
  }
}

function kiemTraValue() {
  var userMain = "admin";
  var passMain = "123";

  if (kttk.value === userMain && ktmk.value === passMain) {
    window.location = "https://github.com/nguyenlp04";
  } else {
    hienThiSai.innerHTML = "Sai Tài Khoản Hoặc Mật Khấu";
    console.log("Sai");
  }
}

function dangky() {
  var gusersign = document.getElementById("userdangky");
  var gpasssign = document.getElementById("passdangky");
  var gpasssigns = document.getElementById("passdangky1");
  var gmailsign = document.getElementById("#maildangky");

  var layvalueuser = gusersign.value;
  var layvaluepass = gpasssign.value;
  var layvaluepasss = gpasssigns.value;
  console.log(layvalueuser);
  console.log(layvaluepass);
  if (layvaluepass !== layvaluepasss) {
    khacMatKhau.innerHTML = "Các mật khẩu đã nhập không khớp. Hãy thử lại.";
  }
}
// function giatriuser() {
//   return gusersign.value;
// }
var khacMatKhau = document.querySelector(".khacmk");
const anfrom = document.querySelector(".sang .form");
const containerfrom = document.querySelector(".container");
const ansignin = document.querySelector(".form-signin");
const kttk = document.querySelector("#userinput");
const ktmk = document.querySelector("#passinput");
const hienThiSai = document.querySelector(".saiup");
const nhap = document.querySelector(".lay");
const nhan = document.querySelector(".check");
const doibc = document.querySelector(".sang");

var gusersign = document.getElementById("userdangky");
var gpasssign = document.getElementById("passdangky");
var gpasssigns = document.getElementById("passdangky1");
var gmailsign = document.getElementById("#maildangky");

var nhapuser = document.querySelector(".username");
var nhappas = document.querySelector(".passw");
var nhappasw = document.querySelector(".passww");
var nhapmail = document.querySelector(".mail");

if (gusersign.value == null) {
  username.innerHTML = "Vui Lòng Điền UserName";
}
