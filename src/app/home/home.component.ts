import {Component, Inject, OnInit} from '@angular/core';
import {UsersService, User} from '../services/users.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [
    UsersService
  ]
})
export class HomeComponent implements OnInit {

  public users: any[] = [];

  constructor(
    @Inject(UsersService) private usersService: UsersService,
    private router: Router
  ) {
    console.log('Home Component');
    
  }


  refreshUsers() {
    this.usersService.getAll().subscribe(value => {
      this.users = value.data;
    }, error => {
      console.log('error', error);
    });
  }

  ngOnInit() {
    this.usersService.getAll().subscribe(value => {
      this.users = value.data;
    }, error => {
      console.log('error', error);
    });
  }

}
