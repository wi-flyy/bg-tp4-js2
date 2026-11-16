"use strict"; // Mode strict (slide 51)

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