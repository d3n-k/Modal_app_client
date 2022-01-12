import {makeAutoObservable} from 'mobx';


export default class result2Store {
    constructor() {
        this._cols2 = {}
        this._result2 = 0
        this._word2 = ''
        makeAutoObservable(this);
    }

    setCols2(cols) {
        this._cols2 = cols;
    }

    setResult2(result) {
        this._result2 = result;
    }

    setWord2(word) {
        this._word2 = word;
    }

    get cols2() {
        return this._cols2
    }

    get result2() {
        return this._result2
    }

    get word2() {
        return this._word2
    }
}

