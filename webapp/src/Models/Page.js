import {observable} from 'mobx'
import {HardWord} from './HardWord'

export class Page{
    @observable orginalText = "";    
    @observable translatedText = "";
    @observable hardWords;
    number = 1;
    constructor(num){
        this.number = num;
        this.hardWords = [new HardWord('Confounded ', 'Przeklęty'), new HardWord('clerk ', 'agent')];
    }    
}