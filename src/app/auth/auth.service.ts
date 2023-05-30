import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tokenName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://localhost:4000/user'

  constructor(
    private http: HttpClient) { }

  signup(firstname: string, lastname: string, DOB: string,address: string,pcode: string, phone: string,username: string, pword: string) {
    const body = {
      firstname,
      lastname,
      DOB,
      address,
      pcode,
      phone,
      username,
      pword,
    }

    return this.http.post(this.url + '/register', body)
  }

  signin(username: string, pword: string) {
    const body = {
      username,
      pword,
    }
    return this.http.post(this.url + '/login', body)
    console.log(body);
  }  
}

