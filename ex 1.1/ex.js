let n = Number(prompt(`Your number pls`));
let inputNumber = Number(prompt(`Check number pls`));
function findOppositeNumber(n, inputNumber) {
  if (4<=n && n <=20 && n%2 == 0) {
    let outputNumber;
    if (inputNumber < n/2) 
    {
      outputNumber = n/2 +inputNumber;
      console.log(outputNumber);
    } else { 
      outputNumber = inputNumber -n/2;
      console.log(outputNumber);

    }  
  } else {
    alert(`Re - input n`);
  }
}
findOppositeNumber(n, inputNumber);