/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

var canPartitionKSubsets = function(nums, k) {
  let sum = 0, temp={};
  nums.forEach(d => {
    if(temp[d]){
      temp[d] ++
    }else{
      temp[d] = 1
    }
    sum += d;
  });
  if( (sum/k) % 1 ){
    // console.log(1)
    return false;
  }
  let flag = true;
  for( let i in temp){
    if(temp[i] % k){
      flag = false
    }
  }
  if(flag) {return true};
  const target = sum/k ;
  const sortNums = nums.sort((a1,a2) => {
    return (a2 - a1)
  });
  if(sortNums[0] > target){
    // console.log(2)

    return false;
  }


  let cur = 0;
  function entry(arr){
    cur ++;
    if(cur === k){
      return (arr.reduce((a,b) => (a + b))) === target
    }
    let len = arr.length,gsum=0;
    for(let i = 0; i < len; i++){
      if(!arr[i]) continue;
      gsum = gsum + arr[i];
      if(gsum === target){
        arr.splice(i, 1, 0);
        break;
      }else if(gsum < target){
        arr.splice(i, 1, 0)
      }else{
        gsum = gsum - arr[i]
      }
    }
    if(gsum !== target){
      console.log(3)
      return false;
    }else{
      return entry(sortNums)
    }
  }
  return entry(sortNums)
};
const nums = [3522,181,521,515,304,123,2512,312,922,407,146,1932,4037,2646,3871,269];
let str = '()(|**$';
const reg = /[ '\\'| '$'| '('|  ')'| '*'|  '+'|  '.'| '['| ']/g ;
let str111 = str.split('').map(d => {
  return d.replace(reg, `\\${d}`);
}).join(',');

// console.log(str111)
//
// str = `asfasd asf   asdf
// fasdfasd
// sadf`
// const reg1 = /^[' ']$/g;
// console.log(str.replace(reg1, ''))


let strrr = '123123';
const str2f = (str) => {
  return Array.prototype.map.call(str,(d) => {
    return d
  })
}
let a = {
  b:{
    c:'string'
  }
}


var minPathSum = function(grid) {
  const m = grid.length, n =grid[0].length; //m rows, n columns;
  for(let i = 0; i < m; i++){
    for(let j = 0; j < n; j++){
      if(i > 0 && j > 0){
        grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j];
      } else if( i > 0 && j <= 0){
        grid[i][j] = grid[i-1][j] + grid[i][j];
      } else if( i <= 0 && j > 0){
        grid[i][j] = grid[i][j-1] + grid[i][j];
      }
      console.log(grid[i][j])
    }
  }
  return grid[m-1][n-1]
};
// let arr = [[1,3,1],[1,5,1],[4,2,1]];
let arr = [1,2,3,4,5,6,7,8,89,'a'];
let arr1 = [{
  "id": 2,
  "name": "Aland Islands",
  "iso3": "ALA",
  "iso2": "AX",
  "phone_code": "+358-18",
  "capital": "Mariehamn",
  "currency": "EUR"
},
  {
    "id": 3,
    "name": "Albania",
    "iso3": "ALB",
    "iso2": "AL",
    "phone_code": "355",
    "capital": "Tirana",
    "currency": "ALL"
  },
  {
    "id": 4,
    "name": "Algeria",
    "iso3": "DZA",
    "iso2": "DZ",
    "phone_code": "213",
    "capital": "Algiers",
    "currency": "DZD"
  },
  {
    "id": 5,
    "name": "American Samoa",
    "iso3": "ASM",
    "iso2": "AS",
    "phone_code": "+1-684",
    "capital": "Pago Pago",
    "currency": "USD"
  }];

// console.log(arr.find());
Array.prototype.find = function (fn) {
  if(!fn) {throw new Error('find is not defined')}
  if(typeof fn !== 'function') {return undefined}
  const realArr = args || this;
  for (let i = 0; i < realArr.length; i ++){
    if(fn(realArr[i], i)){
      return realArr[i];
      break;
    }
  }
};
Array.prototype.map = function (fn, args) {
  if(!fn) {throw new Error('map is not defined')}
  if(typeof fn !== 'function') {return undefined}
  const realArr = args || this;
  const resultArr = [];
  for (let i = 0; i < realArr.length; i ++){
    resultArr.push(fn(realArr[i], i, realArr));
  }
  return resultArr;
};


String.prototype.format2SNotation = function() {
  if (this == Number(this)){
    if(this.indexOf('.') > -1){
      const floatString = this.slice(this.indexOf('.'));
      const intString = Number(this.slice(0, this.indexOf('.')));
      console.log(intString.toLocaleString())
      return `${intString.toLocaleString()}${floatString}`;
    }else{
      return this.toLocaleString();
    }
  } else{
    return this;
  }
};

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  const existingObj = {};
  existingObj[n] = 1;
  function checkHappy(nums) {
    console.log('nums',nums);
    const arr = `${nums}`.split('').map(d => d*d);
    const sum = arr.reduce((a1, a2) => {
      return (parseInt(a1)+parseInt(a2))
    });


    if(sum == 1){
      return true;
    }else if(existingObj[sum]){
      return false;
    }else{
      existingObj[sum] = 1;
      return checkHappy(sum)
    }
  }
  return checkHappy(n)
};

isHappy(7);
