const calcultva = document.querySelector("#calculTVA");
const Result = document.querySelector("#result");
let tvacalcul = 0;

let ttccalcul = 0;

function CalculTva(event) {
  event.preventDefault();

  const HTprice = Number(document.querySelector("#HT").value);
  const TVAvalue = Number(document.querySelector("#TVA").value);

  tvacalcul = (HTprice * TVAvalue) / 100;
  ttccalcul = HTprice + tvacalcul;

  Result.innerText = "TVA : " + tvacalcul + "€\n TTC : " + ttccalcul + " €";
  console.log(tvacalcul);
}

calcultva.addEventListener("submit", (e) => CalculTva(e));
