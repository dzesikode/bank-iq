import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductManageComponent } from './components/product-manage/product-manage.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  { path: 'api/products', component: ProductListComponent },
  { path: 'api/manage/add', component: ProductAddComponent },
  { path: 'api/manage/:productSlug', component: ProductDetailComponent },
  { path: 'api/manage', component: ProductManageComponent },
  { path: 'api/login', component: LoginComponent },
  { path: 'api/register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
