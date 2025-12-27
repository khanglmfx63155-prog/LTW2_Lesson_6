const number = Number(prompt("Nhập số bạn muốn đọc"));

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
];

let hangChuc = Math.floor(number / 10);
let hangDonVi = number % 10;

let result = "";

// ===== Trường hợp số < 10 =====
if (number < 10) {
  result = chuSo[number];
}

// ===== Trường hợp số = 10 =====
else if (number === 10) {
  result = "Mười";
}

// ===== Trường hợp số > 10 =====
else {
  // ---- Đọc hàng chục ----
  if (hangChuc === 1) {
    result = "Mười";
  } else {
    result = chuSo[hangChuc] + " mươi";
  }

  // ---- Đọc hàng đơn vị ----
  if (hangDonVi === 1 && hangChuc > 1) {
    result += " mốt";
  } else if (hangDonVi === 5) {
    result += " lăm";
  } else if (hangDonVi > 0) {
    result += " " + chuSo[hangDonVi];
  }
}

alert(result);
