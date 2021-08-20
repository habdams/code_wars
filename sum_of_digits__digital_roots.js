// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit,
// continue reducing in this way until
// a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
  function myFunct(main, number) {
    return main + number;
  }

  if (n > 9) {
    let kill = Array.from(String(n), Number);
    return digital_root(kill.reduce(myFunct));
  } else {
    return n;
  }
}
