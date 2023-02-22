const CryptoJS = require('crypto-js');
export const encryptWithAES = (data, secretKey) => {
  let key = CryptoJS.enc.Utf8.parse(secretKey);
  let iv = CryptoJS.enc.Utf8.parse(secretKey);
  let encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });

  return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
};

export const decryptWithAES = (encrypted, secretKey) => {
  let key = CryptoJS.enc.Utf8.parse(secretKey);
  let iv = CryptoJS.enc.Utf8.parse(secretKey);
  let decrypted = CryptoJS.AES.decrypt(encrypted, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  });
  return decrypted.toString(CryptoJS.enc.Utf8);
};
