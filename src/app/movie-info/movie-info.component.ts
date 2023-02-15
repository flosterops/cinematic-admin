import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IMovie, MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss'],
})
export class MovieInfoComponent implements OnInit {
  movie: IMovie = {} as IMovie;
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    duration: new FormControl(),
    age: new FormControl(),
  });
  constructor(
    public dialogRef: MatDialogRef<MovieInfoComponent>,
    private movieService: MovieService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) {}

  ngOnInit(): void {
    this.movieService.getMovie(this.data.id).subscribe((res: any) => {
      this.movie = res.movie;
      this.form.controls.name.setValue(this.movie.name);
      this.form.controls.description.setValue(this.movie.description);
      this.form.controls.duration.setValue(this.movie.duration);
      this.form.controls.age.setValue(this.movie.age);
    });
  }

  onSubmit() {
    const name = this.form.controls.name.value;
    const description = this.form.controls.description.value;
    const duration = Number(this.form.controls.duration.value);
    const age = Number(this.form.controls.age.value);

    this.movieService
      .updateMovie(this.data.id, {
        name,
        description,
        duration,
        age,
      })
      .subscribe((res: any) => {
        if (!res.done) {
          return;
        }

        this.closeDialog();
      });
  }

  deleteMovie() {
    this.movieService.deleteMovie(this.data.id).subscribe((res: any) => {
      if (!res.done) {
        return;
      }

      this.closeDialog();
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
