import {observable, action} from 'mobx'
import {Chapter} from './Models/Chapter'
import {Book} from './Models/Book'
import {BookService} from './BookService'


export class BookViewModel{
   
    @observable currentPage
    @observable currentChapter
    @observable chapters = [];
    @observable pageNumber
    @observable book;
    @observable totalPages = 1;

    @observable isChaptersOpened = false;

    id = 1;   
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
        if(this.pageNumber < this.totalPages)
        {
            this.pageNumber = this.pageNumber + 1;
            this.currentPage = this.currentChapter.getPageByNumber(this.pageNumber);
        }
    }    
    
    @action
    previousPage(){
        if(this.pageNumber > 1)
        {
            this.pageNumber = this.pageNumber - 1;
            this.currentPage = this.currentChapter.getPageByNumber(this.pageNumber);
        }
    }   
    // load saved todos, if possible.
    @action
    load(){
        this.book = this.service.getBook(this.id);
        this.totalPages = this.book.getTotalPages();
        this.pageNumber = 1;
        this.chapters = this.book.chapters;
        this.currentChapter = this.chapters[0];
        this.currentPage = this.currentChapter.getPageByNumber(1);        
    }    
}