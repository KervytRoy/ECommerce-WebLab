import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent},
  { path: 'login', component: LoginComponent },
  { path: 'products-page', component: ProductsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
