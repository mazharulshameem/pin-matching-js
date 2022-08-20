
function getPin(){
  const  pin = generatePin();
  const pinString = pin + '';
  if (pinString.length === 5){
    return pin;
  }else{
    // console.log('pin not 4 digit found', pin);
    return getPin();
  }
}

function generatePin(){
  const random = Math.round(Math.random()*100000);
  return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
  const pin = getPin();
   const displayPinField = document.getElementById('display-pin');
   displayPinField.value = pin;


})

document.getElementById('calculator').addEventListener('click', function(event){
  const number = (event.target.innerText);
  const typeNumberField = document.getElementById('type-numbers');
  const previousTypeNumber = typeNumberField.value;

  if(isNaN (number)){
    if(number === 'C'){
      typeNumberField.value = '';
    }
    else if(number === '<'){
     const digits = previousTypeNumber.split('');
     digits.pop();
     const remainingDigits = digits.join('');
     typeNumberField.value = remainingDigits;

    }

  }else{
    const previousTypeNumber = typeNumberField.value;
    const newTypeNumber = previousTypeNumber + number;
    typeNumberField.value = newTypeNumber;
  }
})

document.getElementById('submit-pin').addEventListener('click', function(){
const displayPinField = document.getElementById('display-pin');
const currentPin = displayPinField.value;

const typeNumberField = document.getElementById('type-numbers');
const typeNumber = typeNumberField.value;

const pinSuccessMessage = document.getElementById('pin-success');
const pinUnsuccessMessage = document.getElementById('pin-unsuccess');
if(typeNumber === currentPin ){
 pinSuccessMessage.style.display = 'block';
 pinUnsuccessMessage.style.display = 'none';
}else{
 pinUnsuccessMessage.style.display = 'block';
 pinSuccessMessage.style.display = 'none';
}

})




