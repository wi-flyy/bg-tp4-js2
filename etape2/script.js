"use strict"; // Mode strict (slide 51)

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
