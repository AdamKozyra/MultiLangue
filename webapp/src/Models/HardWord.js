import {observable, action} from 'mobx'
export class HardWord
{
    @observable text;
    @observable translation;

    constructor(text, translation){
        this.translation = translation;
        this.text = text;
    }
}