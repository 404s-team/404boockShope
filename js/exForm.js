'user strict';
var btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click',addExBook);
function addExBook(e){
    e.preventDefault();
    var bookName = document.getElementById('BookName').value;
    var bookAuther = document.getElementById('BookName').value;
    var bookDisc = document.getElementById('BookName').value;
    var bookImg = URL.createObjectURL(document.getElementById('imageHolder').files[0]);
    var newExBook = new Book(bookName, bookAuther, bookImg, '0', 'New', bookDisc,'NewBook');

    storExBooks()
    arrExBooksList.push(newExBook);
    localStorage.setItem('ExBooks',JSON.stringify(arrExBooksList));
}