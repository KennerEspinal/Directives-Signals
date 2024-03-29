import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  templateUrl: './products-page.component.html',
  styles: ``
})
export class ProductsPageComponent {

  private _fb = inject(FormBuilder);

  color: string = 'blue';

  productForm = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.email]],
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
