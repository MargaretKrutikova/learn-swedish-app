import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    moduleId: module.id,
    selector: 'paginator',
    templateUrl: 'paginator.component.html'
})
export class PaginatorComponent implements OnInit, OnDestroy {
     private changeSub: Subscription;
     private totalItems: number;

    @Input() itemsPerPage: number;

    @Input() currentPage: number;

    @Input() totalCountSubscription: EventEmitter<number>;

    @Output() pageChange = new EventEmitter<number>();
    
    pages: number[];

    ngOnInit() {       
        if (!this.currentPage) {
            this.currentPage = 1;
        }

        this.changeSub = this.totalCountSubscription.subscribe((count:number) => {
            this.totalItems = count;

            let numberOfPages = Math.ceil(this.totalItems / this.itemsPerPage);
            this.pages = Array.from(Array(numberOfPages),(x, i) => i + 1);
            this.pageChange.emit(this.currentPage);
        });
    } 

    ngOnDestroy() {
        this.changeSub.unsubscribe();
    }  

    setPage(page: number) {
        this.currentPage = page;
        this.pageChange.emit(page);
    }
}