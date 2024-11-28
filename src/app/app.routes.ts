import { Routes } from '@angular/router';
import { MainPageComponent } from './users/pages/main-page/main-page.component';
import { HomePageComponent } from './users/pages/home-page/home-page.component';
import { ProductsPageComponent } from './users/pages/products-page/products-page.component';
import { UserPageComponent } from './users/pages/user-page/user-page.component';

export const routes: Routes = [
    {
        path:'home',
        loadChildren:()=>import ('./users/side-bar.module').then(m=>m.SideBarModule)
    },
    {
        path:'**',
        redirectTo:'home/home'
    }
];
