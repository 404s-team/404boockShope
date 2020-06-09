'user strict';
console.log('trans :',trans);

var btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click',addExBook);
function addExBook(e){
    e.preventDefault();
    // trans='exChange';
    changeTrans('exChange');
    console.log('trans after :',trans);
    var bookName = document.getElementById('BookName').value;
    var bookAuther = document.getElementById('BookName').value;
    var bookDisc = document.getElementById('BookName').value;
    var bookImg = URL.createObjectURL(document.getElementById('imageHolder').files[0]);
    var newExBook = new Book(bookName, bookAuther, bookImg, '0', 'New', bookDisc,'NewBook');
    // var url = "details.html";
    // window.location(url);
    // location.replace("details.html")

    storExBooks()
    arrExBooksList.push(newExBook);
    localStorage.setItem('ExBooks',JSON.stringify(arrExBooksList));
}