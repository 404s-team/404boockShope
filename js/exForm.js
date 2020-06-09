'user strict';
var btnSubmit = document.querySelector('.btnSubmit');
btnSubmit.addEventListener('click', addExBook);

function addExBook(e) {
    e.preventDefault();
    var bookName = document.getElementById('BookName').value;
    var bookAuther = document.getElementById('BookName').value;
    var bookDisc = document.getElementById('BookName').value;
    var bookImg = URL.createObjectURL(document.getElementById('imageHolder').files[0]);
    var newExBook = new Book(bookName, bookAuther, bookImg, '0', 'New', bookDisc, 'NewBook');

    storExBooks()
    arrExBooksList.push(newExBook);
    localStorage.setItem('ExBooks', JSON.stringify(arrExBooksList));
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
