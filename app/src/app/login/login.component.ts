import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userForm = new FormControl('',[ Validators.required]);
  public passwordForm = new FormControl('',[ Validators.required]);

  constructor(private providerService: ProviderService,
              private _snackBar: MatSnackBar,
              private router:Router) { }

  ngOnInit(): void {
  }

  public login() {
    this.providerService.login({usuario : this.userForm.value, password: this.passwordForm.value }).subscribe(async () => {
      this.router.navigate(['news']);
    }, (err) => {
      console.log(err);
      this.toast('Usuario o password Incorrecto', 'error');
    });
  }

  private toast(mensaje: string, clase: string) {
    this._snackBar.open(mensaje, '', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3 * 1000,
      panelClass: [clase]
    });
  }

}
