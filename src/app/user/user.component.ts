import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [GamesComponent,FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = '';
  isLoggedIn = false;
  favGame = '';

  greet(){
    alert('Hola!!')
  }

  logUser(){
    this.isLoggedIn = true
  }
  getFavorite(gameName: string){
    this.favGame = gameName;
  }
}
