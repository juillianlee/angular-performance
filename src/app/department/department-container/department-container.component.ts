import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { List } from 'immutable';
import { Department } from 'src/app/model/department';

@Component({
  selector: 'app-department-container',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-input (keyEnter)="addDepartment($event)"></app-input>
    <app-department-list [departments]="departments"></app-department-list>
  `
})
export class DepartmentContainerComponent {
  @Output() add = new EventEmitter();
  @Input() departments!:  List<Department>;

  constructor() { }


  addDepartment(name: string) {
    this.add.emit(name);
  }
}
