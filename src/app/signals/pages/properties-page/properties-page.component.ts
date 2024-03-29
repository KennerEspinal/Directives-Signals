import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'signals-properties-page',
  templateUrl: './properties-page.component.html',
  styles: ``
})
export class PropertiesPageComponent {

  counter = signal(10);

  user = signal<User>({
    "id": 2,
    "email": "janet.weaver@reqres.in",
    "first_name": "Janet",
    "last_name": "Weaver",
    "avatar": "https://reqres.in/img/faces/2-image.jpg"
  })


  fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);

  userChangedEffect = effect(() => {
    console.log(`${this.user().first_name} - ${this.counter()}`);

  });

  onFieldUpdated(field: keyof User, value: string) {

    // this.user.update(current => ({
    //   ...current,
    //   [field]: value
    // }));

    this.user.update(current => {
      switch (field) {
        case 'email':
          return { ...current, email: value }
        case 'first_name':
          return { ...current, first_name: value }
        case 'last_name':
          return { ...current, last_name: value }
        case 'avatar':
          return { ...current, avatar: value }
        case 'id':
          return { ...current, id: Number(value) }
      }
      return current
    })
  }

  increaseBy(value: number) {
    this.counter.update(current => current + value);
  }
}
