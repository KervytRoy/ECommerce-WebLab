import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from '../../api/services';
import { FormControl, Validators } from '@angular/forms';
import { UsersCreate$Params } from '../../api/fn/users/users-create';
import { CreateUserRequest } from '../../api/models';
import { UsersSelfRegister$Params } from '../../api/fn/users/users-self-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(
    private snackBar: MatSnackBar,
    private usersService: UsersService
  ) { }

  hide = true;

  usernameFormControl = new FormControl('', [Validators.required]);
  firstNameFormControl = new FormControl('', [Validators.required]);
  lastNameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required]);
  confirmPasswordFormControl = new FormControl('', [Validators.required]);

  formFields = [
    { label: 'Nombre de Usuario', type: 'text', control: this.usernameFormControl, errorRequired: 'El nombre de usuario es requerido' },
    { label: 'Nombre', type: 'text', control: this.firstNameFormControl, errorRequired: 'El nombre es requerido' },
    { label: 'Apellido', type: 'text', control: this.lastNameFormControl, errorRequired: 'El apellido es requerido' },
    { label: 'Email', type: 'email', control: this.emailFormControl, errorRequired: 'El email es requerido', errorEmail: 'Por favor ingresa un email válido' },
    { label: 'Contraseña', type: this.hide ? 'password' : 'text', control: this.passwordFormControl, errorRequired: 'La contraseña es requerida' },
    { label: 'Confirmar Contraseña', type: this.hide ? 'password' : 'text', control: this.confirmPasswordFormControl, errorRequired: 'La confirmación de la contraseña es requerida' }
  ];

  register() {
    if (this.emailFormControl.valid &&
      this.passwordFormControl.valid &&
      this.usernameFormControl.valid &&
      this.firstNameFormControl.valid &&
      this.lastNameFormControl.valid &&
      this.confirmPasswordFormControl.valid) {
      if (this.passwordFormControl.value !== this.confirmPasswordFormControl.value) {
        this.snackBar.open('Las contraseñas no coinciden', 'Cerrar', {
          duration: 3000,
        });
      } else {
        const params: UsersSelfRegister$Params = {
          tenant: "root",
          body: {
            userName: this.usernameFormControl.value,
            firstName: this.firstNameFormControl.value,
            lastName: this.lastNameFormControl.value,
            email: this.emailFormControl.value,
            password: this.passwordFormControl.value,
            confirmPassword: this.confirmPasswordFormControl.value,
          } as CreateUserRequest
        };

        this.usersService.usersSelfRegister(params).subscribe({
          next: () => {
            this.snackBar.open('Registro exitoso', 'Cerrar', {
              duration: 3000,
            });
            // Lógica adicional después de un registro exitoso, como redirigir al usuario
          },
          error: (err) => {
            this.snackBar.open(`Error: ${err.message}`, 'Cerrar', {
              duration: 3000,
            });
          }
        });
      }
    } else {
      this.snackBar.open('Por favor complete todos los campos correctamente', 'Cerrar', {
        duration: 3000,
      });
    }
  }
}
