import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'product', loadChildren: () => import ('./product/product.module').then(m => m.ProductModule )},
      { path: 'category', loadChildren: () => import ('./category/category.module').then(m => m.CategoryModule )},
      { path: 'user', loadChildren: () => import ('./user/user.module').then(m => m.UserModule )}
    ]
  },

  // load the child module authmodule
  { path: 'auth', loadChildren: () => import ('./auth/auth.module').then(m => m.AuthModule )}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
