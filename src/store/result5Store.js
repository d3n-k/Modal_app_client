import {makeAutoObservable} from 'mobx';


export default class result5Store {
    constructor() {
        this._cols5 = {}
        this._result5 = 0
        this._word5 = ''
        makeAutoObservable(this);
    }

    setCols5(cols) {
        this._cols5 = cols;
    }

    setResult5(result) {
        this._result5 = result;
    }

    setWord5(word) {
        this._word5 = word;
    }

    get cols5() {
        return this._cols5
    }

    get result5() {
        return this._result5
    }

    get word5() {
        return this._word5
    }
}

