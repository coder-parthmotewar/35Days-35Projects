const passwordInput = document.getElementById("password");
const entropyText = document.getElementById("entropy");
const strengthText = document.getElementById("strength");
const crackTimeText = document.getElementById("crackTime");

passwordInput.addEventListener("input", () => {
  const pwd = passwordInput.value;
  if (!pwd) {
    entropyText.innerText = "";
    strengthText.innerText = "";
    crackTimeText.innerText = "";
    return;
  }

  const charset = getCharsetSize(pwd);
  const entropy = Math.log2(Math.pow(charset, pwd.length));

  entropyText.innerText = `Entropy: ${entropy.toFixed(2)} bits`;
  strengthText.innerText = `Strength: ${getStrength(entropy)}`;
  crackTimeText.innerText = `Estimated crack time: ${estimateCrackTime(entropy)}`;
});

function getCharsetSize(pwd) {
  let size = 0;
  if (/[a-z]/.test(pwd)) size += 26;
  if (/[A-Z]/.test(pwd)) size += 26;
  if (/[0-9]/.test(pwd)) size += 10;
  if (/[^a-zA-Z0-9]/.test(pwd)) size += 32;
  return size;
}

function getStrength(entropy) {
  if (entropy < 28) return "Very Weak";
  if (entropy < 36) return "Weak";
  if (entropy < 60) return "Moderate";
  if (entropy < 128) return "Strong";
  return "Very Strong";
}

function estimateCrackTime(entropy) {
  const guessesPerSecond = 1e9; // modern GPU
  const seconds = Math.pow(2, entropy) / guessesPerSecond;

  if (seconds < 60) return "Seconds";
  if (seconds < 3600) return "Minutes";
  if (seconds < 86400) return "Hours";
  if (seconds < 31536000) return "Days";
  if (seconds < 3153600000) return "Years";
  return "Centuries 🚀";
}
