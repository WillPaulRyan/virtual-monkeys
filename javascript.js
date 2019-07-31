function moveText() {
  // Copies everything from first input into second input, w/ changes
  document.getElementById("output").value = document.getElementById("input").value;
}

function randomize(input) {
  let result = '';
  let c = '';


  for (let i = 0; i <input.length; i++) {
    c = input.charAt(i);

    if (c.match(/[A-Z]/)) {
      result += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    }
    else if (c.match(/[a-z]/)) {
      result += String.fromCharCode(97 + Math.floor(Math.random() * 26));
    }
    else if (c.match(/[0-9]/)) {
      result += String.fromCharCode(48 + Math.floor(Math.random() * 10));
    }
    else {
      result += c;
    }
  }
  return result;
}

async function monkeys() {
  const original = document.getElementById("output").value;
  test = randomize(original);
  let counter = 1;

  while (original !== test) {
    document.getElementById("counter").innerHTML = counter + " monkey attemps...";

    if (counter % 5000 == 0) {
      await sleep(.1);
      document.getElementById("output").value = test;
    }

    if (counter >= 1000000) {
      console.log("timeout");
      break;
    }
    test = randomize(original);
    counter++;
  }

  document.getElementById("output").value = test;

  if (test == original) {
    document.getElementById("counter").innerHTML = "It took " + counter + " monkeys to copy your text.";
  }
  else {
    document.getElementById("counter").innerHTML = "After " + counter + " attempts, our monkeys gave up.";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}