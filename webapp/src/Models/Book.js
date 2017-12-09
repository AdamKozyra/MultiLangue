import {observable, action} from 'mobx'
import {Chapter} from './Chapter'
import {BookService} from '../BookService'

export class Book{

    @observable chapters;
    @observable name;
   
    service;
    totalPages = 0;
    constructor(id){       
        this.load(id);
    }
    getTotalPages()
    {
        let count = 0;
        this.chapters.forEach(function(element) {
            count ++;
        }, this);
        return count;
    }
    @action
    load(id){       
        }
        getPageByNumber(number)
        {
            return this.pages[number];
        }
}