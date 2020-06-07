'user strict';
Book.all = [];
function Book(name, author, imgPath, price, type, description) {
    this.bookName = name;
    this.bookauthor = author;
    this.bookCover = imgPath;
    this.bookPrice = price;
    this.bookType = type;
    this.bookDescription = description;
}
var booksArr = [
    /**hurror */
    ['The Perfect Wife','Blake Pierce','bookCovers/hororBooks/ThePerfectWife.jpg','1','hurror',''],
    ['The Text','Claire Douglas','bookCovers/hororBooks/TheText.jpg','10','hurror',''],
    ['And the Sea',' Michael Lister','bookCovers/hororBooks/AndtheSeaBecameBlood.jpg','12','hurror',''],
    ['The Rape Trial','Bidisha Ghosal','bookCovers/hororBooks/TheRapeTrial.jpg','17','hurror',''],
    ['A Killer Thriller','Nick Stephenson and Ryan King','bookCovers/hororBooks/AKillerThrillerCollection.jpg','50','hurror',''],
    ['The Adventure','Agatha Christie','bookCovers/hororBooks/TheAdventureoftheChristmas.jpg','46','hurror',''],
    ['The Girl in Room 105','by Chetan Bhagat','bookCovers/hororBooks/TheGirlinRoom105.jpg','31','hurror',''],
    /**History */

    ['A Global History','Francis D. K','bookCovers/historyBooks/AGlobalHistoryofArchitecture.jpg','20','History',''],
    ['World War 1','Henry Freeman','bookCovers/historyBooks/WorldWar1.jpg','18','History',''],
    ['Chanakya Neeti','R.P. Jain','bookCovers/historyBooks/ChanakyaNeeti.jpg','5','History',''],
    ['A Brief History','Yuval Noah Harari','bookCovers/historyBooks/Sapiens.jpg','70','History',''],
    ['The Warren Buffett Way',' Robert Hagstrom','bookCovers/historyBooks/TheWarrenBuffettWay.jpg','120','History',''],
    /** Fantasi*/
    // ['Harry Potter and the Philosopher','J.K. Rowling','bookCovers/scinseBooks/HarryPotter.jpg','7','Fantasi',''],
    // ['The Tales of Beedle the Bard','J.K. Rowling','bookCovers/scinseBooks/TheTales.jpg','13','Fantasi',''],
    // ['Sita','Amish','bookCovers/scinseBooks/Sita.jpg','23','Fantasi',''],
    // ['Jean Angel','Atul Mohite','bookCovers/scinseBooks/JeanAngel.jpg','44','Fantasi'],'',
    // ['Raavan','Amish Tripathi','bookCovers/scinseBooks/Raavan.jpg','33','Fantasi',''],
    /**Kids */
    ['Computer Security','Dieter Gollmann','bookCovers/KidsBooks/ComputerSecurity.jpg','78','Kids',''],
    ['Lead Generation','Dayna Rothman','bookCovers/KidsBooks/LeadGenerationforDummies.jpg','70','Kids',''],
    ['Pattern Writing','Wonder House Books','bookCovers/KidsBooks/PatternWriting.jpg','30','Kids',''],
    ['The Blue Umbrella','Ruskin Bond','bookCovers/KidsBooks/TheBlueUmbrella.jpg','10','Kids',''],
    ['Grandmas Bag','Sudha Murty','bookCovers/KidsBooks/GrandmasBagofStories.jpg','11','Kids',''],
];
function addBooks(){
    for (let i = 0; i < booksArr.length; i++) {
        var book = new Book(
            booksArr[i][0],
            booksArr[i][1],
            booksArr[i][2],
            booksArr[i][3],
            booksArr[i][4],
            booksArr[i][5],
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
        var img = document.createElement('img');
        bookCard.appendChild(img);
        img.setAttribute('class','imgBestBook');
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
mainRender();