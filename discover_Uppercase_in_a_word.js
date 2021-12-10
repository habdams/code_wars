var capitals = function (word) {
	// Write your code here
  let arrayCounter = [];
  let convWord = word.split("");
  for (let l of convWord){
    if(l == l.toUpperCase())
      arrayCounter.push(convWord.indexOf(l))
    }
  return arrayCounter;
};