const encoder = new TextEncoder();
const decoder = new TextDecoder();

async function getKey(password) {
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: encoder.encode("day29-salt"),
      iterations: 100000,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encryptText() {
  const text = document.getElementById("input").value;
  const password = document.getElementById("password").value;

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await getKey(password);

  const encrypted = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(text)
  );

  const result = `${btoa(String.fromCharCode(...iv))}:${btoa(
    String.fromCharCode(...new Uint8Array(encrypted))
  )}`;

  document.getElementById("output").value = result;
}

async function decryptText() {
  const data = document.getElementById("output").value;
  const password = document.getElementById("password").value;

  const [ivStr, encryptedStr] = data.split(":");

  const iv = Uint8Array.from(atob(ivStr), c => c.charCodeAt(0));
  const encrypted = Uint8Array.from(atob(encryptedStr), c => c.charCodeAt(0));

  const key = await getKey(password);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    encrypted
  );

  document.getElementById("input").value =
    decoder.decode(decrypted);
}
