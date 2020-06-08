mainRender();
// console.log(Book.all);

var container = document.getElementById('divBooks');
container.addEventListener('click', imgClickHandler);
function imgClickHandler(event){
    var clickedBook;
    if (event.target != container){
        if(event.target.id){
            console.log(event.target.id);
        //     for (let index = 0; index < booksArr.length; index++) {
        //         if(booksArr[index] == event.target.id){
        //             break;
        //             clickedBook = booksArr[index]
        //     }
        // }
        clickedBook = Book.all[(event.target.id) -1]
    }
}
console.log(clickedBook)
localStorage.setItem('clickedBook',JSON.stringify(clickedBook))
}