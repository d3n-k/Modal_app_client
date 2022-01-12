import {makeAutoObservable} from 'mobx';


export default class result3Store {
    constructor() {
        this._cols3 = {}
        this._result3 = 0
        this._word3 = ''
        makeAutoObservable(this);
    }

    setCols3(cols) {
        this._cols3 = cols;
    }

    setResult3(result) {
        this._result3 = result;
    }

    setWord3(word) {
        this._word3 = word;
    }

    get cols3() {
        return this._cols3
    }

    get result3() {
        return this._result3
    }

    get word3() {
        return this._word3
    }
}

