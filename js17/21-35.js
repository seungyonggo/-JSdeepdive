const url = "http://example.com?name=이웅모&job=programmer&teacher";
const enc = encodeURI(uri);
console.log(enc);
const dec = decodeURI(enc);
console.log(dec);
