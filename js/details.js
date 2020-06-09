'user strict';
var bookDetails;
addBooks();
console.log('trans :',trans);
console.log('ALL: ' + Book.all);

// Render the Details page

function renderDetails() {
    if (trans == 'download'){
        bookDetails = JSON.parse(localStorage.getItem('clickedBook'));
    }else{
        //get the exchangable book data from exchangeableBooks array
        var exBook = new Book(exchangeableBooks[0][0],exchangeableBooks[0][1],exchangeableBooks[0][2],exchangeableBooks[0][3],exchangeableBooks[0][4],exchangeableBooks[0][5],exchangeableBooks[0][6]);
        bookDetails = exBook;
        console.log(exBook)
    }
    var bookImg = document.getElementById('choosedImg');
    console.log(bookDetails.bookCover);
    bookImg.setAttribute('src', bookDetails.bookCover);
    var bookTitle = document.getElementById('bookName');
    var bookWriter = document.getElementById('authorName');
    var bookPrice = document.getElementById('price');
    var bookDisc = document.getElementById('bookDisc');
    bookTitle.textContent = bookDetails.bookName;
    bookWriter.textContent = bookDetails.bookauthor;
    bookPrice.textContent = bookDetails.bookPrice;
    bookDisc.textContent = bookDetails.bookDescription;
}
renderDetails();


//-----------------------Creat recommended books-----------------------------------------------

var recommendedContainer = document.getElementById('recommended');
function renderRecommended() {
    var myArr = [];
    if (trans == 'download'){
        myArr = booksArr;
    }else{
        //get the exchangable book data from exchangeableBooks array
        myArr = exchangeableBooks;
    }

    //Show in Recomendation part the same type of choosen book, but if there is not any, show all books

    var numBooks=0;
    for (var i = 0; i < myArr.length; i++) {
        var array = myArr[i];
        console.log(bookDetails.bookType);
        if (array[4] === bookDetails.bookType) {
            console.log(i);
            numBooks++;
            var link = document.createElement('a');
            link.setAttribute('href', 'details.html')
            recommendedContainer.appendChild(link);
            var recommendedImg = document.createElement('img');
            link.appendChild(recommendedImg);
            recommendedImg.setAttribute('id', array[6])
            recommendedImg.setAttribute('src', `${array[2]}`);
        };
    };
    if (numBooks < 1) {
        for (var i = 0; i < myArr.length; i++) {
            var array = myArr[i];
            var link = document.createElement('a');
            link.setAttribute('href', 'details.html')
            recommendedContainer.appendChild(link);
            var recommendedImg = document.createElement('img');
            link.appendChild(recommendedImg);
            recommendedImg.setAttribute('id', array[6])
            recommendedImg.setAttribute('src', `${array[2]}`);
        }
    }
};
renderRecommended();

// Event for Recomendation Part

recommendedContainer.addEventListener('click', imgClickHandler);
function imgClickHandler(event) {

    var clickedBook;
    if (event.target != recommendedContainer) {
        if (event.target.id) {

            clickedBook = Book.all[(event.target.id) - 1]
        }
    }

    localStorage.setItem('clickedBook', JSON.stringify(clickedBook))
}