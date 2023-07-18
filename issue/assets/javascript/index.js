//定義

const fizzInput = document.getElementById('fizz-num');
//console.log(fizzInput);
const buzzInput = document.getElementById('buzz-num');
// console.log(buzzInput);
const runButton = document.getElementById('run-button');
// console.log(runButton);
const resultArea = document.getElementById('result-area');
//console.log(resultArea);
const errorMessage = document.getElementById('error-message');
//console.log(errorDisplay);


//関数

const fizzBuzz = (fizzNum, buzzNum) => {

  //再代入されない
  const result = [];

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

  //再代入されない
  const fizzNum = parseInt(fizzInput.value);
  //console.log(fizzNum);
  const buzzNum = parseInt(buzzInput.value);
  //console.log(buzzNum);
  const result = fizzBuzz(fizzNum, buzzNum);
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