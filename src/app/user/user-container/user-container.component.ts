import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { List } from 'immutable';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-container',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-input (keyEnter)="addUser($event)"></app-input>
    <app-user-list [users]="users"></app-user-list>
  `,
})
export class UserContainerComponent {
  @Output() add = new EventEmitter<string>();
  @Input() users!: List<User>;

  addUser(name: string) {
    this.add.emit(name);
  }

}
