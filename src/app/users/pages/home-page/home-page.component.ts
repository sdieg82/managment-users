import { Component } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from '../list-users/list-users.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { ProductsPageComponent } from '../products-page/products-page.component';
import { UserPageComponent } from '../user-page/user-page.component';


const routes:Routes=[
  {
    path:'/home/users',
    component:ProductsPageComponent,
  },
]

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  
}
