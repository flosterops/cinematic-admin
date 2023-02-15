import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-add-movie-form',
  templateUrl: './add-movie-form.component.html',
  styleUrls: ['./add-movie-form.component.scss'],
})
export class AddMovieFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    duration: new FormControl(),
    age: new FormControl(),
  });
  constructor(
    public dialogRef: MatDialogRef<AddMovieFormComponent>,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const name = this.form.controls.name.value as string;
    const description = this.form.controls.description.value as string;
    const duration = this.form.controls.duration.value as number;
    const age = this.form.controls.age.value as number;

    this.movieService
      .createMovie({
        name,
        description,
        duration,
        age,
      })
      .subscribe((res: any) => {
        if (res.done) {
          this.dialogRef.close();
        }
      });
  }
}
