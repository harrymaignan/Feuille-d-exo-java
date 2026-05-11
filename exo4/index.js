const Form = document.querySelector("#form");
const Result = document.querySelector("#result");
let CintoF = 0;
let FintoC = 0;

function Converter(event) {
  event.preventDefault();
  const Celsius = document.querySelector("#celsius").value;
  const Fahrenheit = document.querySelector("#fahrenheit").value;

  if (Celsius != "") {
    CintoF = Celsius * 1.8 + 32;
    Result.innerText = Celsius + "C°-> " + CintoF + "F°";
  } else if (Fahrenheit != "") {
    FintoC = (Fahrenheit - 32) / 1.8;
    Result.innerText = Fahrenheit + "F°-> " + FintoC + "C°";
  }
}

Form.addEventListener("submit", (e) => Converter(e));
