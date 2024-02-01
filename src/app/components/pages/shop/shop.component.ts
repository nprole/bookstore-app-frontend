import {Component} from '@angular/core';
import {SelectItem} from "primeng/api";
import {DataView} from "primeng/dataview";
import {ProductService} from "../../../layout/service/product.service";
import {BooksService} from "../../../servies/books.service";

@Component({
    selector: 'bookstore-app-frontend-shop',
    templateUrl: './shop.component.html',
    styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {

    products: any[] = [];

    sortOptions: SelectItem[] = [];

    sortOrder: number = 0;

    sortField: string = '';


    constructor() {
    }

    ngOnInit() {
/*        // this.productService.getProducts().then(data => this.products = data);
        this.booksService.searchBooks('').subscribe(
            {
                next: (res) => {
                    console.log('dadadada', res);
                }
            }
        );*/

        this.sortOptions = [
            {label: 'Price High to Low', value: '!price'},
            {label: 'Price Low to High', value: 'price'}
        ];
    }

    onSortChange(event: any) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.sortOrder = -1;
            this.sortField = value.substring(1, value.length);
        } else {
            this.sortOrder = 1;
            this.sortField = value;
        }
    }

    onFilter(dv: DataView, event: Event) {
        dv.filter((event.target as HTMLInputElement).value);
    }
}
