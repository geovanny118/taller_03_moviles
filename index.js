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
