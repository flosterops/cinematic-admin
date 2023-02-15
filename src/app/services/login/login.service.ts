import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, getAuthHeaders } from '../../../utils/api';
import { getLsToken } from '../../../utils/ls';

export interface ILoginResponse {
  expiresIn: number;
  token: string;
  tokenType: 'Bearer';
}

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post<ILoginResponse>(`${BASE_URL}/user/sign-in`, {
      email,
      password,
    });
  }

  auth() {
    const token = getLsToken();
    return this.http.get(`${BASE_URL}/user/me`, {
      headers: getAuthHeaders(),
    });
  }
}
