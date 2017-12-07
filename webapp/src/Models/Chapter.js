import {observable, action} from 'mobx'
import {Page} from '../Page'
import {BookService} from '../BookService'

export class Chapter{
    
    @observable pages;
    @observable name;
    number = 1;
    pages = [];
    service;

    constructor(num, name){
        this.number = num;
        this.name = name;
        this.load();
    }
    
    @action
    load(){
    this.service = new BookService();
        this.pages = [];
        this.name = "Rozdział 1";
        this.pages.push(this.service.getPageByNumber(1));
        this.pages.push(this.service.getPageByNumber(2));
        this.pages.push(this.service.getPageByNumber(3));
}
        getPageByNumber(number)
        {
            return this.pages[number];
        }
}