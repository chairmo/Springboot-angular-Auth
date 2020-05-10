import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_BASE_URL } from 'src/app/constants';

export class User {
  constructor(public id: number, 
              public name: string,
              public email: string,
              public imageUrl: string,
              public emailVerified: boolean) {}
}

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.http.get<User>(API_BASE_URL + '/user/me');
  }
}
