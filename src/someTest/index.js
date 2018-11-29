/**
 * Created by xuqinrui on 2017/11/20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Lion } from './test-es6';
import _ from 'lodash';
import printMe from './print.js';
import './style.css';
// import Risk from './risk.png';
// import Data from './data.xml';

function component() {
    let element = document.createElement('div');

    let btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack125' +
        '，，'
    ], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;


    element.appendChild(btn);
    createArgumentsTest({ xqr: 1 }, 2, 3);

    // let lion = new Lion({name:'lion'});
    return element;
}

function createArgumentsTest({ xqr = 123, wql = 245 } = {}, o) {
    // console.log(xqr,wql,o);
}

function Obj() { this.name = 1; };
Obj.prototype.name = "xqr";
Obj.prototype.test = ["test"];
Obj.prototype.getName = function() {
    // console.log(this.name)
};

let o1 = new Obj();
o1.test.push("xqr1");
let o2 = new Obj();
o2.getName = function() {}
o1.getName();
o2.getName();


function Foo() {
    getName = function() { alert(1); };
    return this;
}
Foo.getName = function() { alert(2); };
Foo.prototype.getName = function() { alert(3); };
var getName = function() { alert(4); };

function getName() { alert(5); }

//请写出以下输出结果：
// Foo.getName();   //2
// getName();  //4
// Foo().getName();  //2  // 1
// getName(); // 1
// new Foo.getName(); // 2
// new Foo().getName(); // 1  // 3
// new new Foo().getName(); // 3  // 3

//
// var count = 0;
// var obj = {
//     update: function(n){
//         var tempCount;
//         if(!this.show){
//             tempCount = count++;
//             this.tempCount = tempCount;
//             this.show = function(n){
//                 console.log(n || 'first');
//                 console.log(tempCount,obj.tempCount)
//                 console.log(obj)
//             };
//             this.show()
//             return;
//         }
//         tempCount = count++;
//         console.log(tempCount)
//         this.tempCount = tempCount;
//         setTimeout(function(){
//             obj.show();
//         },10)
//     }
// }
// obj.update();
// setTimeout(function(){
//     obj.show();
// },100)
// var test = setTimeout(function(){
//     obj.update('b');
// },1000)


// var plusOne = function(digits) {
//     let ind = digits.length-1;
//     function nums(array){
//         if(array[ind] + 1 >= 10){
//             array[ind] = 0;
//             ind --;
//             nums(array);
//         }else{
//             array[ind] += 1;
//         };
//     };
//     nums(digits);
//     return digits;
// };
// plusOne([1,2,3])
document.body.appendChild(component());



var arr = [2, 5, 7, 3, 2, 0, 9, 1, 2, 3, 4, 5];
// function sortArr(arr){
//     let temp = arr[0];
//     let cur = 0;
//     for(let i=arr.length; i >= cur; i--){
//         if()
//     }
// }
// console.time(sortArr);
// sortArr();
// console.timeEnd(sortArr);
var Event = (function() {
    var list = {},
        listen,
        trigger,
        remove;
    listen = function(key, fn) { //监听事件函数
        if (!list[key]) {
            list[key] = []; //如果事件列表中还没有key值命名空间，创建
        }
        list[key].push(fn); //将回调函数推入对象的“键”对应的“值”回调数组
        console.log(list);
    };
    trigger = function() { //触发事件函数
        var key = Array.prototype.shift.call(arguments); //第一个参数指定“键”
        var func = list[key];
        if (!func || func.length === 0) {
            return false; //如果回调数组不存在或为空则返回false
        }
        for (var i = 0; i < func.length; i++) {
            func[i].apply(this, arguments); //循环回调数组执行回调函数
            console.log(list);
        }
        console.log(list);
    };
    remove = function(key, fn) { //移除事件函数
        var msg = list[key];
        if (!msg) {
            return false; //事件不存在直接返回false
        }
        if (!fn) {
            delete list[key]; //如果没有后续参数，则删除整个回调数组
        } else {
            for (var i = 0; i < msg.length; i++) {
                if (fn === msg[i]) {
                    msg.splice(i, 1); //删除特定回调数组中的回调函数
                }
                console.log(list);
            }
        }
    };
    return {
        listen: listen,
        trigger: trigger,
        remove: remove
    }
})();
var fn = function(data) {
    console.log(data + '的推送消息：xxxxxx......');
}
var fnn = function(data) {
    console.log(data + '学习发布');
}
var fnnn = function(data) {
    console.log('第二个');
}
Event.listen('某公众号', fn);
Event.listen('xqr', fnn);
// Event.listen('xqr', fnnn);
// Event.trigger('某公众号', '2016.11.26');
// Event.trigger('xqr', '2018.11.26');
// setTimeout(function(){Event.trigger('xqr','meiy')},1000)
// setTimeout(function(){Event.trigger('xqr','bian话')},2000)
// setTimeout(function(){Event.trigger('xqr','真的监听的么')},3000)
// Event.remove('某公众号', fn);



Function.prototype.nBind = function(context) {
    var self = this;
    var context = Array.prototype.shift.call(arguments);
    var beforeArgs = arguments;
    console.log(arguments);
    return function() {
        self.apply(context, Array.prototype.concat(beforeArgs, arguments));
    }
}
var obj1 = {
    name: 1,
    age: 2,
    write: function() {
        console.log(this.name + this.age);
    }
}

var obj2 = {
    name: 'qq',
    age: 'cc'
};
obj1.write();
document.write(123);
alert(12)
console.log(obj1.write.bind(obj2));