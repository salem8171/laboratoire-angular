import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:8090/api/membre"

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http: HttpClient) { }

  getMember(id: Number) {
    return this.http.get(URL + '/' + id);
  }
}
