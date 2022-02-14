import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-input',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <input
      class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
      type="text"
      (keydown)="handleKey($event)"
    />
  `,
})
export class InputComponent implements OnInit {
  @Output() keyEnter = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  handleKey(event: any) {
    if (event.keyCode === 13) {
      this.keyEnter.emit(event.target.value);
      event.target.value = '';
    }
  }
}
