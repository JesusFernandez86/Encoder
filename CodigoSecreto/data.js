let ran = parseInt(Math.random() * (99999 - 1) + 1);

function encrypt() {
    let value1 = document.getElementById('toCode').value;
    let result = "";
    for (let i = 0; i < value1.length; i++) {
        if (i < value1.length) {
            result += value1.charCodeAt(i) + ran;
            result += "f";
        }
    }
    return result;
}

function decrypt() {
    let value2 = document.getElementById('codified').value;
    let result = "";
    let arr = value2.split("f");
    for (let i = 0; i < arr.length - 1; i++) {
        result += String.fromCharCode(arr[i] - ran);
    }
    return result;
}

function paintUncode() {
    let encoded = encrypt();
    document.getElementById('codified').value = encoded;
    document.getElementById('toCode').value = "";
}

function paintDecode() {
    let decoded = decrypt();
    document.getElementById('toCode').value = decoded;
    document.getElementById('codified').value = "";
}