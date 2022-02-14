import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Department } from '../../model/department';
import { List } from 'immutable';
import { LIST_OF_FLAGS } from 'src/app/data/flags';

@Component({
  selector: 'app-department-list[departments]',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-input (keyEnter)="addDepartment($event)"></app-input>
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
          <tr *ngFor="let department of departments; trackBy: trackByMethod">
            <td class="px-6 py-4 whitespace-nowrap">{{ department.name }}</td>
            <td class="px-6 py-4 whitespace-nowrap ">
              {{ department.country }}
              <img
                [src]="getFlag(department.country)"
                width="16"
                height="12"
                [alt]="department.country"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
})
export class DepartmentListComponent {
  @Input() departments!: List<Department>;
  @Output() add = new EventEmitter<string>();

  trackByMethod(_: number, department: Department): number {
    return department.id;
  }

  addDepartment(name: string) {
    this.add.emit(name);
  }

  getFlag(country: string): string | null {
    const flag = Object.entries(LIST_OF_FLAGS).filter(([_, value]) => {
      return value === country;
    })[0];

    return flag ? `https://flagcdn.com/16x12/${flag[0]}.png` : null;
  }

}
