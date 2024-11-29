import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User.interface';
import { CommonModule } from '@angular/common';
import { firstValueFrom, Observable } from 'rxjs';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css'
})
export class ListUsersComponent implements OnInit {

  public user:User[]=[]

  constructor(
    private userService:UserService
  ){}

  ngOnInit(): void {
    this.getUsers()
  }

  async getUsers(): Promise<void> {
    try {
      const users = await firstValueFrom(this.userService.getUsers());
      this.user = users;
      console.log('Usuarios desde el servicio:', this.user);
    } catch (err) {
      console.error('Error al obtener usuarios:', err);
    }
  }
  
  
}
