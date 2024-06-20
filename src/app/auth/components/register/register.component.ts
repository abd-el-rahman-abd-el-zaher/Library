import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder, private authService: AuthService) {}
  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      gender: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      repeatedPassword: [null, [Validators.required]],
    });
  }

  register() {
    let body = { ...this.form.value };
    body.token = '12345678910';
    this.authService.register(body);
  }
}
