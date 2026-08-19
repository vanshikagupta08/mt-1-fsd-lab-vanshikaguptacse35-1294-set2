// for (let i=1; i <100;i++){
//     console.log("school4u")
// }   
// for (let i=1; i<=100; i++ ){
//     console.log(i);
// }

// let i=1;
// while(i<=10){
//    console.log(i);
//    i++;
// }

// let i=10;
// do{
//    console.log(i)
// } while(i<=5) // ek baar to ye run krta hi h kyuki yha task phle hota hai fir baadme ye condition lgata hai.

// for-of loop (used for string)

// let str = "music is great"
// for(let ch of str){
//     console.log(ch)
// }

//  for(let i=0; i<str.length; i++){
//     console.log(str[i])
//  }  

// for (let i=0; i<=100; i++){
//     if(i % 2==0){
//         console.log(i)
//     }
// }  

// let str = "alphauio"
// let vowelCount = 0;
// let consonentCount=0;
// for(let ch of str){
//     if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
//         vowelCount++;
//     } else{
//         consonentCount++;
//     }
// }
// console.log("vowelCount = ", vowelCount)
// console.log("consnent Count = ", consonentCount) 

// let n= Number(prompt("Enter a number:"));

// let sum = 0;
// for (i=1; i<=n; i++){
// sum += i;
// console.log(sum);
// }

// console.log("sum = " , sum) 

// let m=Number(prompt("enter starting no:"));
// let n=Number(prompt("enter ending no:"));

// let sum = 0;
// for(let i = m; i<= n; i++){
//     sum += i;
// }

// console.log("sum= ", sum)

// let n = Number(prompt("enter ending number:"));

// for(let i = 1; i<= n; i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// let computerNumber = 6;
// let guess;

// while(guess !== computerNumber){

//     guess = Number(prompt("enter correct number: "))

// if(isNaN(guess)){
//     alert("not a valid number,please try again");
// }else if(guess< computerNumber){
//     alert("Number is low!, please try again!")
// } else if(guess > computerNumber){
//     alert("Number is high,please try again!");
// } else  {
//     alert("congratulations!..your guess is correct!")
// }
// }  

// // let password = "alpha";
// // let noOfAttempt = 0;
// // let userPassword = "";

// // while(password !== userPassword && noOfAttempt < 3){
// //     userPassword=prompt("enter password:");
// //     noOfAttempt++;

// //     if(userPassword === password){
// //         alert("congratulations your password matched!");
// //     }else if(noOfAttempt >= 3){
// //         alert("Your attempt is over")
// //         } else{
// //         alert("your password is incorrect,please try again!")
// //     }
// }

// let n = 7;
// let fact = 1;

// for(let i = 1; i<=n; i++){
//        fact *= i;
// }
// console.log("factorial= ",fact); 

// let n = 5;

// for(let i=1; i<=5;i++){
//     let str = " ";
//     for(let j=1;j<=i;j++){
//         str = str + j + " ";
//     }
//     console.log(str);
// }

// game:-


// let playAgain = 'yes';

// while(playAgain === 'yes'){
// alert("you wake up in a dense forest");

// let userChoice = prompt("do you want to go left or right?");
// if(userChoice === 'left'){
//     alert("You see something shiny in the mud!");
//     userChoice = prompt("Do you pick it up?(yes or no)");
//     if(userChoice === 'yes'){
//         alert("It is a magical stone! you are teleported to saftey,you win!")
//     } else{
//         alert("you sink it to the mud!")
//     }
// } else{
//     alert("you find a cave!");
//     userChoice =prompt("Do you enter the cave?(yes or no)")
//     if(userChoice === 'yes'){
//         alert("you barely escape!")
//     }else{
//         alert("a peaceful night under the stars!");
//     }
// }

// userChoice = prompt("do you want to play again? (yes or no")
// if (userChoice ==='no'){
//     playAgain = 'no';
//     alert("Thanks for playing!")
// }
// }  
