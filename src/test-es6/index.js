/**
 * Created by xuqinrui on 2018/10/18.
 */
class Polygon {
    constructor(height, width) {
        this.name = 'Polygon';
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(length) {
        super(length, length);
        this.name = 'Square';
    }
}

class Animals {
    constructor(option){
        this.type = 'animals';
        this.commonName = 'eve';
        Object.assign(this,option);
    }
}

export class Lion extends Animals {

    constructor(option){
        super({commonName:"bugaos"});
        Object.assign(this,option);
        console.log(this);
    }

}



let hammingWeight = function(n) {
    let res = 0;
    for ( ; n !== 0; n = n >>> 1) {
        res += n & 1 === 1 ? 1 : 0;
    }
    return res;
};
