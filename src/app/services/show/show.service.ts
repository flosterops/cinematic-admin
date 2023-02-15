import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, getAuthHeaders } from '../../../utils/api';
import { ITheater } from '../theater/theater.service';
import { IMovie } from '../movie/movie.service';

export interface IShow {
  date: string;
  theater: ITheater;
  movie: IMovie;
}

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(private http: HttpClient) {}

  fetchShows() {
    return this.http.get(`${BASE_URL}/show`, { headers: getAuthHeaders() });
  }

  createShow(DTO: any) {
    return this.http.post(`${BASE_URL}/show`, DTO, {
      headers: getAuthHeaders(),
    });
  }

  getShow(id: string) {
    return this.http.get(`${BASE_URL}/show/get/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  updateShow(id: string, DTO: any) {
    return this.http.patch(`${BASE_URL}/show/update/${id}`, DTO, {
      headers: getAuthHeaders(),
    });
  }

  deleteShow(id: string) {
    return this.http.delete(`${BASE_URL}/show/delete/${id}`, {
      headers: getAuthHeaders(),
    });
  }
}
