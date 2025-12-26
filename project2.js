number = prompt("Nhập số bạn muốn đọc");
const chuSo = [
  "Không",
  "Một",
  "Hai",
  "Ba",
  "Bốn",
  "Năm",
  "Sáu",
  "Bảy",
  "Tám",
  "Chín",
  "Mười",
];

var chuc = "mươi";
var hangchuc = Math.floor(number / 10);
var donvi = number % 10;
var special = chuSo[donvi];

if (hangchuc > 1 && donvi == 0) {
  alert(chuSo[hangchuc] + " " + chuc);
} else if (hangchuc > 1 && hangchuc <= 9 && donvi > 0 && donvi <= 9) {
  alert(chuSo[hangchuc] + " " + chuc + " " + chuSo[donvi]);
} else if (hangchuc == 1 && donvi > 0 && donvi <= 9) {
  alert(chuSo[Number(10)] + " " + chuSo[donvi]);
}

if (hangchuc == 1 && donvi == 5) {
  alert("Mười lăm");
} else if (hangchuc > 1 && donvi == 5) {
  alert(chuSo[hangchuc] + " " + chuc + " lăm");
}

if (hangchuc == 1 && donvi == 1) {
  alert("Mười một");
} else if (hangchuc > 1 && donvi == 1) {
  alert(chuSo[hangchuc] + " " + chuc + " mốt");
}

// if (number<10)
alert(chuSo[Number(number)]);
