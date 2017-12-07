import {observable} from 'mobx'

export class Page{
    number = 1;
    constructor(num){
        this.number = num;
    }
    @observable orginalText = "" + this.number;
    // is the todo done?
    @observable translatedText = ""
}