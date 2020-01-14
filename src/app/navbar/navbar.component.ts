import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  current = 'home';
  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService,private toastr: ToastrService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
  }

  logout() {
    this.tokenStorageService.signOut();
    this.toastr.success('','You have been logged out');
    
    window.location.reload();
  }
}
