import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [],
  template: `
    <h3>Comentarios</h3>
    <img src="https://img2.rtve.es/i/?w=1600&i=1614352806474.png" alt="meme">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      Voluptatum cupiditate itaque eligendi sed! Recusandae porro 
      nostrum provident cum ducimus consectetur repellendus minus, 
      totam ullam quisquam error numquam libero accusamus sed.
    </p>
  `,
  styles: `
  img{
    width: 100%;
    height:auto;
  }
  `
})
export class CommentsComponent {

}
