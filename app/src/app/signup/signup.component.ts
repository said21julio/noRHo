import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProviderService } from '../provider.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public userForm = new FormControl('',[ Validators.required]);
  public mailForm = new FormControl('',[ Validators.required]);
  public passwordForm = new FormControl('',[ Validators.required]);

  constructor(private providerService: ProviderService,
              private _snackBar: MatSnackBar,
              private router:Router) { }

  ngOnInit(): void {
  }

  public signup(): void {
    this.providerService.signup({usuario : this.userForm.value, password: this.passwordForm.value, mail: this.mailForm.value}).subscribe(async () => {
      this.toast('Successful registration', 'success');
      this.router.navigate(['login']);
    }, (err) => {
      console.log(err);
      this.toast('User or mail already exists', 'error');
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
