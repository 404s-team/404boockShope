function renderDetails(){
    var bookDetails = JSON.parse(localStorage.getItem('clickedBook'));
var bookImg = document.getElementById('choosedImg');
console.log(bookDetails.bookCover);
bookImg.setAttribute('src',bookDetails.bookCover);
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