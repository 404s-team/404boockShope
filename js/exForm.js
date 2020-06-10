'user strict';
var imgUploader = document.getElementById('imageHolder');
var output = document.getElementById('choosedImg');
imgUploader.addEventListener('change',uploadImg);
function uploadImg(even){
    var reader = new FileReader();
    reader.onload = function(){
      output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
}
// uncomment to get the values
var btnSubmit = document.querySelector('.sub');
btnSubmit.addEventListener('click', addExBook);

function addExBook(e) {
    e.preventDefault();

    trans = 'exChange';
    localStorage.setItem('trans',JSON.stringify(trans));
    var bookName = document.getElementById('BookName').value;
    var bookAuther = document.getElementById('auther').value;
    var bookDisc = document.getElementById('BookDisc').value;
    var bookImg = URL.createObjectURL(document.getElementById('imageHolder').files[0]);
    var StoredExBooks = JSON.parse(localStorage.getItem('ExBooks'));
    var newExBook = new Book(bookName, bookAuther, output.src, 'Free', 'exchange', bookDisc, String(StoredExBooks.length +1));
    var newExBookArray=[bookName,bookAuther, bookImg, 'Free', 'exchange', bookDisc, String(StoredExBooks.length +1)]
    console.log('test'+document.getElementById('imageHolder').files[0].path);

    // var url = "details.html";
    // window.location(url);
    if (bookName && bookAuther && bookDisc && bookImg){
        setTimeout(location.replace("details.html"),0)
        
        // storExBooks()
        userBooks.push(newExBook);
        localStorage.setItem('userBooks',JSON.stringify(userBooks));
        arrExBooksList.push(newExBook);
        exchangeableBooks.push(newExBookArray);
        localStorage.setItem('clickedBook',JSON.stringify(newExBook));
        localStorage.setItem('ExBooks', JSON.stringify(exchangeableBooks));
    }else{
        alert('Make sure you have filled all fields')
    }

}



