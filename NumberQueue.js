
// class used to store current string of numbers entered on keyboard
class NumberQueue{
    constructor () {
        this.numberArray = "";
    }

    addToArray(num) {
        this.numberArray += num;
    }

    getCurrentQueue() {
        return this.numberArray;
    }

    clearSession() {
        this.numberArray = "";
    }

    deleteLast() {
        this.numberArray = this.numberArray.slice(0, length-1)
    }

}