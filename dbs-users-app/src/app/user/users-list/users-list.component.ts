import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../model/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users:IUser[] = [];
  constructor(private route: ActivatedRoute) {
    this.users = this.route.snapshot.data['users'];
  }

  ngOnInit(): void {
  }

}
