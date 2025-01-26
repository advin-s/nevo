import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';
import { TokenService } from '../services/auth/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public loginForm!:FormGroup
  public loginError!:string
  constructor(private authService:AuthService, private tokenService:TokenService, private router:Router){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit(){
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe({
      next:(res:any) => {
        this.tokenService.storeToken(res.accessToken)
        this.router.navigate(['welcome'],{replaceUrl:true})
        console.log(res);
      },
      error:(err) => {console.log(err.error.message); this.loginError = err.error.message; this.loginForm.reset() },
    })
  }
}
