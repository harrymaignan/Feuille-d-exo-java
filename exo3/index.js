const infoForm = document.querySelector("#infoForm");
const Result = document.querySelector("#result");

function CardGenerator(event) {
  event.preventDefault();
  const Name = document.querySelector("#name").value;
  const Age = document.querySelector("#age").value;
  const City = document.querySelector("#city").value;
  const FavoriteColor = document.querySelector("#favoritecolor").value;

  Result.innerHTML = `<div>
  <p>Prénom : ${Name} </p>
  <p> Âge : ${Age}  </p>
   <p>Ville : ${City} </p>
   <p>Couleur : ${FavoriteColor}</p>
   <button onclick="DeleteCard()">❌</button>
   </div>`;
  Result.style.backgroundColor = FavoriteColor;
}
const Deletebutton = document.querySelector("#Delete");

function DeleteCard() {
  Result.innerHTML = `<div></div>`;
}
infoForm.addEventListener("submit", (e) => CardGenerator(e));

Deletebutton.addEventListener("click", () => DeleteCard());
