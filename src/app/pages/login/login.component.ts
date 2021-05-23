import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  username = "";
  password = "";

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }

  login() {
    if (this.username == 'ade' && this.password == 'superadmin1') {
      this.router.navigate(['/employee-list']);
    } else {
      this.openSnackBar('Incorrect username and password!', 'Dismiss');
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
