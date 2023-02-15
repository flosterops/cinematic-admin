import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, getAuthHeaders } from '../../../utils/api';

export interface IMovie {
  name: string;
  description: string;
  duration: number;
  age: number;
}

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  fetchMovies() {
    return this.http.get(`${BASE_URL}/movie`, { headers: getAuthHeaders() });
  }

  createMovie(DTO: any) {
    return this.http.post(`${BASE_URL}/movie`, DTO, {
      headers: getAuthHeaders(),
    });
  }

  getMovie(id: string) {
    return this.http.get(`${BASE_URL}/movie/get/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  updateMovie(id: string, DTO: any) {
    return this.http.patch(`${BASE_URL}/movie/update/${id}`, DTO, {
      headers: getAuthHeaders(),
    });
  }

  deleteMovie(id: string) {
    return this.http.delete(`${BASE_URL}/movie/delete/${id}`, {
      headers: getAuthHeaders(),
    });
  }
}
