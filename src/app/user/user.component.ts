import { Component, inject } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { CarService } from '../car.service';
import { LowerCasePipe } from '@angular/common';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-user',
  imports: [GamesComponent,FormsModule,ReactiveFormsModule,LowerCasePipe,ReversePipe],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = '';
  isLoggedIn = false;
  favGame = '';
  display=''

  constructor(private carService: CarService){
    this.display= this.carService.getCars().join(' ')
  }

  emailForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  })

  greet(){
    alert('Hola!!')
  }

  logUser(){
    this.isLoggedIn = true
  }
  getFavorite(gameName: string){
    this.favGame = gameName;
  }
  handleSubmitEmailForm(){
    alert("Nuevo correo: "+this.emailForm.value.email)
  }
}
