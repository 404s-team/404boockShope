'user strict';
var container = document.getElementById('divBooks');
var books = JSON.parse(localStorage.getItem(''));

function renderUserBooks(){
    for (let i = 0; i < books.length; i++) {
        var divParent = document.createElement('div');
        divParent.setAttribute('','')
        container.appendChild(divParent);
        var img = document.createElement('img');
        divParent.appendChild(img);
        img.setAttribute('')
        var divDetails = document.createElement('div');
        container.appendChild(divDetails);
        divParent.setAttribute('','')
    }
}