import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/category/category.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  title = ''
  description = ''
  price = ''
  category = ''
  categories = []

  constructor(
    private productService: ProductService,
    private service: CategoryService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories() {
    this.service
      .getCategories()
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.categories = response['data']
        } else {
          alert(response['error'])
        }
      })
  }

  onCancel() {
    this.activeModal.dismiss('ok')
  }

  onSave() {
    this.productService
      .createProduct(this.title, this.description, this.price, this.category)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.activeModal.dismiss('ok')
        } else {
          alert(response['error'])
        }
      })
  }

}
