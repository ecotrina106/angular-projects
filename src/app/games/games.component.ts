import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  imports: [],
  template: `
  <h3> Los juegos favoritos de {{username}} </h3>
    <ul>
      @for(game of games; track game.id){
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavEvent = new EventEmitter<string>();

  games=[
    {
      id:1,
      name: 'Mario Kart'
    },
    {
      id:2,
      name: 'Pro Evolution Soccer 2021'
    },
    {
      id:3,
      name: 'Half-life'
    }
  ]

  fav(gameSelected: string){
    this.addFavEvent.emit(gameSelected)
  }

}
