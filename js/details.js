var bookDetails;
addBooks();
console.log('ALL: ' + Book.all);

// Render the Details page

function renderDetails() {
    bookDetails = JSON.parse(localStorage.getItem('clickedBook'));
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

    //Show in Recomendation part the same type of choosen book, but if there is not any, show all books

    var numBooks=0;
    for (var i = 0; i < booksArr.length; i++) {
        var array = booksArr[i];
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
        for (var i = 0; i < booksArr.length; i++) {
            var array = booksArr[i];
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