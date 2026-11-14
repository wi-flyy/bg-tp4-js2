"use strict" // Mode strict (slide 51)
let total_points = 0 ; // Variable globale déclarée avec let (slide 51)

let lignes = 0 ;

const persons = [ // Tableau d'objets (slide 40), const (slide 51)
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }

];

init() ; // Appel de fonction (slide 45)

function init(){ // Déclaration de fonction (slide 45)
    for (const person of persons){ // Boucle for..of (slide 44)

        doInsert(person.nom, person.prenom, person.points) ; // Appel de fonction avec les propriétés de l'objet courant (slides 39 et 45)
    }
}

function doInsert(nom, prenom, points){ // Déclaration de fonction (slide 45)
    lignes++ ; // Opérateur d'incrémentation/décrémentation (slide 41)
    total_points += points; // Opérateur combiné (slide 41)
    const num = lignes ; // Affectation (slide 36)

    doInsertRowTable(num, nom, prenom, points); // Appel de fonction (slide 45)

    update_summary();
}

function update_summary(){ // Déclaration de fonction (slide 45)
    const element_lignes = document.getElementById("p1"); // getElementById (slides 61 à 63)

    const element_points = document.getElementById("p3");

    element_lignes.innerText = lignes + " ligne(s)"; // innerText (slide 91), opérateur + (slide 41)

    element_points.innerText = "Total point(s)= " + total_points;

}

function consoleTableau(){ // Déclaration de fonction (slide 45)
    console.log(persons); // console.log (slide 33)
}

function doInsertRowTable(num , nom , prenom , points){ // Déclaration de fonction (slide 45)
    const table = document.getElementById("table_persons"); // getElementById (slides 61 à 63)

    const tr = document.createElement("tr"); // createElement (slide 104)

    const td_num = document.createElement("td");
    td_num.setAttribute("class" ,"col_text"); // setAttribute (slide 107)

    const col1 = document.createElement("td"); // createElement (slide 104)
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num; // innerText (slide 91)
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    const checkbox = document.createElement("input"); // createElement (slide 104)
    checkbox.setAttribute("type", "checkbox"); // setAttribute (slide 107)
    col5.append(checkbox); // append() (slide 98)

    col1.setAttribute("class", "col_number"); // setAttribute (slide 107)
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    tr.append(col1, col2, col3, col4, col5); // append() (slide 98)

    table.append(tr);

}

function doNewData(){ // Déclaration de fonction (slide 45)
    const elt_nom = document.getElementById("form_nom"); // getElementById (slides 61 à 63)
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    const nom = elt_nom.value.trim(); // value : attribut accessible directement (slide 93) ; trim() : hors cours
    const prenom = elt_prenom.value.trim();
   const points = parseInt(elt_points.value.trim());

     if (nom === "" || prenom === "" || Number.isNaN(points)) { // if, opérateurs logiques (slides 41 et 42)
        alert("Formulaire incomplet !"); // alert (slide 116)
    } else { // else (slide 42)
        doInsert(nom, prenom, points); // Appel de fonction (slide 45)
    }
persons.push({ nom: nom, prenom: prenom, points: points }); // push (slide 38)

        elt_nom.value = ""; // Propriété value (slide 93)
        elt_prenom.value = "";
        elt_points.value = "";

}

function deleteRow(){ // Déclaration de fonction (slide 45)
    if (lignes === 0) { // if (slide 42)
        alert("Le tableau est vide !"); // alert (slide 116)
        return; // return (slide 45)
    }

    const table = document.querySelector("table"); // querySelector (slides 76 et 77)
    const cochees = table.querySelectorAll(".col_chkbox input:checked"); // querySelectorAll (slides 76 et 77)

    if (cochees.length === 0) { // if (slide 42)
        alert("Sélectionnez au moins une ligne !"); // alert (slide 116)
        return; // return (slide 45)
    }

    if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) { // if (slide 42), confirm : méthode de window (hors cours)
        return; // return (slide 45)
    }

    const rows = table.querySelectorAll("tr"); // querySelectorAll (slides 76 et 77)

    for (let i = rows.length - 1; i >= 1; i--) { // Boucle for (slide 44)
        const row = rows[i]; // Accès à un élément de la collection par son indice (slide 38)
        const checkbox = row.querySelector(".col_chkbox input"); // querySelector (slides 76 et 77)

        if (checkbox.checked) { // if (slide 42), propriété checked : attribut accessible directement (slide 93)
            const points = parseInt(row.cells[3].innerText); // parseInt et cells : hors cours ; innerText (slide 91)

            total_points -= points; // Opérateur combiné (slide 41)

            lignes--; // Opérateur d'incrémentation/décrémentation (slide 41)

            row.remove(); // remove() (slide 100)

            persons.splice(i - 1, 1); // splice : hors cours (méthode des tableaux, voir slide 38)
        }
    }

    alert("Suppression effectuée avec succès !"); // alert (slide 116)
    update_summary(); // Appel de fonction (slide 45)

}
