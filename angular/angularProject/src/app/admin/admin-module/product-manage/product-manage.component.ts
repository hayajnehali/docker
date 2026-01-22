import { Component } from '@angular/core';

@Component({
  selector: 'app-product-manage', 
  templateUrl: './product-manage.component.html',
  styleUrl: './product-manage.component.css'
})
export class ProductManageComponent {

  product = {
    productId: undefined,
    name: undefined,
    nameEn: undefined,
    nameAr: undefined,
    price: undefined,
    count: undefined,
    description: undefined,
    imageUrl: undefined
};

onSubmit() {
    console.log('Product created:', this.product);
    // Handle the product object (e.g., send it to a service)
}

}

