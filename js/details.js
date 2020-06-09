'user strict';
var bookDetails;
addBooks();
console.log('trans :',trans);
console.log('ALL: ' + Book.all);

// Render the Details page
trans = JSON.parse(localStorage.getItem('trans'));
function renderDetails() {
    console.log(trans + ' trans')
    // if (trans === 'download'){
    //     console.log('details'+bookDetails)
    //     bookDetails = JSON.parse(localStorage.getItem('clickedBook'));
    // }else if(trans === 'exChange'){
    //     //get the exchangable book data from exchangeableBooks array
    //     var exBook = new Book(exchangeableBooks[0][0],exchangeableBooks[0][1],exchangeableBooks[0][2],exchangeableBooks[0][3],exchangeableBooks[0][4],exchangeableBooks[0][5],exchangeableBooks[0][6]);
    //     bookDetails = exBook;
    //     console.log('ebooks'+exBook)
    // }
    bookDetails = JSON.parse(localStorage.getItem('clickedBook'));

    var bookImg = document.getElementById('choosedImg');
    console.log('book URL: '+bookDetails.bookCover);
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
    if (trans == 'download') {
        myArr = booksArr;
    } else if (trans === 'exChange') {
        //get the exchangable book data from exchangeableBooks array
        myArr = JSON.parse(localStorage.getItem('ExBooks'));
    }
console.log('arr '+myArr);

    //Show in Recomendation part the same type of choosen book, but if there is not any, show all books

    var numBooks = 0;
    console.log('array :'+myArr);
    for (var i = 0; i < myArr.length-1; i++) {
        var array = myArr[i];
        console.log('book :'+bookDetails.bookType);
        if (array[4] === bookDetails.bookType) {
            console.log('specific');
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
        console.log('random');
        
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