import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

interface SignUpForm {
  email: FormControl<null | string>;
  password: FormControl<null | string>;
}

@Component({
  selector: 'app-auth-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: 'auth-sign-up.html',
  styleUrl: './auth-sign-up.component.css'
})
export default class AuthSignUpComponent {
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<SignUpForm>({
    email: this._formBuilder.control(null, [
      Validators.required,
      Validators.email,
    ]),
    password: this._formBuilder.control(null, [Validators.required]),
  });

  submit(){
    console.log(this.form.value);
  }
}
