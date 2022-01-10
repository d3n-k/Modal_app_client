import {makeAutoObservable} from 'mobx';


export default class resultStore {
    constructor() {
        this._cols = {}
        this._result = 0
        this._word = ''
        makeAutoObservable(this);
    }

    setCols(cols) {
        this._cols = cols;
    }

    setResult(result) {
        this._result = result;
    }

    setWord(word) {
        this._word = word;
    }

    get cols() {
        return this._cols
    }

    get result() {
        return this._result
    }

    get word() {
        return this._word
    }
}

