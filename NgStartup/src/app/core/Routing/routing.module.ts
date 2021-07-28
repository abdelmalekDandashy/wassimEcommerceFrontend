import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { CanActivateThisRoute } from '../Guard/RouterGuard';
import { MenuComponent } from '../../components/menu/menu.component';
import { ProductComponent } from '../../components/Product/product.component';
import { CategoryComponent } from '../../components/Category/category.component';
import { User_accountComponent } from '../../components/User_account/user_account.component';


export const routes: Routes = [
  { path: 'menu', component: MenuComponent, canActivate: [CanActivateThisRoute] },
  { path: 'login', component: LoginComponent },
  { path: 'product', component: ProductComponent },
  { path: 'category', component: CategoryComponent },
  { path: 'userAccount', component: User_accountComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
