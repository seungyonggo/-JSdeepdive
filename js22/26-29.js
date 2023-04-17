class Prefixer{
    constructor(prefix){
        this.prefix = prefix
    }
    add(arr){
        return arr.map(function (item){
            return this.prefix + item
        })
    }
}

const prefixer = new Prefixer('-webkit-')
console.log(prefixer.add(['transition', 'user-select']))

add(arr){
    const that = this;
    return arr.map(function (item){
        return that.prefix + ' ' + item;
    }.bind(this))
};
