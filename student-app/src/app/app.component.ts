import { Component } from '@angular/core';

interface Nav{
  link: string,
  name: string,
  exact: boolean
}

@Component({
  selector: 'app-root',
  template: `
  <div class="app container">
    <nav class="navbar navbar-light navbar-toggleable-md" style="background-color: #343a40;">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item" *ngFor="let item of nav">
          <a class="nav-link" [routerLink]="item.link" routerLinkActive="active" [routerLinkActiveOptions]="{exact: item.exact}">{{item.name}}</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  nav: Nav[] = [
    {link: '/', name: 'Home', exact: true},
    {link: '/students', name: 'Students', exact: false}
  ];
}
