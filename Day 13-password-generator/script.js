const passwordEl = document.getElementById("password");
const lengthEl = document.getElementById("length");
const upperEl = document.getElementById("upper");
const lowerEl = document.getElementById("lower");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+[]{}<>?/";

function generatePassword() {
  let chars = "";
  let password = "";

  if (upperEl.checked) chars += upper;
  if (lowerEl.checked) chars += lower;
  if (numberEl.checked) chars += number;
  if (symbolEl.checked) chars += symbol;

  if (chars === "") {
    alert("Select at least one option");
    return;
  }

  for (let i = 0; i < lengthEl.value; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  passwordEl.value = password;
}

function copyPassword() {
  passwordEl.select();
  document.execCommand("copy");
  alert("Password copied 🔐");
}
