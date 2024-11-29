import { Component } from '@angular/core';
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { HomePageComponent } from "../home-page/home-page.component";
import { RouterOutlet } from '@angular/router';
import { User } from '../../interfaces/User.interface';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NavBarComponent, HomePageComponent,RouterOutlet],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  saveUser(user:User):void{
    console.log('desde el padre',user)
  }

}
