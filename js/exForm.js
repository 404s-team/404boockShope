'user strict';
var btnSubmit = document.querySelector('.btnSubmit');
btnSubmit.addEventListener('click', addExBook);

function addExBook(e) {
    e.preventDefault();
    trans = 'exChange';
    localStorage.setItem('trans',JSON.stringify(trans));
    var bookName = document.getElementById('BookName').value;
    var bookAuther = document.getElementById('BookName').value;
    var bookDisc = document.getElementById('BookName').value;
    var bookImg = URL.createObjectURL(document.getElementById('imageHolder').files[0]);

    var newExBook = new Book(bookName, bookAuther, bookImg, '0', 'exchange', bookDisc, 'NewBook');
    var newExBookArray=[bookName,bookAuther, bookImg, '0', 'exchange', bookDisc, 'NewBook']
    console.log('test'+document.getElementById('imageHolder').files[0].path);

    // var url = "details.html";
    // window.location(url);
    if (bookName && bookAuther && bookDisc && bookImg){
        
        location.replace("details.html")
        storExBooks()
        arrExBooksList.push(newExBook);
        exchangeableBooks.push(newExBookArray);
        localStorage.setItem('clickedBook',JSON.stringify(newExBook));
        localStorage.setItem('ExBooks', JSON.stringify(exchangeableBooks));
    }else{
        alert('Make sure you have filled all fields')
    }

}




// submit button js animation
let button = document.querySelector('.btnSubmit');
let buttonText = document.querySelector('.tick');

const tickMark = "<svg width=\"25\" height=\"25\" viewBox=\"0 0 58 45\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"#fff\" fill-rule=\"nonzero\" d=\"M19.11 44.64L.27 25.81l5.66-5.66 13.18 13.18L52.07.38l5.65 5.65\"/></svg>";

buttonText.innerHTML = "Submit";

button.addEventListener('click', function() {

  if (buttonText.innerHTML !== "Submit") {
    buttonText.innerHTML = "Submit";
  } else if (buttonText.innerHTML === "Submit") {
    buttonText.innerHTML = tickMark;
  }
  this.classList.toggle('btnSubmit__circle');
});

