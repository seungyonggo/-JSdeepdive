class Prefixer {
    constructor(prefix){
        this.prefix = prefix;
    }

    add(arr) {
        return arr.map(item => this.prefix + item)
    }
}

const prefixer = new Prefixer('-webkit-');
console.log(prefixer.add(['transition','user-select']))

() => this.XMLDocument;

(function() { return this.x;}).bind(this);