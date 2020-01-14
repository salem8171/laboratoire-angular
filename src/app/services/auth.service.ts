import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8090/api/auth/';
const API_URL_USER='http://localhost:8090/api/membre';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      email: credentials.email,
      password: credentials.password
    }, httpOptions);
  }

  
  register(user,photo): Observable<any> {
    
    console.log(photo);
    return this.http.post(AUTH_API + 'signup', {
      cin:user.CIN,
      nom: user.FirstName,
      prenom:user.LastName,
      email: user.email,
      photo:photo.picByte,
      dateNaissance:new Date(user.DateNais.year+"-"+user.DateNais.month+"-"+user.DateNais.day),
      role:user.role,
      password: user.password
    }, httpOptions);
  }
  getUserDetail(email)
  {
    return this.http.get(API_URL_USER+'/search/email?email='+email);
  }

  upload(photo)
  {
    return this.http.post(AUTH_API+'upload',photo);
  }
}
