import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService, User} from '../services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    UsersService
  ]
})
export class FormComponent implements OnInit {
  private id = null;
  private pageTitle = 'Create User';
  private user = new User();
  private isEdit = false;
  constructor(
    @Inject(UsersService) private usersService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    
  }

  onSubmit() {
   
      this.usersService.add(this.user).subscribe(value => {
        this.router.navigate(['/']);
      });
    }
  

  ngOnInit() {
  }

}
