import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  title = ''
  description = ''

  constructor(
    private service: CategoryService,
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.activeModal.dismiss('ok')
  }

  onSave() {
    this.service
      .createCategory(this.title, this.description)
      .subscribe(response => {
        if (response['status'] == 'success') {
          this.activeModal.dismiss('ok')
        } else {
          alert(response['error'])
        }
      })
  }

}
