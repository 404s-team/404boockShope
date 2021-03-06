'user strict';
var bookDetails;
addBooks();
var btn = document.getElementById('btnLink');
var text = document.getElementById('pRecommended')
btn.addEventListener('click',sendMeToLink);

// console.log('trans :',trans);
// console.log('ALL: ' + Book.all);

// Render the Details page
trans = JSON.parse(localStorage.getItem('trans'));
if (trans != 'download'){
    btn.innerHTML = 'Exchange'; 
    text.innerHTML = 'Available Exchange Books';
}
function sendMeToLink(){
    if (btn.innerHTML == 'Download'){
        location.replace("https://drive.google.com/file/d/1rFuKc0KpFf581lyftS-2aU0qG-E2Bqwo/view?usp=sharing");
    }else{
        alert('Thank you for visiting our website we will contact you soon.');
    }
}
function renderDetails() {
    bookDetails = JSON.parse(localStorage.getItem('clickedBook'));
    console.log('bookDetails : ',bookDetails)
    var bookImg = document.getElementById('choosedImg');
    // console.log('book URL: '+bookDetails.bookCover);
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
        console.log('arr '+myArr.length);
    }

    //Show in Recomendation part the same type of choosen book, but if there is not any, show all books

    var numBooks = 0;
    // console.log('array :'+myArr);
    for (var i = 0; i < myArr.length-1; i++) {
        var array = myArr[i];
        // console.log('book :'+bookDetails.bookType);
        if (array[4] === bookDetails.bookType) {
            // console.log('specific');
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
        // console.log('random');
        
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


var exchagBooksArr = [];
function arrtoBooks(arr){
for (let i = 0; i < arr.length; i++) {
    var book = new Book(arr[i][0],arr[i][1],arr[i][2],arr[i][3],arr[i][4],arr[i][5],arr[i][6],);
    exchagBooksArr.push(book);
}
    }

// Event for Recomendation Part

recommendedContainer.addEventListener('click', imgClickHandler);
function imgClickHandler(event) {
    // event.preventDefault()
    var clickedBook;
    var totalClickedBooks=JSON.parse(localStorage.getItem('totalClickedBooks'))||[];
    console.log('totalClickedBooks: '+totalClickedBooks)
    
    if (event.target != recommendedContainer) {
        if (event.target.id && trans == 'download') {
            var allBook=JSON.parse(localStorage.getItem('AllBooks'));
            clickedBook = allBook[(event.target.id) - 1];
            clickedBook.click++;
            localStorage.setItem('AllBooks', JSON.stringify(allBook));
         
        }else{
            arrtoBooks(JSON.parse(localStorage.getItem('ExBooks')))
            clickedBook= exchagBooksArr[(event.target.id) - 1];
            
        }
    }
    localStorage.setItem('clickedBook', JSON.stringify(clickedBook))
}

// --------------------------------

//Add Event to creat favorite page


var favoriteBtn=document.getElementById('favorite');
favoriteBtn.addEventListener('click',addToFavorite);
function addToFavorite(event) {
    // console.log('here1'+Favoraite.all)
    var favoriteStored = localStorage.getItem('favorite');
    if (favoriteStored) {
        Favoraite.all= JSON.parse(favoriteStored);
    }
    // console.log('here2'+Favoraite.all)
    var newBook=JSON.parse(localStorage.getItem('clickedBook'));
    var favorite=new Favoraite(newBook.bookName,newBook.bookCover)
    favorite.saveToLocalStorage();
    favoriteBtn.style.backgroundColor='red'
};