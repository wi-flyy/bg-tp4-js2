"use strict" // Mode strict (slide 51)
let total_points = 0 ; // Variable globale déclarée avec let (slide 51)

let lignes = 0 ; // Variable globale déclarée avec let (slide 51)

const persons = [ // Tableau d'objets (slide 40), const (slide 51)
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }

];

//apple de Init()
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

    update_summary(); // Appel de fonction (slide 45)
}

function update_summary(){ // Déclaration de fonction (slide 45)
    // Récupérer l'élément id = p1
    const element_lignes = document.getElementById("p1"); // getElementById (slides 61 à 63)
 
    // Récupérer l'élément id = p3
    const element_points = document.getElementById("p3"); // getElementById (slides 61 à 63)
 
    // Avec innerText, afficher le nombre de lignes 
    element_lignes.innerText = lignes + " ligne(s)"; // innerText (slide 91), opérateur + (slide 41)
 
    // Avec innerText, afficher le total des points 
    element_points.innerText = "Total point(s)= " + total_points; // innerText (slide 91), opérateur + (slide 41)
 
}

function consoleTableau(){ // Déclaration de fonction (slide 45)
    console.log(persons); // console.log (slide 33)
}

function doInsertRowTable(num , nom , prenom , points){ // Déclaration de fonction (slide 45)
    const table = document.getElementById("table_persons"); // getElementById (slides 61 à 63)

    //cree la ligne <tr>
    const tr = document.createElement("tr"); // createElement (slide 104)

    //cree la cellule <td>
    const td_num = document.createElement("td"); // createElement (slide 104)
    td_num.setAttribute("class" ,"col_text"); // setAttribute (slide 107)

     // Créer 5 éléments de type td (colonnes de tableau)
    const col1 = document.createElement("td"); // createElement (slide 104)
    const col2 = document.createElement("td"); // createElement (slide 104)
    const col3 = document.createElement("td"); // createElement (slide 104)
    const col4 = document.createElement("td"); // createElement (slide 104)
    const col5 = document.createElement("td"); // createElement (slide 104)
  
    // Remplir le contenu de chaque colonne avec les paramètres 
    col1.innerText = num; // innerText (slide 91)
    col2.innerText = nom; // innerText (slide 91)
    col3.innerText = prenom; // innerText (slide 91)
    col4.innerText = points; // innerText (slide 91)
    
    // La dernière colonne contient un élément input de type checkbox
    const checkbox = document.createElement("input"); // createElement (slide 104)
    checkbox.setAttribute("type", "checkbox"); // setAttribute (slide 107)
    col5.append(checkbox); // append() (slide 98)
   
    // Affecter les classes correspondantes à chaque colonne
    col1.setAttribute("class", "col_number"); // setAttribute (slide 107)
    col2.setAttribute("class", "col_text"); // setAttribute (slide 107)
    col3.setAttribute("class", "col_text"); // setAttribute (slide 107)
    col4.setAttribute("class", "col_number"); // setAttribute (slide 107)
    col5.setAttribute("class", "col_chkbox"); // setAttribute (slide 107)


    // Ajouter les colonnes à la ligne
    tr.append(col1, col2, col3, col4, col5); // append() (slide 98)

   // Rajouter la ligne row au tableau table (slide 98)
    table.append(tr); // append() (slide 98)

}

function doNewData(){ // Déclaration de fonction (slide 45)
// Récupérer les éléments des champs de saisie 
    const elt_nom = document.getElementById("form_nom"); // getElementById (slides 61 à 63)
    const elt_prenom = document.getElementById("form_prenom"); // getElementById (slides 61 à 63)
    const elt_points = document.getElementById("form_points"); // getElementById (slides 61 à 63)

// Accéder à l'attribut value de chaque champ  
    const nom = elt_nom.value.trim(); // value : attribut accessible directement (slide 93) ; trim() : hors cours
    const prenom = elt_prenom.value.trim(); // value : attribut accessible directement (slide 93) ; trim() : hors cours
   // parseInt convertit un texte en entier
   const points = parseInt(elt_points.value.trim()); // parseInt : hors cours

   // Insérer les nouvelles données dans le tableau HTML
     if (nom === "" || prenom === "" || Number.isNaN(points)) { // if, opérateurs logiques (slides 41 et 42)
        // Afficher un message avec la méthode alert de window 
        alert("Formulaire incomplet !"); // alert (slide 116)
    } else { // else (slide 42)
        // Insérer les nouvelles données dans le tableau HTML
        doInsert(nom, prenom, points); // Appel de fonction (slide 45)
    }
// Insérer également un objet dans le tableau "persons"
persons.push({ nom: nom, prenom: prenom, points: points }); // push (slide 38)

// Vider les champs pour préparer une autre saisie
        elt_nom.value = ""; // Propriété value (slide 93)
        elt_prenom.value = ""; // Propriété value (slide 93)
        elt_points.value = ""; // Propriété value (slide 93)

}

function deleteRow(){ // Déclaration de fonction (slide 45)
    // Étape 1 : vérifier si le tableau est vide 
    if (lignes === 0) { // if (slide 42)
        alert("Le tableau est vide !"); // alert (slide 116)
        return; // sortir de la fonction -> return (slide 45)
    }
 
    // Étape 2 : récupérer le tableau et la liste des checkbox cochées
    
    const table = document.querySelector("table"); // querySelector (slides 76 et 77)
    const cochees = table.querySelectorAll(".col_chkbox input:checked"); // querySelectorAll (slides 76 et 77)
 
    // Étape 3 : vérifier si aucune checkbox n'est cochée
    if (cochees.length === 0) { // if (slide 42)
        alert("Sélectionnez au moins une ligne !"); // alert (slide 116)
        return; // return (slide 45)
    }
 
    // Étape 4 : demander une confirmation avant suppression 
    if (!confirm("Voulez-vous vraiment supprimer les lignes sélectionnées ?")) { // if (slide 42), confirm : méthode de window (hors cours)
        return; // l'utilisateur a cliqué sur "Annuler" -> return (slide 45)
    }
 
    // Étape 5 : récupérer toutes les lignes du tableau (l'indice 0 est l'entête)
    const rows = table.querySelectorAll("tr"); // querySelectorAll (slides 76 et 77)
 
    // Étape 6 : parcourir les lignes de la dernière à la première 
    
    for (let i = rows.length - 1; i >= 1; i--) { // Boucle for (slide 44)
        const row = rows[i]; // Accès à un élément de la collection par son indice (slide 38)
        const checkbox = row.querySelector(".col_chkbox input"); // querySelector (slides 76 et 77)
 
        // Si la checkbox de cette ligne est cochée
        if (checkbox.checked) { // if (slide 42), propriété checked : attribut accessible directement (slide 93)
            // Récupérer la valeur des points dans la 4e cellule 
            const points = parseInt(row.cells[3].innerText); // parseInt et cells : hors cours ; innerText (slide 91)
 
            // La soustraire de total_points
            total_points -= points; // Opérateur combiné (slide 41)
 
            // Décrémenter la variable lignes
            lignes--; // Opérateur d'incrémentation/décrémentation (slide 41)
 
            // Supprimer la ligne du DOM 
            row.remove(); // remove() (slide 100)
 
            // Supprimer aussi la même entrée dans le tableau persons
            // (la ligne i du tableau HTML correspond à persons[i - 1],)
            persons.splice(i - 1, 1); // splice : hors cours (méthode des tableaux, voir slide 38)
        }
    }
 
    // Étape 7 : afficher un message de succès et mettre à jour le résumé
    alert("Suppression effectuée avec succès !"); // alert (slide 116)
    update_summary(); // Appel de fonction (slide 45)




}