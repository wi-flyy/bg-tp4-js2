"use strict";

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