import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/User.interface';
import { CommonModule } from '@angular/common';
import { firstValueFrom, Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.css',
})
export class ListUsersComponent implements OnInit {
  public user: User[] = [];

  constructor(private userService: UserService) {}

  get users() {
    return [...this.userService.usersList];
  }

  ngOnInit(): void {
    this.getUsers();
  }

  async getUsers(): Promise<void> {
    try {
      const users = await firstValueFrom(this.userService.getUsers());
      this.user = users;
      // console.log('Usuarios desde el servicio:', this.user);
    } catch (err) {
      console.error('Error al obtener usuarios:', err);
    }
  }
  deleteUserList(id: string): void {
    Swal.fire({
      title: 'Está seguro ?',
      text: 'No podrá revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        const deletedUser = this.userService.deleteUserById(id);
        this.user = deletedUser;
        Swal.fire({
          title: 'Eliminado!',
          text: 'Usuario eliminado exitosamente!',
          icon: 'success',
        });
      }
    });
  }
}
