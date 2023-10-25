class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null; 
    }
    addClock(currentTime, callback) {
        if(!currentTime || typeof callback !== "function") {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if(this.alarmCollection.some(obj => obj.time === currentTime)) {
            console.warn('Уже присутствует звонок на это же время');
        }    
        let newTimer = { 
            callback: callback, 
            time: currentTime, 
            canCall: true 
        }
        this.alarmCollection.push(newTimer)
        
    

    }

    removeClock(currentTime) {
        this.alarmCollection = this.alarmCollection.filter(timer => timer.time !== currentTime);
    }

    getCurrentFormattedTime() {
        let data = new Date();
        let hh = data.getHours();
        let mm = data.getMinutes();

        if (hh < 10) {
            hh = '0' + hh;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        return (`${hh}:${mm}`);
    }

    start() {
        if(this.intervalId !== null) {
            return;
        }
        let timerId = setInterval(() => {
            this.alarmCollection.forEach(timer => {
                if (timer.time === this.getCurrentFormattedTime() && timer.canCall === true ) {
                    timer.canCall = false;
                     timer.callback();
                }
            }) 
         }, 1000);
        this.intervalId = timerId;
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(timer => timer.canCall = true); 
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}