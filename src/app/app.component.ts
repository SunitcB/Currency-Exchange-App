import { Component } from '@angular/core';
import { NbMenuItem, NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Currency Exchange';

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
        // Add more component items as needed
      ]
    },
    {
      title: 'About',
      icon: 'info-outline',
      link: '/about'
    }
  ];

  toggleSidebar = () => {
    this.sidebarService.toggle(true, 'left')
  }
}
