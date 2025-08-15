const CryptoJS = require("crypto-js");
const key = "z!!!!!!!1sdfadsf56adf456asdfasdf";

function encrypt(data){
    // --- Encryption ---
    // Encrypt the message using AES and the secret key
    const ciphertext = CryptoJS.AES.encrypt(data, key).toString();
    // console.log("Original Message:", data);
    // console.log("Encrypted Ciphertext:", ciphertext);
    return ciphertext;
}

function derypt(ciphertext){
    // --- Decryption ---
    // Decrypt the ciphertext using AES and the same secret key
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    // Convert the decrypted bytes back to a UTF-8 string
    const decryptedMessage = bytes.toString(CryptoJS.enc.Utf8);

    // console.log("Decrypted Message:", decryptedMessage);
    return decryptedMessage;
}

module.exports={encrypt,derypt};