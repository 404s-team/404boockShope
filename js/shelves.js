'user strict';
addBooks();
var containAll,ContainHistory,containHoror,containFantacy,containKids;
ContainHistory = document.getElementById('secHistory');
containHoror = document.getElementById('secHorror');
containFantacy = document.getElementById('secFantacy');
containKids = document.getElementById('secKids');
for (let index = 0; index < Book.all.length; index++) {
        var divParent = document.createElement('div');
        divParent.setAttribute('class','divParent')
        if (Book.all[index].bookType == 'History'){
            ContainHistory.appendChild(divParent);
        }
        if (Book.all[index].bookType == 'hurror'){
            containHoror.appendChild(divParent);
        }
        if (Book.all[index].bookType == 'Fantasi'){
            containFantacy.appendChild(divParent);   
        }
        if (Book.all[index].bookType == 'Kids'){
            containKids.appendChild(divParent);
        }
        var img = document.createElement('img');
        divParent.appendChild(img);
        img.setAttribute('class','userBookImg')
        img.setAttribute('src',Book.all[index].bookCover)
        var divDetails = document.createElement('div');
<<<<<<< HEAD
        divParent.appendChild(divDetails);
        divDetails.setAttribute('class','userBookDetails')
        var bookName = document.createElement('p');
        var bookAuther = document.createElement('p');
        var bookDisc = document.createElement('p');
        divDetails.appendChild(bookName);
        divDetails.appendChild(bookAuther);
        divDetails.appendChild(bookDisc);
        bookName.setAttribute('class','userBookName');
        bookAuther.setAttribute('class','userBookAuther');
        bookDisc.setAttribute('class','userBookDisc');
=======
        // divParent.appendChild(divDetails);
        // divDetails.setAttribute('class','userBookDetails')
        // var bookName = document.createElement('p');
        // var bookAuther = document.createElement('p');
        // var bookDisc = document.createElement('p');
        // divDetails.appendChild(bookName);
        // divDetails.appendChild(bookAuther);
        // divDetails.appendChild(bookDisc);
        // bookName.setAttribute('class','userBookName');
        // bookAuther.setAttribute('class','userBookAuther');
        // bookDisc.setAttribute('class','userBookDisc');
>>>>>>> c7aa6c96739827c0e0a8c4c029ce07e2916ffdfc
        // bookName.textContent = Book.all[index].bookName;
        // bookAuther.textContent = Book.all[index].bookauthor;
        // bookDisc.textContent = Book.all[index].bookDescription;
}