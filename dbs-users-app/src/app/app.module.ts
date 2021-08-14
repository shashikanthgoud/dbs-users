import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEditUserComponent } from './user/create-edit-user/create-edit-user.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { UserCardComponent } from './user/user-card/user-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEditUserComponent,
    UsersListComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
