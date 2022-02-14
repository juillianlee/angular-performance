import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { List } from 'immutable';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-list[users]',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-input (keyEnter)="addUser($event)"></app-input>
    <div
      class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg mt-10"
    >
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <tr *ngFor="let user of users; trackBy: trackByMethod">
            <td class="px-6 py-4 whitespace-nowrap">{{ user.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap">
              {{ getStatus(user.status)}}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class UserListComponent {
  @Input() users!: List<User>;
  @Output() add = new EventEmitter<string>();

  trackByMethod(_: number, user: User): number {
    return user.id;
  }

  addUser(name: string) {
    this.add.emit(name);
  }

  getStatus(status: number): string {
    switch (status) {
      case 1:
        return 'Ativo';
      case 2:
        return 'Inativo';
      case 3:
        return 'Não registrado';
      case 4:
        return 'Não completou o cadastro';
      case 5:
        return 'Novo registro';
      default:
        return 'Desconhecido';
    }
  }
}
