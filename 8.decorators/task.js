//Задача № 1
function cachingDecoratorNew(func) {
	let cacheLocal = [];

	function wrapFunc(...args) {

		const wrapHash = String(md5(args));
		let objInCache = cacheLocal.find(item => item.hash === wrapHash);

		if (objInCache) {

			let targObj = cacheLocal[cacheLocal.findIndex(item => item.hash === wrapHash)];
			console.log("Из кеша: " + targObj);
			return "Из кеша: " + targObj.value;
		}

		let targFuncResult = func(...args);
		let resultForPush = {
			hash: wrapHash,
			value: targFuncResult,
		};
		cacheLocal.push(resultForPush);

		if (cacheLocal.length > 5) {

			cacheLocal = cacheLocal.slice(1);
		}

		console.log("Вычисляем: " + targFuncResult);
		return "Вычисляем: " + targFuncResult;
	}

	return wrapFunc;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {

	wrapFunc.count = 0; // считаются вызовы самой функции

	wrapFunc.allCount = 0; // считаются вызовы декоратора

	let tOutId = 0;

	function wrapFunc() {

		wrapFunc.allCount++;

		if (tOutId === 0) {
			wrapFunc.count++;
			func();
		} else {
			clearTimeout(tOutId);
		}

		tOutId = setTimeout(() => {
			func();
			wrapFunc.count++;
		}, delay);

	}

	return wrapFunc;
}
