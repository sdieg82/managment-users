import { Component } from '@angular/core';
import { NavBarComponent } from "../../shared/components/nav-bar/nav-bar.component";
import { HomePageComponent } from "../home-page/home-page.component";

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [NavBarComponent, HomePageComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

}
