import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SpninnerComponent } from '../shared/components/spninner/spninner.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductDetailsComponent,
    SpninnerComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class ProductsModule { }
