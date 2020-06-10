'user strict';
var container = document.getElementById('divBooks');
var books = JSON.parse(localStorage.getItem('userBooks'));

function renderUserBooks(){
    for (let i = 0; i < books.length; i++) {
        var divParent = document.createElement('div');
        divParent.setAttribute('class','divParent')
        container.appendChild(divParent);
        var img = document.createElement('img');
        divParent.appendChild(img);
        img.setAttribute('class','userBookImg')
        img.setAttribute('src',books[i].bookCover)
        var divDetails = document.createElement('div');
        divParent.appendChild(divDetails);
        divDetails.setAttribute('class','userBookDetails')
        var bookName = document.createElement('p');
        var bookAuther = document.createElement('p');
        var bookDisc = document.createElement('p');
        divDetails.appendChild(bookName);
        divDetails.appendChild(bookAuther);
        divDetails.appendChild(bookDisc);
        bookName.setAttribute('class','userBookName');
        bookAuther.setAttribute('class','userBookAuther');
        bookDisc.setAttribute('class','userBookDisc');
        bookName.textContent = books[i].bookName;
        bookAuther.textContent = books[i].bookauthor;
        bookDisc.textContent = books[i].bookDescription;

        var shelf = document.createElement('div');
        container.appendChild(shelf)
        shelf.setAttribute('class','bookStander')
    }
}
renderUserBooks();