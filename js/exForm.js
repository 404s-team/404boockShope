'user strict';
var btnSubmit = document.getElementById('btnSubmit');
btnSubmit.addEventListener('click', addExBook);
function addExBook(e) {
    e.preventDefault();
    trans = 'exChange';
    localStorage.setItem('trans',JSON.stringify(trans));
    var bookName = document.getElementById('BookName').value;
    var bookAuther = document.getElementById('BookName').value;
    var bookDisc = document.getElementById('BookName').value;
    var bookImg = URL.createObjectURL(document.getElementById('imageHolder').files[0]);
    var newExBook = new Book(bookName, bookAuther, bookImg, '0', 'exchange', bookDisc, 'NewBook');
    var newExBookArray=[bookName,bookAuther, bookImg, '0', 'exchange', bookDisc, 'NewBook']

    // var url = "details.html";
    // window.location(url);
    if (bookName && bookAuther && bookDisc && bookImg){
        
        location.replace("details.html")
        storExBooks()
        arrExBooksList.push(newExBook);
        exchangeableBooks.push(newExBookArray);
        localStorage.setItem('clickedBook',JSON.stringify(newExBook));
        localStorage.setItem('ExBooks', JSON.stringify(exchangeableBooks));
    }else{
        alert('Make sure you have filled all fields')
    }

}