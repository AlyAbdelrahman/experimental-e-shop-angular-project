import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsModule } from '../products/products.module';
import { HiglightsDirective } from '../directives/higlights.directive';
@NgModule({
  declarations: [
    HeaderComponent,
    HiglightsDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ProductsModule,
  ],
  exports: [
    HeaderComponent,
    HiglightsDirective
  ]
})
export class SharedModule { }
