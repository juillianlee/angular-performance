import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { StatusUserPipe } from './user/status-user.pipe';
import { CountryFlagPipe } from './department/country-flag.pipe';
import { InputComponent } from './shared/input/input.component';
import { UserContainerComponent } from './user/user-container/user-container.component';
import { DepartmentContainerComponent } from './department/department-container/department-container.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    DepartmentListComponent,
    StatusUserPipe,
    CountryFlagPipe,
    InputComponent,
    UserContainerComponent,
    DepartmentContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
