class PrintEditionItem {
constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
}
fix() {
    this.state = this.state * 1.5;
}

set state(state) {
    if (state < 0 ) {
        this._state = 0;
    } else if (state > 100) {
        this._state = 100;
    } else {
        this._state = state;
    }
}

get state() {
    return this._state
}

}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if(book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let bookSearch = this.books.find(book => book[type] === value);
        if(bookSearch) {
            return bookSearch;
        } else {
            return null;
        }
    }

    giveBookByName(bookName) {
        let bookIndex = this.books.findIndex(book => book.name === bookName);

        if(bookIndex === -1) {
            return null;
        } else {
            let givBook = this.books[bookIndex];

            this.books.splice(bookIndex, 1);
            return givBook;
        }
        

    }
}


// Задача 3

class Student {
    constructor (name){
        this.name = name;
        this.marks = {};
    }

    addMark(mark, item) {
        if (mark < 2 || mark > 5) {
            return;
        } else {
            if (this.marks.hasOwnProperty(item)) {

            } else {
                this.marks[item] = [];
            }
            this.marks[item].push(mark);
        }
    }

    getAverageBySubject(item) {
        if(this.marks.hasOwnProperty(item) && this.marks[item].length !== 0) {
          let sum = this.marks[item].reduce((acc, mark) => acc + mark, 0);
          let countMarks = this.marks[item].length;
          return sum / countMarks;
        } else {
          return 0;
        }
    }

    getAverage() {
        let items = Object.keys(this.marks);
        if(items.length !== 0) {
            let sum = null;
            for (let i = 0; i < items.length; i++) {
                sum += this.getAverageBySubject(items[i]) 
            }
            return sum / items.length;
        } else {
            return 0;
        }
    }
}
