function getPin(){
    const pin = genaratePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function genaratePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getPin();
    //display pin 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

///////////////////////////////////
document.getElementById('keypad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const keypadNumbersField = document.getElementById('keypad-numbers');
    const previousKeypadNumber = keypadNumbersField.value;
    if(isNaN(number)){
        if(number === 'C'){
            keypadNumbersField.value = '';
        }
        else if(number === '<'){
            const digits = previousKeypadNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            keypadNumbersField.value = remainingDigits;
        }
    }
    else{
        const newKeypadNumber = previousKeypadNumber + number;
        keypadNumbersField.value = newKeypadNumber;
    }
    document.getElementById('verify-pin').addEventListener('click',function(){
        const displayPinField = document.getElementById('display-pin');
        const currentPin = displayPinField.value;

        const keypadNumbersField = document.getElementById('keypad-numbers');
        const KeypadNumbers = keypadNumbersField.value;


        const pinMatchedMessage = document.getElementById('pin-matched');
        const pinNotMatchedMessage = document.getElementById('pin-not-matched');
        if(KeypadNumbers === currentPin){
            pinMatchedMessage.style.display = 'block';
            pinNotMatchedMessage.style.display = 'none';
        }
        else{
            pinNotMatchedMessage.style.display = 'block';
            pinMatchedMessage.style.display = 'none';
        }
    })
})