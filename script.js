// let arr = new myArray([1, 2, 3, 4, 5, 6])
//
// function myArray(arg) {
//     this.member = arg
// }
//
// function myArray2() {
//
// }
//
// let arr1 = new myArray2()
// console.log(arr1)


////////slice+
// let arr = new myArray([1, 2, 3, 4, 5, 6])
//
// function myArray(arg) {
//     this.member = arg
// }
//
//
// myArray.prototype.push = function (a) {
//     this.member[this.member.length] = a
// }
//
// myArray.prototype.slice = function (a, b = null) {
//     let code = []
//     if (b) {
//         for (let i = a; i < b; i++) {
//             code.push(this.member[i])
//         }
//     } else if (a) {
//         for (let i = a; i < this.member.length; i++) {
//             code.push(this.member[i])
//         }
//     }
//     return code
// }
//
// arr.push(8)
// console.log(arr.slice(4, 5))
//


///splice+


// let arr = new myArray([1, 2, 3, 4, 5, 6, 7, 8, 9])
//
// function myArray(arg) {
//     this.member = arg
// }
//
//
// myArray.prototype.push = function (a) {
//     this.member[this.member.length] = a
// }
//
// myArray.prototype.slice = function (a, b = null) {
//     let code = []
//     if (b) {
//         for (let i = a; i < b; i++) {
//             code.push(this.member[i])
//         }
//     } else if (a) {
//         for (let i = a; i < this.member.length; i++) {
//             code.push(this.member[i])
//         }
//     }
//     return code
// }
//
//
// myArray.prototype.MySplice = function (a, b = null, c = null) {
//     let arr = []
//     let a1 = this.slice(0, a)
//
//     let b2 = this.slice(a, a + b)
//     let b3 = this.slice(a + b, this.member.length - 1)
//     if (a && !b && !c) {
//         arr.push(...a1)
//     } else if (a && b && c) {
//         arr.push(...a1)
//         arr.push(c)
//
//     } else if (a && b && !c) {
//         arr.push(...a1)
//         arr.push(...b3)
//
//     }
//
//     console.log(arr)
//
// }
// arr.MySplice(3,2)


///////shift+


// let arr = new myArray([1, 142, 23, 4, 5])
//
// function myArray(arg) {
//     this.member = arg
// }
//
//
// myArray.prototype.push = function (a) {
//     this.member[this.member.length] = a
// }
// arr.push(14)
//
//
//
//  myArray.prototype.shift = function () {
//     let code=[]
//
//     for(let i = 1; i<this.member.length;i++){
//         code.push(this.member[i])
//
//
//     }console.log(code)
// }
//
// arr.shift()


/////unshift+
//
// let arr = new myArray([1, 142, 23, 4, 5])
//
// function myArray(arg) {
//     this.member = arg
// }
//
// myArray.prototype.unshift=function (p=[]){
//     let code = []
// if(p){
//         code.push(...p,...this.member)
// }else {
//     code.push(...this.member)
// }
// return code
// }
//
// console.log(arr.unshift([2]))


////pop+

//
// let arr = new myArray([1, 142, 23, 4, 5])
//
// function myArray(arg) {
//     this.member = arg
// }
//
// myArray.prototype.pop=function (){
//     let code = []
//
//     this.member.length-=1
// return this.member
// }
//
// console.log(arr.pop())


//push+
//
// let arr = new MyArray([1,23,4,5,6,7])
//
// function MyArray(arg){
//     this.member = arg
// }
// MyArray.prototype.MyPush = function (e){
//     this.member[this.member.length]=e
// }
// arr.MyPush(12)
// console.log(arr)


//revers+
//
// let arr = new MyArray([1,23,4,5,6,7])
//
// function MyArray(arg){
//     this.member = arg
// }
//
// MyArray.prototype.MyRevesed=function (e){
//     let revers=[]
//     for (let i = this.member.length-1;i>=0;i--){
//        revers.push(this.member[i])
//     }
//
//     console.log(revers)
// }
//
// arr.MyRevesed()

//// map+
// let Provisvalue
//
// Array.prototype.map=function (e){
//     let arr=[];
//
//     for (let i =0; i<this.length;i++){
//         let x = e(this[i])
//         arr.push(x)
//         console.log(arr)
//         if(arr[0]){
//             Provisvalue  = arr[0]
//         }
//
//     }
//     return arr
// }
// let num  = [1,2,3,4]
// num=num.map(e=>e*2)
// console.log(num)





//
//         let arr = [1,2,3,4,5,6,7]
// arr.filter(res=>{
//     if(res%2===0){
//
//         console.log("hajox")
//     }else {
//         console.log("barev")
//     }
// })
