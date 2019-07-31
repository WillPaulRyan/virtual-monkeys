function moveText() {
  // Copies everything from first input into second input, w/ changes
  document.getElementById("output").value = document.getElementById("input").value
                                              .toUpperCase()
                                              .replace(/[^A-Z\s]/g, '');
}

function randomize(input) {
  let result = '';
  let c = '';


  for (let i = 0; i <input.length; i++) {
    c = input.charAt(i);

    if (c.match(/\s/)) {
      result += c;
    }
    else {
      result += String.fromCharCode(65 + Math.floor(Math.random() * 26));
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
    // await sleep(.1)

    if (counter % 5000 == 0) {
      await sleep(.1);
      document.getElementById("output").value = test;
    }

    if (counter >= 500000) {
      console.log("timeout");
      break;
    }
    test = randomize(original);
    counter++;
  }

  document.getElementById("output").value = test;

  if (test == original) {
    document.getElementById("counter").innerHTML = counter + " monkeys were needed to copy your text.";
  }
  else {
    document.getElementById("counter").innerHTML = "After" + counter + " attempts, your monkeys gave up.";
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}