import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { User } from '../../interfaces/User.interface';
import { v4 as uuid } from 'uuid';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  constructor(
    private userService:UserService
  ){}

  private fb=inject(FormBuilder)

  @Output()
  public userEmit:EventEmitter<User>=new EventEmitter()
  
  public myForm:FormGroup=this.fb.group({
    userId:[uuid()],
    userName:['',[Validators.required,Validators.minLength(4)]],
    userEmail:['',[Validators.required,Validators.minLength(4)]],
    userRole:['',[Validators.required]],
    userContact:['',[Validators.required]],
  })

  onSaveUser(): void {
    Swal.fire({
      title: "¿Estás seguro de registrar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, registrarlo",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamada al servicio para guardar el usuario
        this.userService.addUser(this.myForm.value).subscribe(
          () => {
            Swal.fire({
              title: "¡Registrado!",
              text: "El usuario ha sido registrado con éxito.",
              icon: "success",
            });
          },
          () => {
            Swal.fire({
              title: "Error",
              text: "Hubo un problema al registrar el usuario.",
              icon: "error",
            });
          }
        );
      }
    });
  }
}
