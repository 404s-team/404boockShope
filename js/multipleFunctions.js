'user strict';
Book.all = [];
var trans = 'download1';
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
    ['The Perfect Wife','Blake Pierce','bookCovers/hororBooks/ThePerfectWife.jpg','1$','hurror','Criminal profiler in training (and newlywed) Jessie Hunt, 29, discovers that dark secrets lurk in her new suburban town; when a body turns up dead, she finds herself caught in the crosshairs of her newfound friends, her husband’s secrets, her serial killer caseload—and the secrets of her own dark past.','1'],
    ['The Text','Claire Douglas','bookCovers/hororBooks/TheText.jpg','10$','hurror','Emily Latimer is furious. Her boss Andrew is being so unreasonable, as always. She fires off a text to her boyfriend, only in her haste she sends it to her whole office group.In it she says Andrews being difficult about letting her have time off work. That she is angry. That she hopes he dies. The next day her face burns','2'],
    ['And the Sea','Michael Lister','bookCovers/hororBooks/AndtheSeaBecameBlood.jpg','12$','hurror','The murder of retired priest Andrew Irwin begins like any other homicide investigation for sheriff’s Investigator John Jordan. But it is soon interrupted by an existential superstorm of apocalyptic proportions that threatens to destroy both John and his family.','3'],
    ['A Killer Thriller','Nick Stephenson and Ryan King','bookCovers/hororBooks/AKillerThrillerCollection.jpg','50$','hurror','Paydown - by Nick Stephenson. When a high-flying Wall Street investment banker is found brutally killed, what started out as a simple fraud case turns into expert criminologist Leopold Blakes first ever murder investigation. As the glamor of Wall Street is stripped away by a series of catastrophic discoveries, Leopold will have to decide how much he is prepared to risk in order to uncover the truth - and whether its a price hes willing to pay.','5'],
    ['The Adventure','Agatha Christie','bookCovers/hororBooks/TheAdventureoftheChristmas.jpg','46$','hurror','In Agatha Christie’s short story, “The Adventure of the Christmas Pudding,” Poirot is asked to attend a Christmas celebration in order to apprehend a jewel-thief who has taken advantage of an unwary eastern prince.','5'],
    ['The Girl in Room 105','by Chetan Bhagat','bookCovers/hororBooks/TheGirlinRoom105.jpg','31$','hurror','Hi, I’m Keshav, and my life is screwed. I hate my job and my girlfriend left me. Ah, the beautiful Zara. Zara is from Kashmir. She is a Muslim. And did I tell you my family is a bit, well, traditional? Anyway, leave that.','6'],
    /**History */

    ['A Global History','Francis D. K','bookCovers/historyBooks/AGlobalHistoryofArchitecture.jpg','20$','History','A Global History of Architecture provides a comprehensive tour through the ages, spinning the globe to present the landmark architectural movements that characterized each time period. Spanning from 3,500 b.c.e.','7'],
    ['World War 1','Henry Freeman','bookCovers/historyBooks/WorldWar1.jpg','18$','History','World War One was one of the bloodiest wars in modern history. At its end, it had claimed over seventeen million lives. It led to the collapse of nations, the abdication of monarchies and ended empires. Entire divisions of men perished in the pursuit of mere miles of uninhabitable wasteland––towns were pulverized and millions displaced. It became a horrendous war of attrition, each side competing to kill as many of their foe as possible.','8'],
    ['Chanakya Neeti','R.P. Jain','bookCovers/historyBooks/ChanakyaNeeti.jpg','5$','History','Chanakya was an Indian teacher, philosopher and royal advisor. He managed the first Maurya emperor Chandragupta’s rise to power at a young age.','9'],
    ['A Brief History','Yuval Noah Harari','bookCovers/historyBooks/Sapiens.jpg','70$','History','From a renowned historian comes a groundbreaking narrative of humanity’s creation and evolution—a #1 international bestseller—that explores the ways in which biology and history have defined us and enhanced our understanding of what it means to be “human.','10'],
    ['The Warren Buffett',' Robert Hagstrom','bookCovers/historyBooks/TheWarrenBuffettWay.jpg','120$','History','Warren Buffett remains one of the most sought-after and watched figures in business today. He has become a billionaire and investment sage by buying chunks of companies and holding onto them, managing them as businesses, and eventually reaping huge profits for himself and investors in Berkshire Hathaway. The first two editions of The Warren Buffett Way gave investors their first in-depth look at the innovative investment and business strategies behind the spectacular success of living legend Warren E. Buffett.','11'],
    /** Fantasi*/
    ['Harry Potter','J.K. Rowling','bookCovers/scinceBooks/HarryPotter.jpg','7$','Fantasi','A global phenomenon and cornerstone of contemporary children’s literature, J.K. Rowling’s Harry Potter series is both universally adored and critically acclaimed. Now, experience the magic as you’ve never heard it before. The inimitable Jim Dale brings to life an entire cast of characters—from the pinched, nasal whine of Petunia Dursley to the shrill huff of the Sorting Hat to the earnest, wondrous voice of the boy wizard himself.','12'],
    ['The Tales','J.K. Rowling','bookCovers/scinceBooks/TheTales.jpg','13$','Fantasi','Performed by talented actors from across the Wizarding World, this is the first ever audiobook edition of The Tales of Beedle the Bard, which was originally written in 2007 by J.K. Rowling and has raised money for her childrens charity Lumos ever since. ','13'],
    ['Sita','Amish','bookCovers/scinceBooks/Sita.jpg','23$','Fantasi','India, 3400 BCE. The ancient kingdom of Mithila is divided by corruption, resentment, and poverty. An abandoned baby is found in a field protected by a vulture from a pack of wolves. Soon adopted by the rulers of the land, she is named Sita, and raised as a princess and beloved daughter.','14'],
    ['Jean Angel','Atul Mohite','bookCovers/scinceBooks/JeanAngel.jpg','44$','Fantasi','Fifteen year old Jean was born in Zeasia but brought up in Kala Nagari, which is across the other end of the river. The reason for he not being raised in the kingdom where he was born is the fact that he was born out of an extramarital affair of Queen Tara with Shyam, who receives a tortured death as the king returns from his travelling.','15'],
    ['Raavan','Amish Tripathi','bookCovers/scinceBooks/Raavan.jpg','33$','Fantasi','A land in tumult, poverty and chaos. Most people suffer quietly. A few rebel. Some fight for a better world. Some for themselves. Some don’t give a damn. Raavan. Fathered by one of the most illustrious sages of the time. Blessed by the Gods with talents beyond all. Cursed by fate to be tested to the extremes.','16'],
    /**Kids */
    ['Learn to Write','Crystal Radke','bookCovers/kidsBooks/myFirstLearntoWrite.jpg','78$','Kids','Set kids up to succeed in school with a learn to write for kids guide that teaches them letters, shapes, and numbers―and makes it fun. My First Learn-to-Write Workbook introduces your early writer to proper pen control, steady line tracing, new words, and more with dozens of exercises that will engage their minds and boost their reading and writing comprehension skills.','17'],
    ['Teach Your Dragon','Steve Herman','bookCovers/kidsBooks/TeachYourDragon.jpg','70$','Kids','Fun, cute and entertaining with beautiful illustrations, this is a must have book for children and parents/teachers to teach kids not to be afraid of changes, and encourage them to explore new skills and expand their comfort zone.','18'],
    ['The Giving Tree','Shel Silverstein','bookCovers/kidsBooks/theGivinTree.jpg','30$','Kids','Since it was first published fifty years ago, Shel Silversteins poignant picture book for readers of all ages has offered a touching interpretation of the gift of giving and a serene acceptance of anothers capacity to love in return.','19'],
    ['the Places You ll Go!','Dr. Seuss ','bookCovers/kidsBooks/thePlacesYoullGo.jpg','10$','Kids','From soaring to high heights and seeing great sights to being left in a Lurch on a prickle-ly perch, Dr. Seuss addresses life’s ups and downs with his trademark humorous verse and illustrations, while encouraging readers to find the success that lies within.','20'],
    ['Summer Bridge Activities','unknown','bookCovers/kidsBooks/SummerBridgeActivities.jpg','11$','Kids','INCLUDES: One Summer Bridge Activities workbook for 3rd to 4th grade. This workbook focuses on all subjects - math, writing, reading, science, social studies, fitness and character building. It also includes bonus stickers and flash cards.','21']

];
var exchangeableBooks = [
    ['The Perfect Wife','Blake Pierce','bookCovers/hororBooks/ThePerfectWife.jpg','0$','1','Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad error, beatae saepe harum eligendi, aperiamvel molestiae laboriosam alias ex quasi ipsa nobis at repellat reiciendis sapiente laborum! Fugit, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea delectus blanditiis id error corporis beatae, impedit reprehenderit laudantium nesciunt fuga!','1'],
    ['The Girl in Room 105','by Chetan Bhagat','bookCovers/hororBooks/TheGirlinRoom105.jpg','0$','1','','7'],
    ['A Global History','Francis D. K','bookCovers/historyBooks/AGlobalHistoryofArchitecture.jpg','0$','1','','8'],
//     ['Raavan','Amish Tripathi','bookCovers/scinceBooks/Raavan.jpg','0$','Fantasi','','17'],
//     ['Learn to Write','Crystal Radke','bookCovers/kidsBooks/myFirstLearntoWrite.jpg','0$','Kids','','18']
]
function changeTrans(text){
    trans = text;
}
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
}