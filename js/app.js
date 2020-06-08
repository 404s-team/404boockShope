mainRender();
// console.log(Book.all);

var container = document.getElementById('divBooks');
container.addEventListener('click', imgClickHandler);
function imgClickHandler(event){
    var clickedBook;
    if (event.target != container){
        if(event.target.id){
            console.log(event.target.id);
        clickedBook = Book.all[(event.target.id) -1]
    }
}
console.log(clickedBook)
localStorage.setItem('clickedBook',JSON.stringify(clickedBook))
}
var bestContainer = document.getElementById('divBestBooks');
bestContainer.addEventListener('click', bestImgClickHandler);
function bestImgClickHandler(){
    var clickedBook;
    var book
    if (event.target != bestContainer){

    if(event.target.id == 'imgBest1'){
         book = new Book('Davinci Code', 'Dan Brown', 'bookCovers/davinci-code-1.jpg', '20', 'Crinme','','imgBest1')
    }else if(event.target.id == 'imgBest2'){
         book = new Book('The Shinning', 'Stephen King', 'bookCovers/theSinning.jpg', '20', 'Crinme','','imgBest2')
    }else if(event.target.id == 'imgBest3'){
         book = new Book('Loard Of the Rings', 'J.R.R Tolkien', 'bookCovers/loardOftheRings.jpg', '20', 'Crinme','','imgBest3')
    }
}
console.log(book)
localStorage.setItem('clickedBook',JSON.stringify(book))
}