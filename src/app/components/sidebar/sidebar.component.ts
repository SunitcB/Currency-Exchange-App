import { NbSidebarService, NbMenuItem } from '@nebular/theme';
import { Component } from '@angular/core';

@Component({
  selector: 'nav-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private sidebarService: NbSidebarService) {

  }

  sidebarItems: NbMenuItem[] = [
    {
      title: 'Dashboard',
      icon: 'home-outline',
      link: '/dashboard'
    },
    {
      title: 'Components',
      icon: 'cube-outline',
      children: [
        {
          title: 'Buttons',
          link: '/components/buttons'
        },
        {
          title: 'Cards',
          link: '/components/cards'
        }
      ]
    },
    {
      title: 'About',
      icon: 'info-outline',
      link: '/about'
    }
  ];
}
