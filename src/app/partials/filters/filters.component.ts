import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>();
  categoriesSubscription: Subscription | undefined;
  categories: Array<string>  = ['All'];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getAllCategories()
      .subscribe((response: any) => {
        response.forEach((element: any) => {
          this.categories.push(element.name);
        });
      });
  }

  onShowCategory(category: string): void{
    this.showCategory.emit(category);
  }

  ngOnDestroy(): void {
      if(this.categoriesSubscription){
        this.categoriesSubscription.unsubscribe();
      }
  }
}
