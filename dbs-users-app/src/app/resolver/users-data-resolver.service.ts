import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from '../user/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersDataResolverService implements Resolve<IUser> {

  constructor(private userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
    return this.userService.getUsers();
  }
}
