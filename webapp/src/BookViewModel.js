import {observable, action} from 'mobx'
import {Chapter} from './Models/Chapter'
import {BookService} from './BookService'


export class BookViewModel{
   
    @observable currentPage
    @observable currentChapter
    @observable chapters = [];
    @observable pageNumber

    @observable totalPages = 1;

    @observable isChaptersOpened = false;

    service;
    // when the viewmodel is constructed, attempt to load the todos.
    constructor(){
        this.service = new BookService();
        this.load()       
    }   
    @action
    openChapters(){
        this.isChaptersOpened = !this.isChaptersOpened;
    }
    @action
    nextPage(){
        if(this.pageNumber + 1 < this.totalPages)
        {
            this.pageNumber = this.pageNumber + 1;
            this.currentPage = this.service.getPageByNumber(this.pageNumber);
        }
    }    
    
    @action
    previousPage(){
        if(this.pageNumber > 0)
        {
            this.pageNumber = this.pageNumber - 1;
            this.currentPage = this.service.getPageByNumber(this.pageNumber);
        }
    }   
    // load saved todos, if possible.
    @action
    load(){
        
        this.totalPages = 4;
        this.pageNumber = 1;
        this.chapters = [new Chapter(1,"Gdzie Lord G poznaje"), new Chapter(2,"Rzodział 2"), new Chapter(3,"Rzodział 3"),new Chapter(4,"Rzodział 4"), new Chapter(5,"Rzodział 2")];
        this.currentChapter = this.chapters[0];
        this.currentPage = this.currentChapter.getPageByNumber(1);
        
    }    
}