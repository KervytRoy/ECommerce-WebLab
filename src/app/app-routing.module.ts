import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RegisterComponent } from './authentication/register/register.component';
import { AuthorizationGuard } from './guards/authorization.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [AuthorizationGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthorizationGuard] },
  { path: 'products-page', component: ProductsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
