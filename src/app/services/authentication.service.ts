import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from '../models/login';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { environment } from './../../../src/environments/environment';
import { JwtAuth } from '../models/jwtAuth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  registerUrl = 'authmanagement/register';
  loginrUrl = 'authmanagement/login';
  weatherUrl = 'WeatherForecast';

  constructor(private http: HttpClient, private router: Router) {
    console.log('AuthenticationService instantiated');
  }

  public register(user: Register): Observable<JwtAuth> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<JwtAuth>(`${environment.authApiUrl}/${this.registerUrl}`, user, { headers });
  }

  public login(user: Login): Observable<JwtAuth> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<JwtAuth>(`${environment.authApiUrl}/${this.loginrUrl}`, user, { headers });
  }

  public isLoggedIn(): boolean {
    let jwt = localStorage.getItem('jwtToken');
    if (jwt != undefined && jwt != null && jwt) {
      return true;
    }
    else {
      return false;
    }
  }

  public logout(): void {
    localStorage.removeItem('jwtToken');
    this.router.navigate(['/']);
  }

}
