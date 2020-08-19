import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  authenticate(form: NgForm): void {
    if (form.valid) {
      // perform authentication
      this.router.navigateByUrl('/admin/main');
    } else {
      this.errorMessage = 'Wrong credentials';
    }
  }
}
