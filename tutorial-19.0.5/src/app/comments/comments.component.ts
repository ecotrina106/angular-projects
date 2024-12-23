import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  imports: [NgOptimizedImage],
  template: `
    <h3>Comentarios</h3>
    <img ngSrc="https://img2.rtve.es/i/?w=1600&i=1614352806474.png" alt="meme" width="32" height="32"  priority>
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
