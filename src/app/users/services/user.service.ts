import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User[] = [
    {
      userId: '',
      userName: 'Diego',
      userRole: 'Admin',
      userEmail: 'contact@gmail.com',
      userContact: '0984239318',
    },
  ];

  private userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.user);

  constructor() {}

  // Método para obtener usuarios como Observable
  getUsers(): Observable<User[]> {
    return this.userSubject.asObservable();
  }

  // Método para agregar usuarios
  addUser(user: User): Observable<User[]> {
    this.user.push(user); // Agregar al arreglo local
    this.userSubject.next(this.user); // Emitir el nuevo valor
    return this.userSubject.asObservable(); // Retornar el Observable
  }
}
