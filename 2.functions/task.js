function getArrayParams(...arr) {

	// let min = Infinity; - ВАРИАНТ С ЦИКЛОМ (РАБОЧИЙ)
	// let max = -Infinity;
	// let sum = 0;

	/*
	for (let i = 0; i < arr.length; i++) { 
	  if (arr[i] > max) {
	    max = arr[i];
	  }

	  if (arr[i] < min) {
	    min = arr[i];
	  }

	  sum = sum + arr[i];
	}
	*/
	if (arr.length !== 0) {

		let min = Math.min(...arr); // ВАРИАНТ ДЛЯ ЛЕНИВЫХ (ИЛИ УМНЫХ?)
		let max = Math.max(...arr);
		let sum = arr.reduce(function(a, b) {
			return a + b
		});

		let avg = sum / arr.length;
		avg = Number(avg.toFixed(2));

		return {
			min: min,
			max: max,
			avg: avg
		};
	} else {
		return 0;
	}
}

function summElementsWorker(...arr) {
	if (arr.length !== 0) {
		let sumElements = arr.reduce(function(a, b) {
			return a + b
		}, 0);
		return sumElements;
	} else {
		return 0;
	}
}

function differenceMaxMinWorker(...arr) {

	let min = Infinity;
	let max = -Infinity;
	let diff = 0;

	if (arr.length !== 0) {
		min = Math.min(...arr);
		max = Math.max(...arr);

		if (max > min) {
			diff = max - min;
		} else if (min > max) {
			diff = min - max;
		}
	}

	return diff;
}

function differenceEvenOddWorker(...arr) { // нужно определить чётность значения элемента в массиве или его индекса, Лебовски?

	if (arr.length !== 0) {
		let sumEvenElements = 0;
		let sumOddElements = 0;
		let diff = 0;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 1) {
				sumOddElements = sumOddElements + arr[i];
			} else {
				sumEvenElements = sumEvenElements + arr[i];
			}
		}

		diff = sumEvenElements - sumOddElements;

		return diff;
	} else {
		return 0;
	}
}

function averageEvenElementsWorker(...arr) { // в этом задании хоть понятно, что требуется, спасибо
	if (arr.length !== 0) {
		let sumEven = 0;
		let countEven = 0;
		let avgEven;

		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 === 0) {
				sumEven = sumEven + arr[i];
				countEven++;
			}
		}
		avgEven = sumEven / countEven;
		return avgEven;

	} else {
		return 0;
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = func(...arrOfArr[0]);

	for (let i = 0; i < arrOfArr.length; i++) {
		const funcResult = func(...arrOfArr[i]);
		if (funcResult > maxWorkerResult) {
			maxWorkerResult = funcResult;
		}
	}
	return maxWorkerResult;
}
