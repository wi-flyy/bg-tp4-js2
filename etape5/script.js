"use strict"
let total_points = 0 ;

let lignes = 0 ;

const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }

];

//apple de Init()
init() ;

function init(){
    for (const person of persons){

        doInsert(person.nom, person.prenom, person.points) ;
    }
}

function doInsert(nom, prenom, points){
    lignes++ ;
    total_points += points;
    const num = lignes ;
     
    doInsertRowTable(num, nom, prenom, points);

    update_summary();
}

function update_summary(){
    // Récupérer l'élément id = p1
    const element_lignes = document.getElementById("p1");
 
    // Récupérer l'élément id = p3
    const element_points = document.getElementById("p3");
 
    // Avec innerText, afficher le nombre de lignes 
    element_lignes.innerText = lignes + " ligne(s)";
 
    // Avec innerText, afficher le total des points 
    element_points.innerText = "Total point(s)= " + total_points;
 
}

function consoleTableau(){
    console.log(persons);
}

function doInsertRowTable(num , nom , prenom , points){
    const table = document.getElementById("table_persons");

    //cree la ligne <tr>
    const tr = document.createElement("tr");

    //cree la cellule <td>
    const td_num = document.createElement("td");
    td_num.setAttribute("class" ,"col_text");

     // Créer 5 éléments de type td (colonnes de tableau)
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");
  
    // Remplir le contenu de chaque colonne avec les paramètres 
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    
    // La dernière colonne contient un élément input de type checkbox
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);
   
    // Affecter les classes correspondantes à chaque colonne
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");


    // Ajouter les colonnes à la ligne
    tr.append(col1, col2, col3, col4, col5);

   // Rajouter la ligne row au tableau table (slide ??)
    table.append(tr);

}

function doNewData(){
// Récupérer les éléments des champs de saisie 
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

// Accéder à l'attribut value de chaque champ  
    const nom = elt_nom.value.trim();
    const prenom = elt_prenom.value.trim();
   // parseInt convertit un texte en entier
   const points = parseInt(elt_points.value.trim());

   // Insérer les nouvelles données dans le tableau HTML
     if (nom === "" || prenom === "" || Number.isNaN(points)) {
        // Afficher un message avec la méthode alert de window 
        alert("Formulaire incomplet !");
    } else {
        // Insérer les nouvelles données dans le tableau HTML
        doInsert(nom, prenom, points);
    }
// Insérer également un objet dans le tableau "persons"
persons.push({ nom: nom, prenom: prenom, points: points });

// Vider les champs pour préparer une autre saisie
        elt_nom.value = "";
        elt_prenom.value = "";
        elt_points.value = "";



}