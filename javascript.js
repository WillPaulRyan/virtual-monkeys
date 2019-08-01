function moveText() {
  // Copies everything from first input into second input, w/ changes
  document.getElementById("output").value = document.getElementById("input").value;
}

async function monkeys() {
  output = document.getElementById("output");
  counter = document.getElementById("counter");
  const original = output.value;
  test = randomize(original);
  let count = 1;

  while (original !== test) {
    counter.innerHTML = count.toLocaleString() + " monkeys typing away...";

    if (count % 1000 == 0) {
      await sleep(.01);
      output.value = test;
    }

    if (count >= 10000000) {
      console.log("timeout");
      break;
    }
    test = randomize(original);
    count++;
  }

  output.value = test;

  if (test == original) {
    counter.innerHTML = count.toLocaleString() + " monkeys were needed to copy your text.";
  }
  else {
    counter.innerHTML = "After " + count.toLocaleString() + " attempts, our monkeys gave up.";
  }
}

async function monkeySingle() {
  out = document.getElementById("output");
  counter = document.getElementById("counter");
  const original = out.value;
  out.value = randomize(original);
  test = out.value.split('');
  let count = 1;

  console.log(test);

  while (test.join('') != original) {
    for (let i = 0; i <test.length; i++) {
      while (test[i] != original.charAt(i)) {

        if (test[i].match(/[A-Z]/)) {
          test[i] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
          await sleep(.1);
          out.value = test.join('');
        }

        else if (test[i].match(/[a-z]/)) {
          test[i] = String.fromCharCode(97 + Math.floor(Math.random() * 26));
          await sleep(.1);
          out.value = test.join('');
        }

        else if (test[i].match(/\d/)) {
          test[i] = String.fromCharCode(48 + Math.floor(Math.random() * 10));
          await sleep(.1);
          out.value = test.join('');
        }
        counter.innerHTML = count.toLocaleString() + " monkeys typing away...";
        count++;
      }
    }
  }
  counter.innerHTML = count.toLocaleString() + " monkeys were needed to copy your text.";
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
