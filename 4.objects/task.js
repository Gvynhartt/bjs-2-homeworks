function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

const stJotaro = new Student("Zhizhan", "male", 17)

const stKira = new Student("Yoshikage", "male", 33)

const stL = new Student("Light", "male", 15)

const stSpoodie = new Student("Parker", "male", 19)

const stDarthVader = new Student("Skywalker", "male", 8)

const stUl = new Student("English", "male", 12)

const stAnger = new Student("Thrash", "female", 13)

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
	return this.subject;
}

Student.prototype.addMarks = function(...marksToAdd) {

	if (this.hasOwnProperty('marks')) {
		this.marks = [...this.marks, ...marksToAdd];
		return this.marks;
	}
}

Student.prototype.getAverage = function() {

	if (!this.hasOwnProperty('marks') || [...this.marks].length === 0) {
		return 0;

	} else {
		let avgMarx = this.marks.reduce((curValue, curTotal) => curValue + curTotal, 0) / this.marks.length;
		return avgMarx;
	}
}

Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
	return this.excluded;
}
