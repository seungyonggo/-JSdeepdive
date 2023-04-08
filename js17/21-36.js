const uriComp = "name=이웅모&job=programmer&teacger";
let enc = encodeURIComponent(enc);
console.log(enc);
let dec = decodeURIComponent(enc);
console.log(dec);

enc = encodeURI(uriComp);
console.log(enc);

dec = decodeURI(enc);
console.log(dec);
