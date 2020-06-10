"use strict";
//Add event to add on detailes page ---> local storege
var tableEl;
var btnTd;
function loadFav() {
    console.log(JSON.parse(localStorage.getItem('favorite')));
    
    var allFavoraite = JSON.parse(localStorage.getItem('favorite'));
    tableEl = document.getElementById('favorite');
    for (var index = 0; index < allFavoraite.length; index++) {



        var rowEl = document.createElement('tr');
        tableEl.appendChild(rowEl);
        var cellEl1 = document.createElement('td');
        rowEl.appendChild(cellEl1);
        var imgEl = document.createElement('img');
        cellEl1.appendChild(imgEl);
        imgEl.setAttribute('src', allFavoraite[index].imgPath);
        imgEl.setAttribute('class','fav')

        var cellEl2 = document.createElement('td');
        rowEl.appendChild(cellEl2);
        cellEl2.textContent = allFavoraite[index].name;

        var cellEl3 = document.createElement('td');
        rowEl.appendChild(cellEl3);
        btnTd = document.createElement('input')
        cellEl3.appendChild(btnTd);
        btnTd.setAttribute('class', 'btnTd');
        btnTd.setAttribute('type', 'button');
        btnTd.setAttribute('value', 'Remove');
    };
};

//load Chart frome local storeg 
//
loadFav();

tableEl.addEventListener('click', removeItemFromCart);

function removeItemFromCart(event) {

    if (String(event.target) == String(btnTd)) {

        var childParent = event.target.parentNode.parentNode.rowIndex;
        tableEl.deleteRow(childParent);
        var arr = JSON.parse(localStorage.getItem('favorite'));
        arr.splice(childParent-1, 1);
        localStorage.setItem('favorite', JSON.stringify(arr));
    
    };

};

   