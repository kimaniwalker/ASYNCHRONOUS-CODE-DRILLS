// Create a function in app.js that will log a message to the console and return a number
// The value returned should be stored in a global variable
// Create another function that will log the result of multiplying the global variable multiplied by 4
// Create a setTimeout function that will call the second function you created after 2 seconds

let msg = 5
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
}, 2000);

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
let words = ['Money','On','My','Mind','Today'];
getWords = () => {
    console.log(words[0]);
    console.log(words[4]);
}
getWords();

setTimeout(() => {
    console.log(words[1]);
}, 2000);

setTimeout(() => {
    console.log(words[2]);
}, 0);

setTimeout();



