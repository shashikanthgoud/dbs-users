import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserResolverService } from './resolver/user-resolver.service';
import { UsersDataResolverService } from './resolver/users-data-resolver.service';
import { CreateEditUserComponent } from './user/create-edit-user/create-edit-user.component';
import { UsersListComponent } from './user/users-list/users-list.component';


const routes: Routes = [
  {
    path: 'list',
    component: UsersListComponent,
    resolve: {
      users: UsersDataResolverService
    }
  },
  {
    path: 'create',
    component: CreateEditUserComponent
  },
  {
    path: 'edit/:id',
    component: CreateEditUserComponent,
    resolve: {
      user: UserResolverService
    }
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
