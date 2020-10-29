import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private datasource: RestDataSource) { }

  // 3 Methods
  // Authenticate method will recieve User / Admin credentials
  authenticate(username: string, password: string): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  // Authenticated property read(getter) only
  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }

  // Clear / remove all tokens from data source
  clear(): void {
    this.datasource.auth_token = null;
  }
}
