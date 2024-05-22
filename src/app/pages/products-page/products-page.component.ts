import { SearchProductsRequest } from './../../api/models/search-products-request';
import { Component } from '@angular/core';
import { ProductsService } from '../../api/services';
import { ProductsSearch$Params } from '../../api/fn/products/products-search';
import { PaginationResponseOfProductDto } from '../../api/models';
import { PageEvent } from '@angular/material/paginator'; 




@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.scss'
})
export class ProductsPageComponent {


  products: any[] = [];
  items: any[] = [];
  productsPerPage: number = 5;
  numberPage: number = 1;

  constructor(private productService: ProductsService) {
    this.loadProducts()
  }
  ngOnInit() {
  

  }

  changePage(event: PageEvent) {
    console.log('event',event)
     this.productsPerPage = event.pageSize;
     this.numberPage = event.pageIndex + 1;
     this.loadProducts();
  }
  
  loadProducts(){
    let searchProductsRequest: SearchProductsRequest = {
      pageSize: this.productsPerPage,
      pageNumber: this.numberPage,
      brandId: 'E0D19668-4449-4F20-790F-08DC6FB73E6B'
    };
    let params: ProductsSearch$Params = {
      body: searchProductsRequest
    };
    this.productService.productsSearch(params).subscribe(
      (response: PaginationResponseOfProductDto) => {
        this.items = response.data || [];

         console.log(this.products);
      }
    );
  }

}
