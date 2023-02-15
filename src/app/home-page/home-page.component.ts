import { Component, OnInit } from '@angular/core';
import { TheaterService } from '../services/theater/theater.service';
import { MovieService } from '../services/movie/movie.service';
import { ShowService } from '../services/show/show.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  theaters: any[] = [];
  movies: any[] = [];

  shows: any = [];

  constructor(
    private theaterService: TheaterService,
    private movieService: MovieService,
    private showService: ShowService
  ) {}

  ngOnInit(): void {
    this.fetchTheaters();
    this.fetchMovies();
    this.fetchShows();
  }

  fetchMovies() {
    this.movieService.fetchMovies().subscribe((res: any) => {
      if (!res.done) {
        return;
      }

      this.movies = res.movies.map((item: any, index: number) => ({
        ...item,
        position: index + 1,
      }));
    });
  }

  fetchTheaters() {
    this.theaterService.fetchTheaters().subscribe((res: any) => {
      if (!res.done) {
        return;
      }

      this.theaters = res.theaters.map((item: any, index: number) => ({
        ...item,
        position: index + 1,
      }));
    });
  }

  fetchShows() {
    this.showService.fetchShows().subscribe((res: any) => {
      if (!res.done) {
        return;
      }

      this.shows = res.shows.map((item: any, index: number) => {
        const date = new Date(item.date);
        return {
          id: item.id,
          position: index + 1,
          date: `${date.getDate()}.${date.getUTCMonth()}.${date.getFullYear()}`,
          time: `${date.getHours()}:${date.getMinutes()}`,
          theaterName: item.Theater.name,
          movieName: item.Movie.name,
          price: item.price,
        };
      });
    });
  }
}
