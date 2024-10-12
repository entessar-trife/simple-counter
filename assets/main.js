const min = document.querySelector(".min");
const plus = document.querySelector(".plus");
const number = document.querySelector(".number");
let body = document.querySelector("body");
let n = 0;

plus.addEventListener ("click", increase);
function increase() {
  if (n >= 0 &&  n < 10) {
    n++;
    n = (n < 10 ) ? "0" + n: n;
    number.value = n;
  }
  else if ( n >= 10 &&  n < 100 ) {
    n += 10;
    number.value = n;
    body.classList.add("blue");
    number.classList.add("blue");
  }
  else if (n >= 100) {
    n += 100;
    number.value = n;
    body.classList.add("yellow");
    number.classList.add("yellow");
  } 
}

min.addEventListener ("click", decrease);
function decrease() {
  if ( n > 0 ) {
    n--;
    n = (n < 10) ? "0" + n : n;
    number.value = n;
  }
}
