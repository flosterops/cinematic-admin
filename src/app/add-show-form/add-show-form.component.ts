import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ShowService } from '../services/show/show.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-show-form',
  templateUrl: './add-show-form.component.html',
  styleUrls: ['./add-show-form.component.scss'],
})
export class AddShowFormComponent implements OnInit {
  form = new FormGroup({
    date: new FormControl(),
    time: new FormControl(),
    theater: new FormControl(),
    movie: new FormControl(),
    price: new FormControl(),
  });
  constructor(
    public dialogRef: MatDialogRef<AddShowFormComponent>,
    private showService: ShowService,
    @Inject(MAT_DIALOG_DATA) public data: { movies: any[]; theaters: any[] }
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    const [hours, minutes] = this.form.controls.time.value.split(':');
    const date = this.form.controls.date.value.setHours(hours, minutes, 0);
    const theaterId = this.form.controls.theater.value;
    const movieId = this.form.controls.movie.value;
    const price = Number(this.form.controls.price.value);

    const DTO = {
      date,
      theaterId,
      movieId,
      price,
    };

    console.log(DTO, 'DTO');

    this.showService.createShow(DTO).subscribe((res: any) => {
      if (!res.done) {
        return;
      }

      this.dialogRef.close();
    });
  }
}
