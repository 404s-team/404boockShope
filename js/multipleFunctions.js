'user strict';
Book.all = [];
function Book(name, author, imgPath, price, type, description,id) {
    this.bookName = name;
    this.bookauthor = author;
    this.bookCover = imgPath;
    this.bookPrice = price;
    this.bookType = type;
    this.bookDescription = description;
    this.bookId = id;
}
var booksArr = [
    /**hurror */
    ['The Perfect Wife','Blake Pierce','bookCovers/hororBooks/ThePerfectWife.jpg','1','hurror','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error, beatae saepe harum eligendi, aperiamvel molestiae laboriosam alias ex quasi ipsa nobis at repellat reiciendis sapiente laborum! Fugit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus blanditiis id error corporis beatae, impedit reprehenderit laudantium nesciunt fuga!','1'],
    ['The Text','Claire Douglas','bookCovers/hororBooks/TheText.jpg','10','hurror','','2'],
    ['And the Sea',' Michael Lister','bookCovers/hororBooks/AndtheSeaBecameBlood.jpg','12','hurror','','3'],
    ['The Rape Trial','Bidisha Ghosal','bookCovers/hororBooks/TheRapeTrial.jpg','17','hurror','','4'],
    ['A Killer Thriller','Nick Stephenson and Ryan King','bookCovers/hororBooks/AKillerThrillerCollection.jpg','50','hurror','','5'],
    ['The Adventure','Agatha Christie','bookCovers/hororBooks/TheAdventureoftheChristmas.jpg','46','hurror','','6'],
    ['The Girl in Room 105','by Chetan Bhagat','bookCovers/hororBooks/TheGirlinRoom105.jpg','31','hurror','','7'],
    /**History */

    ['A Global History','Francis D. K','bookCovers/historyBooks/AGlobalHistoryofArchitecture.jpg','20','History','','8'],
    ['World War 1','Henry Freeman','bookCovers/historyBooks/WorldWar1.jpg','18','History','','9'],
    ['Chanakya Neeti','R.P. Jain','bookCovers/historyBooks/ChanakyaNeeti.jpg','5','History','','10'],
    ['A Brief History','Yuval Noah Harari','bookCovers/historyBooks/Sapiens.jpg','70','History','','11'],
    ['The Warren Buffett Way',' Robert Hagstrom','bookCovers/historyBooks/TheWarrenBuffettWay.jpg','120','History','','12'],
    /** Fantasi*/
    ['Harry Potter','J.K. Rowling','bookCovers/scinceBooks/HarryPotter.jpg','7','Fantasi','','13'],
    ['The Tales','J.K. Rowling','bookCovers/scinceBooks/TheTales.jpg','13','Fantasi','','14'],
    ['Sita','Amish','bookCovers/scinceBooks/Sita.jpg','23','Fantasi','','15'],
    ['Jean Angel','Atul Mohite','bookCovers/scinceBooks/JeanAngel.jpg','44','Fantasi','16'],
    ['Raavan','Amish Tripathi','bookCovers/scinceBooks/Raavan.jpg','33','Fantasi','','17'],
    /**Kids */
    ['Computer Security','Dieter Gollmann','bookCovers/KidsBooks/ComputerSecurity.jpg','78','Kids','','18'],
    ['Lead Generation','Dayna Rothman','bookCovers/KidsBooks/LeadGenerationforDummies.jpg','70','Kids','','19'],
    ['Pattern Writing','Wonder House Books','bookCovers/KidsBooks/PatternWriting.jpg','30','Kids','','20'],
    ['The Blue Umbrella','Ruskin Bond','bookCovers/KidsBooks/TheBlueUmbrella.jpg','10','Kids','','21'],
    ['Grandmas Bag','Sudha Murty','bookCovers/KidsBooks/GrandmasBagofStories.jpg','11','Kids','','22'],
];
var img ;
function addBooks(){
    for (let i = 0; i < booksArr.length; i++) {
        var book = new Book(
            booksArr[i][0],
            booksArr[i][1],
            booksArr[i][2],
            booksArr[i][3],
            booksArr[i][4],
            booksArr[i][5],
            booksArr[i][6],
        );
        Book.all.push(book);
    }
    var path = String(Book.all[0].bookCover);
    console.log('path : ',booksArr[0][2]);
}
function mainRender(){
    addBooks();
    // console.log(Book.all);
    var path ='';
    for (let i = 0; i < Book.all.length; i++) {
        path = String(Book.all[i].bookCover);
        var container = document.getElementById('divBooks');
        var bookCard = document.createElement('div');
        container.appendChild(bookCard);
        bookCard.setAttribute('class','divBook');
        var link = document.createElement('a');
        link.setAttribute('href','details.html')
        bookCard.appendChild(link);
        img = document.createElement('img');
        link.appendChild(img);
        img.setAttribute('class','imgBestBook');
        img.setAttribute('id',Book.all[i].bookId)
        img.setAttribute('src',`${path}`);
        // img.setAttribute('src',String(Book.all[i].bookCover));
        var bookDetails = document.createElement('div');
        bookCard.appendChild(bookDetails);
        bookDetails.setAttribute('class','bookDetails');
        var name = document.createElement('p');
        var author = document.createElement('p');
        var price = document.createElement('p');
        bookCard.appendChild(name);
        bookCard.appendChild(author);
        bookCard.appendChild(price);
        name.setAttribute('class','bookName');
        author.setAttribute('class','autherName');
        price.setAttribute('class','price');
        name.textContent = Book.all[i].bookName;
        author.textContent = Book.all[i].bookauthor;
        price.textContent = Book.all[i].bookPrice;
    }
}