import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-home-page',
  imports: [CommentsComponent],
  templateUrl: './homePage.component.html',
  styleUrl: './homePage.component.css'
})
export class HomePageComponent {

}
