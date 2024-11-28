import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';

const routes:Routes=[
  {
    path:'',
    component:MainPageComponent,
    children:[
      {path:'home',component:HomePageComponent},
      {path:'users',component:UserPageComponent},
      {path:'list-users',component:ListUsersComponent},
      {path:'products',component:ProductsPageComponent},
    ]
  },
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class SideBarModule { }
