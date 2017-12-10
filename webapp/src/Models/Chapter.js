import {observable, action} from 'mobx'
import {Page} from './Page'
import {BookService} from '../BookService'

export class Chapter{
    
    @observable pages;
    @observable name;
    number = 1;
    pages = [];
    service;

    constructor(/*int*/num, /*string*/name){
        this.number = num;
        this.name = name;
        this.load();
    }
    
    @action
    load(){
    this.service = new BookService();
        this.pages = [];      
}
        getPageByNumber(number)
        {
            return this.service.getPageByNumber(number);
        }
}