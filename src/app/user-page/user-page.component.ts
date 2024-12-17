import { Component } from '@angular/core';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-page',
  imports: [UserComponent],
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

}
