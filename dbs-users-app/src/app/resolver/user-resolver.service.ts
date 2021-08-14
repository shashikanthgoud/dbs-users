import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';
import { IUser } from '../user/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<IUser>{

  constructor(private userService: UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IUser | Observable<IUser> | Promise<IUser> {
    const id = +route.paramMap.get('id');
    return this.userService.getUserById(id);
  }
}
