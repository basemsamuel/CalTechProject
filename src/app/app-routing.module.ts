import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ClientComponent } from './client/client.component';
import { ClientschedulingComponent } from './clientscheduling/clientscheduling.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'client', component: ClientComponent},
  {path:'clientscheduling', component: ClientschedulingComponent},
  {path:'products', component: ProductsComponent},
  {path:'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
