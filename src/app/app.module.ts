import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselModalComponent } from './components/carousel-modal/carousel-modal.component';
import { CardGroupsComponent } from './components/card-groups/card-groups.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarouselModalComponent,
    CardGroupsComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [Title],
  bootstrap: [AppComponent],
})
export class AppModule { }
