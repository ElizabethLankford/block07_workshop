/*pseudo code
    link js file to html file
    create message string
    create 3 variables for the lock combo
    create arithmetic problems for each combo
    display on html the message and lock combo
*/

// message for user
const messageStr = "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";

// lock combination using arithmetic operators
const code1 = 5 + 5;
const code2 = 5 * 8;
const code3 = 40 - 1;

// console logging the variables
console.log(messageStr);
console.log(code1, code2, code3);

// pop up dialog for the message
alert(messageStr);

// pop up dialog for the code
alert(`${code1} - ${code2} - ${code3}`);

