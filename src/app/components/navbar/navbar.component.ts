import { SearchProductsRequest } from './../../api/models/search-products-request';
import { Component } from '@angular/core';
import { ProductsService } from '../../api/services';
import { ProductsSearch$Params } from '../../api/fn/products/products-search';
import { PaginationResponseOfProductDto } from '../../api/models';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   constructor(private productService: ProductsService){
    let searchProductsRequest: SearchProductsRequest = {
       pageSize: 10,
       pageNumber: 1,
       brandId: 'E0D19668-4449-4F20-790F-08DC6FB73E6B'
    };
    let params: ProductsSearch$Params = {
      body: searchProductsRequest
    };
    this.productService.productsSearch(params).subscribe(
      (response: PaginationResponseOfProductDto) => {
        console.log(response);
      }
    );
   }
   
}
