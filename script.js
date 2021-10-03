let btnDelete = document.querySelector("#btn-delete");

btnDelete.addEventListener("click", removeFunc);

function removeFunc(){
  let number = prompt("section number from 1-5");
  let section = document.querySelector("#section" + number);
  section.remove();
}


