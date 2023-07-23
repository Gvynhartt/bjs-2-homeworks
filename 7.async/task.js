class AlarmClock {

	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(startTime, alarmFunc) {

		if (startTime === null || alarmFunc === undefined) {
			throw new Error('Отсутствуют обязательные аргументы');
		}

		if (this.alarmCollection.includes(timeSetting => this.time === startTime)) {

			console.warn('Уже присутствует звонок на это же время');
		}

		this.alarmCollection.push({
			callback: alarmFunc,
			time: startTime,
			canCall: true,
		});
	}

	removeClock(timeToRemove) {

		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== timeToRemove);
	}

	getCurrentFormattedTime() {

		let timeToSet = new Date();
		let strHoursMinutes = timeToSet.toTimeString().substring(0, 5);
		return strHoursMinutes;
	}

	start() {

		if (this.intervalId === null) {

			this.intervalId = setInterval(() => {
				for (let alarm of this.alarmCollection) { // здесь и ниже использовался "for", а не "forEach" - надеюсь, это некритично

					let curTime = this.getCurrentFormattedTime();

					if (alarm.time === curTime && alarm.canCall === true) {

						alarm.canCall = false;
						alarm.callback();
					}
				}
			}, 1000);

		} else {
			return;
		}
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {

		for (let alarm of this.alarmCollection) {

			alarm.canCall = true;
		}
	}

	clearAlarms() {

		this.stop();
		this.alarmCollection = [];
	}
}
