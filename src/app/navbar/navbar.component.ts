import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import {ToastrService} from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  current = 'event';
  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService,private toastr: ToastrService,
    private authService : AuthService) { }

  ngOnInit() {
    this.authService.getLoginObservable().subscribe(isLoggedIn=>{
      this.isLoggedIn = isLoggedIn;
    })
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  logout() {
    this.tokenStorageService.signOut();
    this.toastr.success('','You have been logged out');
    this.authService.setIsLoggedOut();
   // window.location.reload();
  }
}
