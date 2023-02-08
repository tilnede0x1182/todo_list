
function ajouter_une_tâche(tache) {
    let li = document.createElement("li");
    li.innerHTML = tache + "&nbsp&nbsp";

    let bouton_supprimer = document.createElement("button");
    bouton_supprimer.innerText = "X";

    li.appendChild(bouton_supprimer);
    document.querySelector("#todoList").appendChild(li);

    bouton_supprimer.addEventListener("click", function (event) {
        li.remove();
    });
}

document
    .querySelector("#formulaire_ajout_tache")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        ajouter_une_tâche(document.querySelector("#todoInput").value);
    });
