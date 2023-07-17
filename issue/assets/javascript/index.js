//定義

const fizzInput = document.getElementById('fizzNum');
//console.log(fizzInput);
const buzzInput = document.getElementById('buzzNum');
// console.log(buzzInput);
const runButton = document.getElementById('runButton');
// console.log(runButton);
const resultArea = document.getElementById('resultArea');
//console.log(resultArea);
const errorMessage = document.getElementById('errorMessage');
//console.log(errorDisplay);


//関数

const fizzBuzz = (fizzNum, buzzNum) => {

  let result = [];

  for (let i = 1; i <= 99; i++) {
    if (i % fizzNum === 0 && i % buzzNum === 0) {
      result.push('FizzBuzz ' + i);
    } else if (i % fizzNum === 0) {
      result.push('Fizz ' + i);
    } else if (i % buzzNum === 0) {
      result.push('Buzz ' + i);
    }
  }
  return result;
};

const isValidInput = (elem) => {
  return !(isNaN(elem) || elem % 1 !== 0 || elem === "");
};

//イベント

runButton.addEventListener('click', () => {
  resultArea.innerHTML = '';
  //console.log(resultArea);
  errorMessage.textContent = '';
  //console.log(errorMessage);

  
  let fizzNum = parseInt(fizzInput.value);
  //console.log(fizzNum);
  let buzzNum = parseInt(buzzInput.value);
  //console.log(buzzNum);
  let result = fizzBuzz(fizzNum, buzzNum);
  //console.log(result);
  
  if (!isValidInput(fizzNum) || !isValidInput(buzzNum)) {
    errorMessage.textContent = "整数を入力してください";
    //console.log(errorMessage);
    return;
  }

  resultArea.innerHTML = '';  
  //console.log(result);

  result.forEach((item) => {
    const p = document.createElement('p'); 
    //console.log(p);
    p.textContent = item; 
    resultArea.appendChild(p); 
  });
});