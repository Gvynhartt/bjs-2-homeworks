function parseCount(nmbToParse) {

	let parseResult = Number.parseFloat(nmbToParse);

	if (!isNaN(parseResult)) {

		return parseResult;
	} else {
		throw new Error("Невалидное значение");
	}
}

function validateCount(nmbToParse) {

	try {
		return parseCount(nmbToParse);

	} catch (parseError) {
		return parseError;
	}
}


class Triangle {

	constructor(a, b, c) {
		this.sideA = a;
		this.sideB = b;
		this.sideC = c;

		if ((this.sideA + this.sideB < this.sideC) || (this.sideA + this.sideC < this.sideB) || (this.sideB + this.sideC < this.sideA)) {

			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {

		let perimeTre = this.sideA + this.sideB + this.sideC;
		return perimeTre;
	}

	get area() {

		let semiP = this.perimeter / 2; // находим полупериметр
		let aHeron = Math.sqrt(semiP * (semiP - this.sideA) * (semiP - this.sideB) * (semiP - this.sideC)); // загоняем в формулу Герона
		let areaFormat = Number(aHeron.toFixed(3)); // округляем до 3 знака после запятой
		return areaFormat;
	}
}

function getTriangle(a, b, c) {

	try {
		return new Triangle(a, b, c);
	} catch (resultTriangle) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует";
			},
			get area() {
				return "Ошибка! Треугольник не существует";
			}
		};
	}
}﻿
