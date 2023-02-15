import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL, getAuthHeaders } from '../../../utils/api';

export interface ITheater {
  name: string;
  number_of_seats: number;
  list_of_features: string;
}

@Injectable({
  providedIn: 'root',
})
export class TheaterService {
  constructor(private http: HttpClient) {}

  fetchTheaters() {
    return this.http.get(`${BASE_URL}/theater`, {
      headers: getAuthHeaders(),
    });
  }

  createTheater(DTO: any) {
    return this.http.post(`${BASE_URL}/theater`, DTO, {
      headers: getAuthHeaders(),
    });
  }

  getTheater(id: string) {
    return this.http.get(`${BASE_URL}/theater/get/${id}`, {
      headers: getAuthHeaders(),
    });
  }

  updateTheater(id: string, theater: ITheater) {
    return this.http.patch(`${BASE_URL}/theater/update/${id}`, theater, {
      headers: getAuthHeaders(),
    });
  }

  deleteTheater(id: string) {
    return this.http.delete(`${BASE_URL}/theater/delete/${id}`, {
      headers: getAuthHeaders(),
    });
  }
}
