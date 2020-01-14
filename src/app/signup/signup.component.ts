import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registreForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  selectedFile: File;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastr: ToastrService,
    private route: Router) {
    this.registreForm = formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      CIN: ['', Validators.required],
      DateNais: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      photo:[''],
      password: ['', Validators.required],
      role: ['', Validators.required]

    });
  }

  ngOnInit() {
  }
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }
  registre() {
    console.log(this.selectedFile);
    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    let uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    console.log(uploadImageData.getAll('imageFile'));
    
    console.log(this.registreForm.value);
    this.authService.upload(uploadImageData).subscribe(image =>{

      this.authService.register(this.registreForm.value,image).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          this.toastr.success('', data.message);
          this.route.navigate(["/login"]);
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
          this.toastr.error('', this.errorMessage);
        }
      );
    })
    
  }
}
