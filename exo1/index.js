const Title = document.querySelector("#title");
const Paragraph = document.querySelector("#paragraph");
const Button = document.querySelector("#button");
const Body = document.querySelector("#body");

function htmlmodifier() {
  Paragraph.innerText = "Vous aver reussi a modifer la page html";
  Title.style.color = "Red";
  Body.style.backgroundColor = "Blue";
}

Button.addEventListener("click", () => htmlmodifier());
