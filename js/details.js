function renderDetails(){
    var bookDetails = JSON.parse(localStorage.getItem('clickedBook'));
var bookImg = document.getElementById('choosedImg');
console.log(bookDetails.bookCover);

bookImg.setAttribute('src',bookDetails.bookCover)

}
renderDetails();