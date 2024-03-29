import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  link: string;
}

@Component({
  selector: 'signals-side-menu',
  templateUrl: './side-menu.component.html',
  styles: `
    li {
      cursor: pointer;
      transition: 0.3s all;
    }
  `
})
export class SideMenuComponent {

  // menuItems: MenuItem[] = [
  //   {
  //     title: 'Counter',
  //     link: 'counter'
  //   },
  //   {
  //     title: 'Usuario',
  //     link: 'user-info'
  //   },
  //   {
  //     title: 'Mutaciones',
  //     link: 'properties'
  //   }
  // ];

  menuItems = signal<MenuItem[]>([
    {
      title: 'Counter',
      link: 'counter'
    },
    {
      title: 'Usuario',
      link: 'user-info'
    },
    {
      title: 'Mutaciones',
      link: 'properties'
    }
  ]);

}
