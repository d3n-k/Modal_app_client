import {makeAutoObservable} from 'mobx';


export default class result4Store {
    constructor() {
        this._cols4 = {}
        this._result4 = 0
        this._word4 = ''
        makeAutoObservable(this);
    }

    setCols4(cols) {
        this._cols4 = cols;
    }

    setResult4(result) {
        this._result4 = result;
    }

    setWord4(word) {
        this._word4 = word;
    }

    get cols4() {
        return this._cols4
    }

    get result4() {
        return this._result4
    }

    get word4() {
        return this._word4
    }
}

