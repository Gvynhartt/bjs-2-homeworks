function compareArrays(arr1, arr2) {

	if (arr1.length === arr2.length) {
		return arr2.every((item, index) => (item === arr1[index]));

	} else {
		return false;
	}
}

function getUsersNamesInAgeRange(users, gender) {

	let query = gender; // во избежание совпадений с названиями полей (чтобы не было путаницы)

	const propaGender = ["мужской", "женский"] // проверка на случай ввода несуществующего пола

	if (users.length !== 0 && propaGender.some(item => item === query)) { // В ДВУХ ВАРИАНТАХ

		//  в закоментированном варианте я использую императивный подход, так как при исполнении всего сразу
		// "цепочкой" происходит неудобное преобразование исходного массива

		/* ПЕРВЫЙ ВАРИАНТ
		let filtGender = users.filter(user => user.gender === query);

		let arrAges = filtGender.map(user => user.age); // создание массива нужных возрастов в отдельной переменной упрощает подсчёт среднего

		let totalAge = arrAges.reduce((ageTotal, ageCurrent) => ageTotal + ageCurrent); // здесь я просто получаю сумму всех возрастов

		let ageAverage = totalAge / arrAges.length; // конкретно здесь нужна длина уже сокращённого массива, а не исходного

		*/

		let ageAverage = users.filter(user => user.gender === query).map(user => user.age) // ВТОРОЙ ВАРИАНТ
			.reduce((ageTotal, ageCurrent) => ageTotal + ageCurrent) / users.filter(user => user.gender === query).length; // здесь довольно длинный подсчёт числа элементов

		return ageAverage; // запись в виде неведомой декларативной кокоджамбы

	} else {

		return 0;
	}
}
