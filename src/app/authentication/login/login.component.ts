import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PersonalService, TokensService } from '../../api/services';
import { TokensGetToken$Params } from '../../api/fn/tokens/tokens-get-token';
import { TokenRequest, TokenResponse } from '../../api/models';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private tokensService: TokensService,
    private snackBar: MatSnackBar,
    private personalService: PersonalService
  ) { }
  hide = true;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  login() {
    if (this.emailFormControl.valid && this.passwordFormControl.valid) {
      const params: TokensGetToken$Params = {
        tenant: 'root',
        body: {
          email: this.emailFormControl.value,
          password: this.passwordFormControl.value
        } as TokenRequest
      };

      this.tokensService.tokensGetToken(params).subscribe(
        (response: TokenResponse) => {
          if (response.token && response.refreshToken && response.refreshTokenExpiryTime) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('refreshToken', response.refreshToken);
            localStorage.setItem('refreshTokenExpiryTime', response.refreshTokenExpiryTime);

            this.personalService.personalGetPermissions().subscribe(
              (response: Array<string>) => {
                console.log(response);
              }
            );

          } else {
            this.snackBar.open('Datos incorrectos', 'Cerrar', {
              duration: 2000,
            });
          }
        },
        (error) => {
          this.snackBar.open('Datos incorrectos', 'Cerrar', {
            duration: 2000,
          });
        }
      );
    }
  }
}
