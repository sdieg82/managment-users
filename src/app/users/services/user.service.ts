import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interfaces/User.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user: User[] = [
    {
      userId: '85fc822a-1eca-403b-a68a-7b543vc6f3f7',
      userName: 'Diego',
      userRole: 'Admin',
      userEmail: 'contact@gmail.com',
      userContact: '0984239318',
    },
    {
      userId: '85fc833a-1eca-409b-a68a-7b543cc6faf7',
      userName: 'Andrea',
      userRole: 'Viewer',
      userEmail: 'contact@gmail.com',
      userContact: '0984239318',
    },
  ];

  private userSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.user);

  constructor() {}

  public _users:User[]=[]

  get usersList(){
    return [...this.user]
  }

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
  deleteUserById(id:string):User[]{
    if(!id) return[]
    this._users=this.user.filter((e)=>e.userId!==id)
    return this._users
  }
}
