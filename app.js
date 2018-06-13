// Create a function in app.js that will log a message to the console and return a number
// The value returned should be stored in a global variable
// Create another function that will log the result of multiplying the global variable multiplied by 4
// Create a setTimeout function that will call the second function you created after 2 seconds

/* let msg = 5
message = () => {
    console.log(msg);
}
message();

messageMultiplied = () => {
    console.log(msg * 4);
}
messageMultiplied();

setTimeout(() => {
    messageMultiplied();
}, 2000); */

/* Callbacks

Create a function called getWords that will do the following: 

log a word
log another word after 2 seconds,
log a third word after 0 seconds
log a fourth word

Before you call the function try to determine how the log statements will be printed in the console

Call the getWords function

Create a function called countdown that accepts two parameters: num and callback

Create another function called done that will log a message to the console

The countdown function should countdown from the number you passed it and when it gets to 1 it should return the result of the callback function

Call the countdown function and pass it two arguments: a number to countdown from and the callback function */
/* let words = ['Money', 'On', 'My', 'Mind', 'Today'];
getWords = () => {
    console.log(words[0]);
    setTimeout(() => {
        console.log(words[1]);
    }, 2000);

    setTimeout(() => {
        console.log(words[2]);
    }, 0);


    console.log(words[4]);
}
getWords(); */

/* let num = 1; */




/* function countdown(num, callback) {

    let sec = setInterval(function(){
        console.log(num);
        
        if (num <=1) {
            clearInterval(sec);
            return callback();
        }
        num--
    },1000)



}
result = () => {
    console.log(' I am done');



}




countdown(10,result); */

//PROMISES

/* Promises

Create a global variable and set it equal to true or false

Create a new promise named orderingChickenSandwich

If the global variable is true, create an object with two properties (key/value pair): 
sandwich : chicken
veggies: lettuce
Resolve the object

If the global variable is false, create a variable and set it equal to a new Error

Reject this new variable

Create a new function named orderFood that will call the promise you made and console log the result if the promise is fulfilled or if it is rejected

Call the orderFood function */


let food = true;
let err = 'ERROR';


let orderingChickenSandwich = new Promise(function (Resolve, Reject) {

    if (food === true) {

        let sandwhich = {
            sandwhich: 'chicken',
            vegtables: 'veggies'
        }

        Resolve(sandwhich);

    } else {
        console.log(err)
    }
    Reject(err);

});

let orderFood = orderingChickenSandwich;

orderFood.then(function (Resolve) {
    console.log(Resolve);
},
    (err) => {
        console.log(err);

        orderFood();
    });

/* Chaining Promises

Create a new promise that will resolve the number 1 after 2 seconds

Then return the result multiplied by 2
Then return the new result multiplied by 4
Then return the new result multiplied by 6 */


let num = 1;

chaining = () => {

    return new Promise((resolve) => {

        setTimeout(function () {

            resolve(num)

        }, 1000)

    }).then((result) => {

        console.log(result);

        return result * 2;

    }).then((result) => {

        setTimeout(() => console.log(result), 2000)

        return result * 4;

    }).then((result) => {

        setTimeout(() => console.log(result), 2500)

        return result * 6;

    }).then((result) => {

        setTimeout(() => console.log(result), 3000);

    });

}

chaining();