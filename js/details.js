var bookDetails;

function renderDetails(){
bookDetails = JSON.parse(localStorage.getItem('clickedBook'));
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

//Creat recommended books
function renderRecommended() {
    
    for(var i=0; i<booksArr.length;i++){
        var array=booksArr[i];
        console.log(bookDetails.bookType);
        if(array[4] === bookDetails.bookType){
            console.log(i);
            
            var recommendedContainer=document.getElementById('recommended');
            var link = document.createElement('a');
            link.setAttribute('href','details.html')
            recommendedContainer.appendChild(link);
            var recommendedImg = document.createElement('img');
            link.appendChild(recommendedImg);
            // recommendedImg.setAttribute('class','imgBestBook');
            // recommendedImg.setAttribute('id',Book.all[i].bookId)
            recommendedImg.setAttribute('src',`${array[2]}`);
        }
    }
};
renderRecommended();
