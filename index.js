

function tailsNeverFails(){
  let tails = Math.random() >= 0.5
  let counter = 0;

  while (tails) {
    counter++;
  }
  return `You got ${counter} tails in a row!`
}