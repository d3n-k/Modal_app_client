import {makeAutoObservable} from 'mobx';


export default class result1Store {
    constructor() {
        this._cols1 = {}
        this._result1 = 0
        this._word1 = ''
        makeAutoObservable(this);
    }

    setCols1(cols) {
        this._cols1 = cols;
    }

    setResult1(result) {
        this._result1 = result;
    }

    setWord1(word) {
        this._word1 = word;
    }

    get cols1() {
        return this._cols1
    }

    get result1() {
        return this._result1
    }

    get word1() {
        return this._word1
    }
}

