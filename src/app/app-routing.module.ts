import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutUsComponent } from './about-us/about-us.component';


const routes: Routes = [
  // { path: '', redirectTo: '/about-us', pathMatch: 'full' },
  { path: '', component: AboutUsComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'about-us', component: AboutUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  ProductListComponent,
  AboutUsComponent,
];
