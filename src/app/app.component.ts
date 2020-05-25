import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public constructor(private titleService: Title) { }

  public setTitle() {
    const title = 'Empresa de Negocios Nacionales';
    this.titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.setTitle();
  }
}
