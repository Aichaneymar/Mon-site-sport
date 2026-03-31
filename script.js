document.addEventListener("DOMContentLoaded", function () {

  const bouton = document.getElementById("btn-entrainement");

  if (bouton) {

    bouton.addEventListener("click", function () {

      alert("C'est parti pour l'entraînement ! 💪");

    });
  }

  const pageCourante = window.location.pathname;

  const liensNav = document.querySelectorAll("nav ul li a");


  liensNav.forEach(function (lien) {
  
    if (pageCourante.includes(lien.getAttribute("href"))) {
      lien.classList.add("actif");
    }
  });

});
