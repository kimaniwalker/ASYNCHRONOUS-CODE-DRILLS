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