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
let o = new Square(3);

class Animals {
    constructor(option){
        this.type = 'animals';
        this.commonName = 'eve';
        this.call = () => {
            // console.log(this.commonName)
        }
        Object.assign(this,option);
    }
    static sayMyName(){
        // console.log((new this).type)
    }
}

export class Lion extends Animals {
    constructor(option){
        super({commonName:"bugaos",type:"Lion"});
        Object.assign(this,option);
    }

}

let L = new Lion(3);
let A = new Animals();
A.call();

Animals.sayMyName();

// console.log(Lion.sayMyName())
// console.log(L)
// console.log(A)


let hammingWeight = function(n) {
    let res = 0;
    for ( ; n !== 0; n = n >>> 1) {
        res += n & 1 === 1 ? 1 : 0;
    }
    return res;
};



var urls = ['url1', 'url2', 'url3'];

function* request(urls) {
    var data;
    let ind =0
    for (var i = 0, j = urls.length; i < j; ++i) {
        data = yield req(urls[i], data);
    }
}


function log(url, data, cb) {
    setTimeout(function() {
        cb(url);
    }, 1000);

}

function req(url, data) {
    var p = new Promise(function(resolve, reject) {
        log(url, data, function(rs) {
            console.log(`url === rs :` ,url === rs)
            if (!rs) {
                reject(2);
            } else {
                resolve(rs);
            }
        });
    });

    p.then(function(data) {
        console.log(data);
        r.next(data);
    }).catch(function(err) {
        throw err
    });
}


var r = request(urls);
r.next();



function* gen(){
   for(var i=0; i<5; i++){
       yield i
   }
}
let g = gen()
console.log(g.next(),g.next(2))