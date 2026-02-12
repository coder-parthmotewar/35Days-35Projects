let generatedOTP = "";

function generateOTP() {
  generatedOTP = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("otp").innerText = generatedOTP;
  document.getElementById("message").innerText = "";
}

function verifyOTP() {
  const userOtp = document.getElementById("userOtp").value;
  const message = document.getElementById("message");

  if (userOtp === "") {
    message.innerText = "Please enter OTP";
    message.style.color = "orange";
    return;
  }

  if (userOtp == generatedOTP) {
    message.innerText = "OTP Verified Successfully ✅";
    message.style.color = "green";
  } else {
    message.innerText = "Invalid OTP ❌";
    message.style.color = "red";
  }
}
