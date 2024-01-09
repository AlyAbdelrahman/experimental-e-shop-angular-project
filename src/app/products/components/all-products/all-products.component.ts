import { Component } from '@angular/core';
import { ProductsServices } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  products:any[] = [];
  categories:any[] = [];
  currentCategory : string = 'all';
  loading: boolean = false;

  testt:string = 'test';
  constructor(private service:ProductsServices){  }
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  getProducts() :void{
    this.loading = true;
   this.service.getAllProducts().subscribe((data:any)=>{
    this.loading = false;
    this.products = data;
   }, error => alert(error))
  }
  getCategories(): void {
    this.loading = true;
    this.service.getAllCategories().subscribe((categories)=>{
      this.loading = false;
      this.categories = categories;
    },error => alert(error))
  }
  handleSelectCategory(event:Event): void{
    console.log(event)
    const selectedValue = (event.target as HTMLSelectElement).value;
    if (selectedValue === 'all' && this.currentCategory != 'all') {
      this.loading = true;
      return this.getProducts();
    }
    this.loading = true;
    this.currentCategory = selectedValue;

    this.service.getProductByCategory(selectedValue).subscribe((data)=>{
      console.log('>',data)
      this.loading = false;

    this.products = data;
  

      
     }, error => alert(error))
  }
}
