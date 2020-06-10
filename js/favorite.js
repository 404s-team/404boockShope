"use strict";
//Add event to add on detailes page ---> local storege
var tableEl;
var btnTd;
var clicksData = [];
function loadFav() {
    var totalBooks = JSON.parse(localStorage.getItem('AllBooks'));
    for (var i = 0; i < totalBooks.length; i++) {
        clicksData.push(totalBooks[i].click);
    }
    
    console.log(clicksData);

    // console.log(JSON.parse(localStorage.getItem('favorite')));
    // console.log('books :'+JSON.parse(localStorage.getItem('AllBooks')));
    Favoraite.all = JSON.parse(localStorage.getItem('favorite'));
    // console.log('fav :'+Favoraite.all);
    tableEl = document.getElementById('favorite');
    for (var index = 0; index < Favoraite.all.length; index++) {



        var rowEl = document.createElement('tr');
        tableEl.appendChild(rowEl);
        var cellEl1 = document.createElement('td');
        rowEl.appendChild(cellEl1);
        var imgEl = document.createElement('img');
        cellEl1.appendChild(imgEl);
        imgEl.setAttribute('src', Favoraite.all[index].imgPath);
        imgEl.setAttribute('class', 'fav')

        var cellEl2 = document.createElement('td');
        rowEl.appendChild(cellEl2);
        // cellEl2.textContent = Favoraite.all[index].name;
        var name = document.createElement('p');
        cellEl2.appendChild(name);
        name.setAttribute('class','para')
        name.textContent = Favoraite.all[index].name;

        var cellEl3 = document.createElement('td');
        rowEl.appendChild(cellEl3);
        btnTd = document.createElement('img')
        cellEl3.appendChild(btnTd);
        btnTd.setAttribute('class', 'btnTd');
        btnTd.setAttribute('type', 'button');
        btnTd.setAttribute('src', 'img/delete.png');
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
        arr.splice(childParent - 1, 1);
        localStorage.setItem('favorite', JSON.stringify(arr));

    };

};