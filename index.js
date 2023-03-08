function structureIf(request) {
  if (request === true) {
    document.getElementById("answerStructureIf").style.display = "block";
  }
  if (request === false) {
    document.getElementById("answerStructureIf").style.display = "none";
  }
}

function structureIfElse(request) {
  if (request === true) {
    document.getElementById("answerStructureIfElse").style.display = "block";
  } else {
    document.getElementById("answerStructureIfElse").style.display = "none";
  }
}

function structureSwitchCase(request) {
  switch(request){
    case 'red':
      document.getElementById("answerStructureSwitch").style.color = 'red';
      break;
    case 'green':
      document.getElementById("answerStructureSwitch").style.color = 'green';
      break;
    case 'blue':
      document.getElementById("answerStructureSwitch").style.color = 'blue';
      break;
    default:
      document.getElementById("answerStructureSwitch").style.color = 'black';
  }
}

function structureFor(number) {
  let answer = 1;
  for(i=1; i<=number; i++){
    answer *= i;
  }
  document.getElementById("answerFor").innerHTML = `El factorial de ${number} es ${answer}`;
}

function structureWhile(limit) {
  let number = 1;
  let text = '';
  while(number<limit){
    text += "<br>The number is " + number;
    number++;
  }
  document.getElementById("answerWhile").innerHTML = text; 
}
