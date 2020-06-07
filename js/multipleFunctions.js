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
    ['The Perfect Wife','Blake Pierce','boockCovers/hororBooks/ThePerfectWife.jpg','1','hurror',''],
    ['The Text: A short story','Claire Douglas','boockCovers/hororBooks/TheText.jpg','10','hurror',''],
    ['And the Sea Became Blood (John Jordan Mysteries Book 20)',' Michael Lister','boockCovers/hororBooks/AndtheSeaBecameBlood.jpg','12','hurror',''],
    ['The Rape Trial','Bidisha Ghosal','boockCovers/hororBooks/TheRapeTrial.jpg','17','hurror',''],
    ['A Killer Thriller Collection - Eight The Hard Way (Mystery Thriller Suspense)','Nick Stephenson and Ryan King','boockCovers/hororBooks/AKillerThrillerCollection.jpg','50','hurror',''],
    ['The Adventure of the Christmas Pudding: A Hercule Poirot Short Story ','Agatha Christie','boockCovers/hororBooks/TheAdventureoftheChristmas.jpg','46','hurror',''],
    ['The Girl in Room 105','by Chetan Bhagat','boockCovers/hororBooks/TheGirlinRoom105.jpg','31','hurror',''],
    /**History */

    ['A Global History of Architecture','Francis D. K','boockCovers/historyBooks/AGlobalHistoryofArchitecture.jpg','20','History',''],
    ['World War 1: A History From Beginning to End','Henry Freeman','boockCovers/historyBooks/WorldWar1.jpg','18','History',''],
    ['Chanakya Neeti','R.P. Jain','boockCovers/historyBooks/ChanakyaNeeti.jpg','5','History',''],
    ['A Brief History of Humankind','Yuval Noah Harari','boockCovers/historyBooks/Sapiens.jpg','70','History',''],
    ['The Warren Buffett Way',' Robert Hagstrom','boockCovers/historyBooks/TheWarrenBuffettWay.jpg','120','History',''],
    /** Fantasi*/
    ['Harry Potter and the Philosopher','J.K. Rowling','boockCovers/scinseBooks/HarryPotter.jpg','7','Fantasi',''],
    ['The Tales of Beedle the Bard','J.K. Rowling','boockCovers/scinseBooks/TheTales.jpg','13','Fantasi',''],
    ['Sita','Amish','boockCovers/scinseBooks/Sita.jpg','23','Fantasi',''],
    ['Jean Angel','Atul Mohite','boockCovers/scinseBooks/JeanAngel.jpg','44','Fantasi'],'',
    ['Raavan','Amish Tripathi','boockCovers/scinseBooks/Raavan.jpg','33','Fantasi',''],
    /**Kids */
    ['Computer Security','Dieter Gollmann','boockCovers/KidsBooks/ComputerSecurity.jpg','78','Kids',''],
    ['Lead Generation for Dummies','Dayna Rothman','boockCovers/KidsBooks/LeadGenerationforDummies.jpg','70','Kids',''],
    ['Pattern Writing','Wonder House Books','boockCovers/KidsBooks/PatternWriting.jpg','30','Kids',''],
    ['The Blue Umbrella','Ruskin Bond','boockCovers/KidsBooks/TheBlueUmbrella.jpg','10','Kids',''],
    ['Grandmas Bag of Stories','Sudha Murty','boockCovers/KidsBooks/GrandmasBagofStories.jpg','11','Kids',''],
];
function addBooks(){
    for (let i = 0; i < booksArr.length; i++) {
        var book = new Book(
            booksArr[0],
            booksArr[1],
            booksArr[2],
            booksArr[3],
            booksArr[4],
            booksArr[5],
        );
        Book.all.push(book);
    }
}
function mainRender(){
    addBooks();
    for (let i = 0; i < Book,all.length; i++) {
        var container = document.getElementById('divBooks');
        var bookCard = document.createElement('div');
        container.appendChild(bookCard);
        bookCard.setAttribute('class','divBook');
        var img = document.createElement('img');
        bookCard.appendChild(img);
        img.setAttribute('class','imgBestBook');
        img.setAttribute('src',Book,all[i].imgPath);
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
mainRender()

