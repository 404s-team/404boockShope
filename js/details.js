var bookDetails;
console.log('ALL: '+Book.all);

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
var recommendedContainer=document.getElementById('recommended');
function renderRecommended() {
    
    for(var i=0; i<booksArr.length;i++){
        var array=booksArr[i];
        console.log(bookDetails.bookType);
        if(array[4] === bookDetails.bookType){
            console.log(i);
            
            var link = document.createElement('a');
            link.setAttribute('href','details.html')
            recommendedContainer.appendChild(link);
            var recommendedImg = document.createElement('img');
            link.appendChild(recommendedImg);
            // recommendedImg.setAttribute('class','imgBestBook');
            recommendedImg.setAttribute('id',array[6])
            recommendedImg.setAttribute('src',`${array[2]}`);
        }
    }
};
renderRecommended();


recommendedContainer.addEventListener('click', imgClickHandler);
function imgClickHandler(event){
    var clickedBook;
    if (event.target != recommendedContainer){
        if(event.target.id){
            console.log('id '+event.target.id);
        clickedBook = Book.all[event.target.id]
    }
}
console.log( Book.all[event.target.id])
// localStorage.setItem('clickedBook',JSON.stringify(clickedBook))
}