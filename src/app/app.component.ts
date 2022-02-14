import { Component } from '@angular/core';
import { List } from 'immutable';
import { LIST_OF_DEPARTMENTS } from './data/departments';
import { LIST_OF_USERS } from './data/users';
import { Department } from './model/department';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  users: List<User> = List<User>(LIST_OF_USERS);
  departments: List<Department> = List<Department>(LIST_OF_DEPARTMENTS);

  addUser(name: string) {
    const nextId: number = this.users.reduce((prev, curr) => {
      if (curr.id > prev) {
        return curr.id + 1;
      }
      return prev;
    }, 0);

    this.users = this.users.push({
      id: nextId,
      name,
      status: 5,
    });
  }

  addDepartment(name: string) {
    const nextId: number = this.departments.reduce((prev, curr) => {
      if (curr.id > prev) {
        return curr.id + 1;
      }
      return prev;
    }, 0);

    this.departments = this.departments.push({
      id: nextId,
      name,
      country: 'Brazil',
    });
  }
}
