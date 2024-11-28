import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-page',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {
  private fb=inject(FormBuilder)

  public myForm:FormGroup=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(4)]],
    userEmail:['',[Validators.required,Validators.minLength(4)]],
    userRole:['',[Validators.required]],
  })

  onSaveUser():void{
    console.log(this.myForm.value)
  }
}
