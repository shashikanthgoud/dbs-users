import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';
import { IUser } from '../model/user.model';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements OnInit {
  user:IUser;
  formType = 'Create';
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService,
    private router: Router) { 
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(!id) {
      this.user = {
        id: null,
        name: null,
        email: null,
        phone: null,
        website: null
      };
    } else {
      this.formType = 'Edit';
      this.user = this.activatedRoute.snapshot.data['user'];
    }
  }

  ngOnInit(): void {
  }

  saveUser() {
    if(this.formType === 'Create') {
      this.userService.createUser(this.user).pipe(take(1)).subscribe((response) => {
        this.router.navigate(['/list']);
      });
    } else {
      this.userService.updateUser(this.user).pipe(take(1)).subscribe((response) => {
        this.router.navigate(['/list']);
      });
    }
  }
}
