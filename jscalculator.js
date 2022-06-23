let number1 = prompt ('Enter first number:')
let number2 = prompt ('Enter second number:')
let operator = prompt ('Enter an operation:') 

if (operator === '+') {
    result = Number(number1) + Number(number2);
    window.alert(result);
}  else if (operator === '-') {
    result = Number(number1) - Number(number2);
    window.alert(result);
}  else if (operator === '*') {
   result = Number(number1) * Number(number2);
   window.alert(result);
}  else if (operator === '/') {
   result = Number(number1) / Number(number2);
   window.alert (result);

}


