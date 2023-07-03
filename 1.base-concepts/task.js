"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let eqDisc = b ** 2 - 4 * a * c; // сохраняем дискриминант в переменную

	if (eqDisc > 0) { // *твоё лицо,* когда корней два
		let eqDoubleRoot1 = (b * -1 + Math.sqrt(eqDisc)) / (2 * a);
		let eqDoubleRoot2 = (b * -1 - Math.sqrt(eqDisc)) / (2 * a);
		arr.push(eqDoubleRoot1, eqDoubleRoot2);

	} else if (eqDisc == 0) { // когда лишь один корень
		let eqSingleRoot = (b * -1) / (2 * a);
		arr.push(eqSingleRoot);
	}

	// также есть случай с дискриминантом менее нуля, но поскольку действительных корней нет,
	// то и в массив ничего не добавляется (т.е. он остаётся пустым)

	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	if ((typeof(percent) != String) && (typeof(contribution) != String) && (typeof(amount) != String) && (typeof(countMonths) != String)) {
		// проверка на то, что вводимые данные не строковые

		let percMonthFract = percent / (100 * 12);
		// сперва переводим процентную ставку в кошеғный вид

		let mortMinusDownPaymt = amount - contribution;
		// тело кредита равно объём минус контрибуция (что бы это ни значило)

		let monthlyPayment = mortMinusDownPaymt * (percMonthFract + (percMonthFract / (Math.pow((1 + percMonthFract), countMonths) - 1)));
		// далее, собственно, расписываем нашу километровую кокоджамбу ежемесячного платежа

		let totalPayment = monthlyPayment * countMonths;
		// затем вычисляем, на сколько же именно шекелей таки обули машигерных гоев

		let totalPaymentRraund = totalPayment.toFixed(2);
		// округляем нашего гомункулюса до двух знаков после запятой

		return Number(totalPaymentRraund);

	} else {
		return false;
	}
}