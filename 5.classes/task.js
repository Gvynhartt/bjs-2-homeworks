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

	set state(newState) {
		debugger;
		if (newState < 0) {
			this._state = 0;

		} else if (newState > 100) {
			this._state = 100;

		} else {
			this._state = newState;
		}

	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {

	constructor(name, releaseDate, pageCount) {

		super(name, releaseDate, pageCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {

	constructor(author, name, releaseDate, pageCount) {

		super(name, releaseDate, pageCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {

	constructor(author, name, releaseDate, pageCount) {

		super(author, name, releaseDate, pageCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {

	constructor(author, name, releaseDate, pageCount) {

		super(author, name, releaseDate, pageCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {

	constructor(author, name, releaseDate, pageCount) {

		super(author, name, releaseDate, pageCount);
		this.type = "detective";
	}
}

class Library {

	constructor(name) {

		this.name = name;
		this.books = [];
	}

	addBook(book) {

		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {

		let result = this.books.filter(item => item[type] === value);

		if (result.length !== 0) {

			return result[0];
		} else {

			return null;
		}
	}

	giveBookByName(bookName) {

		let queryIndex = this.books.findIndex(item => item.name === bookName); // ПЕРВЫЙ ВАРИАНТ
		let givenBook = this.books[queryIndex];

		if (queryIndex !== -1) {

			this.books.splice(queryIndex, 1);
			return givenBook;

		} else {

			return null;
		}

		// ВТОРОЙ ВАРИАНТ

		// let bookToGive = this.books.find(item => item.name === bookName);
		// let booksRemaining = this.books.filter(item => item.name !== bookName);
		// this.books = booksRemaining;

		// if (bookToGive === null || bookToGive === undefined) {
		//     return null;
		// } else {
		//     return bookToGive;
		// }
	}
}

class Student {
	constructor(name) {
		this.name = name;
		this.marks = {};
	}

	addMark(mark, subject) {

		if (mark >= 2 && mark <= 5) {

			if (this.marks.hasOwnProperty(subject)) {
				this.marks[subject].push(mark);

			} else {
				this.marks[subject] = [];
				this.marks[subject].push(mark);
			}
		}
	}

	getAverageBySubject(subject) {

		if (this.marks.hasOwnProperty(subject)) {

			let totalMarks = this.marks[subject].reduce((itemCurrent, itemSum) => itemCurrent + itemSum);
			let avgMarks = totalMarks / this.marks[subject].length;
			return avgMarks;

		} else {
			return 0;
		}
	}

	getAverage() {

		let arrSubjNames = Object.keys(this.marks); // создаём массив с названиями всех предметов,
		// который понадобится нам далее для перебора и подсчёта средних

		if (arrSubjNames.length !== 0) {

			let sumOfAvgForEach = 0; // здесь будем суммировать средние баллы по каждому предметам

			for (let subjToCalc of arrSubjNames) {

				let avgForSubjToCalc = this.getAverageBySubject(subjToCalc); // считаем среднее для отдельного предмета через вызов вышеописанного метода
				sumOfAvgForEach += avgForSubjToCalc;
			}

			let avgForAllSubjTotal = sumOfAvgForEach / arrSubjNames.length; // а здесь сохраняется общий средний балл для всех предметов

			return avgForAllSubjTotal;

		} else {
			return 0; // требуется предусмотреть и тот случай, если в объекте не будет предметов вообще
		}
	}
}
