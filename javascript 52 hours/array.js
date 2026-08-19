// let arr = [4,5,10,23];
// let arr2= ["apple","mango","litchi"];
// let arr3= ["manas","bhagalpur",17];
// let arr4 = ["mkl",2,3,4,[2,3,5]];
// console.log(arr);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);

//to create array by constructor method

// let arr = new Array(2,3,4,5,"alskdokjf") 
// console.log(arr) 

// let arr = [20]
// let carr = new Array(20).fill(0);
// console.log(arr)
// console.log(carr) //jn sb pr 1 hi element chahiye ho

// console.log(arr.length)
// console.log(carr.length);

// console.log(typeof arr);

// let arr = [1,3,5,8];
// console.log(arr[0])
// console.log(arr[2])
// arr[2]=99;
// console.log(arr)
// arr[0]=100;
// console.log(arr)


// let arr = [1,3,5,100,99];
// // for(let i=0; i< arr.length; i++){
// //     console.log(arr[i]*2); // for prointing and multiplying with 2
// // }
// // let arr = [1,3,5,100,99];for(let elem of arr){ //for printing the same element
// //     console.log(elem)
// // }

// for(let ind in arr){ //for printing index
//     console.log(ind)
// } 

// let arr = [2,5,"mkl",5,8];
// // console.log(arr,arr.length);
// // arr.push(999);
// let a = arr.push(999);
// console.log(arr,a,arr.length)
// arr.pop();
// console.log (arr);


// let b=arr.pop();
// console.log(array,b);

// arr.unshift(7) //push krta h elements ko starting me
// console.log(arr);
// arr.shift();    //pop krdeta h elements ko from the starting
// console.log(arr);
// arr.shift();    //pop
// console.log(arr);


// console.log(arr,b); //give the length of the array

// let arr = [2,5,"mkl",5,8];
// // let newArr = arr.slice(-4,3);
// arr.slice=(-4,3); //original array me koi change nhi hoga ye new array return krrha hai
// console.log(arr);
// console.log(newArr); // ye 1 se 3 tk index remove krke dega

// // -4 me ye piche se count krega -1 se and jo dusri digit hai usee front se fir jo common part ayega vo select hoga and then jo front me lastwala hoga vo excluded hota hai

// arr.splice(3,2,99,100,55);
// console.log(arr)

// let arr2 = [5,6];
// let arr3 = ["mkl","fhjkls"];
// // let newArr = arr.concat(arr2,arr3);
// console.log(arr);
// console.log(newArr)

// let newArr = [...arr,...arr2,...arr3]
// console.log(newArr) //spreadsheet method

// let fruits = ["mango", "litchi","guava"];

// let test = fruits.join();
// console.log(fruits)
// console.log(test);
// console.log(typeof test)

// let bool = fruits.includes("litchi");
// console.log(bool);

// fruits.reverse();
// console.log(fruits);

// fruits.find("mango")
// console.log(test);

// let test = fruits.find(function(item){
//     return item === "mango"
// })
// console.log(test)

// let heroes = ["spiderman", ["hulk","hawkeye",["mkl"],"thor"]]
// console.log(heroes.flat(2))

// let arr = [10,5,1,20];
// // let heroes = ["spiderman","ironman","hulk","thor","wanda"]; //lexicographical sorting
// // heroes.sort();
// // console.log(heroes)

// arr.sort((a,b ) => {
//     return b - a;
// });
// console.log(arr);

//a negative value indicates that a should come before b
//a positive value indicates that a should come after b
//zero indicates that a and b are considered equal

let arr = [1,2,5,9,10];

// let newArr = arr.map((elem)=>{
//     return elem*2;
// })
// console.log("original array :",arr);
// console.log(newArr)

//forEach does not change original array forEach and map are same
//filter function ko filter krdega. 


// let result = arr.reduce((prevVal,currVal)=>{
//     return prevVal + currVal
// },10)
//     console.log(result);


// previous value me koi change nhi krega or result me ek new value dega