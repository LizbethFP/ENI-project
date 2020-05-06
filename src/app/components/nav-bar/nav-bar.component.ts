import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  logo = './../src/../../../assets/logo.PNG';
  navbarCollapsed = false;

  constructor() { }

  ngOnInit(): void {
  }

  navbarToggle() {
    this.navbarCollapsed = !this.navbarCollapsed;
  }

}
