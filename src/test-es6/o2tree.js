function createdTree( nums ){
    let temp = {}, tree = [] ;
    //
    function generate (d) {
        if(temp[d.p]){
            temp[d.p].push(d.v)
        }else{
            temp[d.p] = [d.v]
        }
    }


    function obj2tree (obj) {
        let temp = obj;
        for ( let i = 0; i< keys.length-1; i++){
            for( let j = i+1 ;j < keys.length-1; j ++){

                let sameFlag = temp[keys[j]].findIndex(d => (parseInt(keys[i]) === d));
                if(sameFlag !== -1){
                    // @keys is array for temp's key
                    //
                    temp[keys[j]][sameFlag] = {[keys[i]]:temp[keys[i]]}
                    // console.log ('content :'+ j , temp[keys[j]][sameFlag])
                    break;
                }
            }
        }
        return temp[1]
    }
    nums.forEach(generate);
    let keys = Object.keys(temp).sort((a, b) => (b-a));



    // console.log(JSON.stringify(obj2tree(temp)))
    // console.log(obj2tree(temp))
}


let nums = [
    {p:1,v:2},
    {p:3,v:6},
    {p:2,v:5},
    {p:5,v:9},
    {p:1,v:4},
    {p:4,v:8},
    {p:1,v:3},
    {p:0,v:1},
    {p:3,v:7},
]

let input = {
    h3: {
        parent: 'h2',
        name: '副总经理(市场)'
    },
    h1: {
        parent: 'h0',
        name: '公司机构'
    },
    h7: {
        parent: 'h6',
        name: '副总经理(总务)'
    },
    h4: {
        parent: 'h3',
        name: '销售经理'
    },
    h2: {
        parent: 'h1',
        name: '总经理'
    },
    h8: {
        parent: 'h0',
        name: '财务总监'
    },
    h6: {
        parent: 'h4',
        name: '仓管总监'
    },
    h5: {
        parent: 'h4',
        name: '销售代表'
    },
    h0: {
        parent: '',
        name: 'root'
    }
};
let tree = [
    {
        node:1,
        children:[
            {
                node:2,
                children:[{}]
            }
        ]
    }
]



let ntree = [
    {
        1:[
            {
                2:[
                    {
                        5:0
                    }
                ],
                3:[]
            }
        ]
    }
]
createdTree(nums)



var plain2Tree = function (obj) {
    var key, res
    for(key in obj) {
        var parent = obj[key].parent
        if(parent === '') {
            res = obj[key]
        } else {
            obj[parent][key] = obj[key]
        }
    }
    return res
}

let merge = function(nums1, m, nums2, n) {
    let i = m - 1; //nums1 large
    let j = n - 1; //nums2 large
    while(i >= 0 || j >= 0) {
        if (nums1[i] >= nums2[j] || j < 0) {
            nums1[i + j + 1] = nums1[i];
            i--;
        } else {
            nums1[i + j + 1] = nums2[j];
            j--;
        }
    }
};


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let len = numbers.length, l = len - 1, s = 0;
    while(s < l){
        if(numbers[s] + numbers[l] - target > 0){
            l--;
        }else if(numbers[s] + numbers[l] - target < 0){
            s++;
        }else{
            console.log(l)
            break;
        }
    }
    return [s+1,l+1];
};

var reverseVowels = function(s) {
    let len = s.length;
    let arr = s.split("");
    let reg = /[aeiou]/i;
    let i=0,j=len-1;
    while(i < j){
        if(reg.test(arr[i]) && reg.test(arr[j])){
            [arr[i],arr[j]] = [arr[j],arr[i]];
            i++;
            j--;
        }else if(reg.test(arr[i]) && !reg.test(arr[j])){
            j--;
        }else if(!reg.test(arr[i]) && reg.test(arr[j])){
            i++;
        }else{
            i++;
            j--;
        }
    }
    console.log(arr)
    return arr.join();
};

console.log(reverseVowels('hello'))