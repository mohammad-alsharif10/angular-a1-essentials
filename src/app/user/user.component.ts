import {Component, computed, EventEmitter, Input, Output, signal} from '@angular/core';
import {DUMMY_USERS} from "./dummy-users";
import {UserModel} from "./user.model";


const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  @Input({ required: true }) user!: UserModel;
  @Output() select = new EventEmitter();
  @Input({required: true}) selected!: boolean;


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
