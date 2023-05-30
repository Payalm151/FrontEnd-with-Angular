import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryAddComponent } from 'src/app/category/category-add/category-add.component';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = []

  constructor(
    private service: ProductService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.service
      .getProducts()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.products = response['data']
        } else {
          alert(response['error'])
        }
      })
  }

  onAdd() {
    const ref = this.modalService.open(ProductAddComponent)
    ref.result.finally(() => {
      this.loadProducts()
    })
  }

  onDelete(product) {
    this.service
      .deleteProduct(product._id)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.loadProducts()
        } else {
          alert(response['error'])
        }
      })
  }

}
