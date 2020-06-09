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
    ['The Perfect Wife','Blake Pierce','bookCovers/hororBooks/ThePerfectWife.jpg','1$','hurror','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error, beatae saepe harum eligendi, aperiamvel molestiae laboriosam alias ex quasi ipsa nobis at repellat reiciendis sapiente laborum! Fugit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus blanditiis id error corporis beatae, impedit reprehenderit laudantium nesciunt fuga!','1'],
    ['The Text','Claire Douglas','bookCovers/hororBooks/TheText.jpg','10$','hurror','','2'],
    ['And the Sea',' Michael Lister','bookCovers/hororBooks/AndtheSeaBecameBlood.jpg','12$','hurror','','3'],
    ['A Killer Thriller','Nick Stephenson and Ryan King','bookCovers/hororBooks/AKillerThrillerCollection.jpg','50$','hurror','','5'],
    ['The Adventure','Agatha Christie','bookCovers/hororBooks/TheAdventureoftheChristmas.jpg','46$','hurror','','6'],
    ['The Girl in Room 105','by Chetan Bhagat','bookCovers/hororBooks/TheGirlinRoom105.jpg','31$','hurror','','7'],
    /**History */

    ['A Global History','Francis D. K','bookCovers/historyBooks/AGlobalHistoryofArchitecture.jpg','20$','History','','8'],
    ['World War 1','Henry Freeman','bookCovers/historyBooks/WorldWar1.jpg','18$','History','','9'],
    ['Chanakya Neeti','R.P. Jain','bookCovers/historyBooks/ChanakyaNeeti.jpg','5$','History','','10'],
    ['A Brief History','Yuval Noah Harari','bookCovers/historyBooks/Sapiens.jpg','70$','History','','11'],
    ['The Warren Buffett',' Robert Hagstrom','bookCovers/historyBooks/TheWarrenBuffettWay.jpg','120$','History','','12'],
    /** Fantasi*/
    ['Harry Potter','J.K. Rowling','bookCovers/scinceBooks/HarryPotter.jpg','7$','Fantasi','','13'],
    ['The Tales','J.K. Rowling','bookCovers/scinceBooks/TheTales.jpg','13$','Fantasi','','14'],
    ['Sita','Amish','bookCovers/scinceBooks/Sita.jpg','23$','Fantasi','','15'],
    ['Jean Angel','Atul Mohite','bookCovers/scinceBooks/JeanAngel.jpg','44$','Fantasi','16'],
    ['Raavan','Amish Tripathi','bookCovers/scinceBooks/Raavan.jpg','33$','Fantasi','','17'],
    /**Kids */
    ['Learn to Write','Crystal Radke','bookCovers/kidsBooks/myFirstLearntoWrite.jpg','78$','Kids','','18'],
    ['Teach Your Dragon','Steve Herman','bookCovers/kidsBooks/TeachYourDragon.jpg','70$','Kids','','19'],
    ['The Giving Tree','Shel Silverstein','bookCovers/kidsBooks/theGivinTree.jpg','30$','Kids','','20'],
    ['the Places You ll Go!','Dr. Seuss ','bookCovers/kidsBooks/thePlacesYoullGo.jpg','10$','Kids','','21'],
    ['Summer Bridge Activities','unknown','bookCovers/kidsBooks/SummerBridgeActivities.jpg','11$','Kids','','22']

];
var exchangeableBooks = [
    ['The Perfect Wife','Blake Pierce','bookCovers/hororBooks/ThePerfectWife.jpg','0$','hurror','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error, beatae saepe harum eligendi, aperiamvel molestiae laboriosam alias ex quasi ipsa nobis at repellat reiciendis sapiente laborum! Fugit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus blanditiis id error corporis beatae, impedit reprehenderit laudantium nesciunt fuga!','1'],
    ['The Girl in Room 105','by Chetan Bhagat','bookCovers/hororBooks/TheGirlinRoom105.jpg','0$','hurror','','7'],
    ['A Global History','Francis D. K','bookCovers/historyBooks/AGlobalHistoryofArchitecture.jpg','0$','History','','8'],
    ['Raavan','Amish Tripathi','bookCovers/scinceBooks/Raavan.jpg','0$','Fantasi','','17'],
    ['Learn to Write','Crystal Radke','bookCovers/kidsBooks/myFirstLearntoWrite.jpg','0$','Kids','','18']
]
var arrExBooksList = [] ;
function storExBooks(){
    for (let i = 0; i < exchangeableBooks.length; i++) {
        var book = new Book(
            exchangeableBooks[i][0],
            exchangeableBooks[i][1],
            exchangeableBooks[i][2],
            exchangeableBooks[i][3],
            exchangeableBooks[i][4],
            exchangeableBooks[i][5],
            exchangeableBooks[i][6],
        );
        arrExBooksList.push(book);
    }
    localStorage.setItem('ExBooks',JSON.stringify(arrExBooksList));
}
var img ;
var bookTypeVar = 'all';
var trans = 'download'
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
}
function mainRender(){
    if (Book.all.length){
        
    }else{addBooks();}
    
    // console.log(Book.all);
    var path ='';
    var container = document.getElementById('divBooks');

    while(container.firstChild){
        container.removeChild(container.firstChild);
    }

    console.log(bookTypeVar);
    for (let i = 0; i < Book.all.length; i++) {
        if (Book.all[i].bookType == bookTypeVar || bookTypeVar == 'all'){
        path = String(Book.all[i].bookCover);
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
        bookDetails.appendChild(name);
        bookDetails.appendChild(author);
        bookDetails.appendChild(price);
        name.setAttribute('class','bookName');
        author.setAttribute('class','autherName');
        price.setAttribute('class','price');
        name.textContent = Book.all[i].bookName;
        author.textContent = Book.all[i].bookauthor;
        price.textContent = Book.all[i].bookPrice;
        }
        
    }
}