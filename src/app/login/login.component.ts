import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  constructor(private formBuilder: FormBuilder,private authService: AuthService, private tokenStorage: TokenStorageService,
    private router:Router) { 
    this.loginForm = formBuilder.group({
      
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
      
    });
  }

  
  ngOnInit() {
    
  }

login()
{
  this.authService.login(this.loginForm.value).subscribe(
    data => {
      console.log(data);
      this.authService.getUserDetail(data.email).subscribe(
        userData =>{
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(userData);
  
          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.goHome();
        }
      )
      
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
}

goHome() {
  this.router.navigate([""]);
}
  get f()
  {
    return this.loginForm.controls;
  }

}
