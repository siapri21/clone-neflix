//selectionner element de la fonction
// document.addEventListener("DOMContentLoaded",function(){
//     const listeItems = document.querySelectorAll(".accordion")
//     listeItems.forEach(function(liste){
//         liste.addEventListener("click", function(){
//             const idLabel =liste.querySelector("label").textContent;

//             console.log("texte de label : " + idLabel);
//         })
//     })
// })

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionne tous les labels dans la liste d'accordéon
    const labels = document.querySelectorAll(".accordion label");
  
    // Pour chaque label, ajoute un écouteur d'événements pour le clic
    labels.forEach(function(label) {
      label.addEventListener("dblclick", function() {
        // Sélectionne le bouton radio précédent au label et inverse son état
    const radioBtn = this.previousElementSibling;
        radioBtn.checked = !radioBtn.checked; // Permute l'état du bouton radio
      });
    });
  });