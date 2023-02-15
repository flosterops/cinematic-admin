import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TheaterService } from '../services/theater/theater.service';

@Component({
  selector: 'app-add-theater-form',
  templateUrl: './add-theater-form.component.html',
  styleUrls: ['./add-theater-form.component.scss'],
})
export class AddTheaterFormComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    number_of_seats: new FormControl(),
    list_of_features: new FormControl(''),
    number_of_rows: new FormControl(),
  });
  constructor(
    public dialogRef: MatDialogRef<AddTheaterFormComponent>,
    private theaterService: TheaterService
  ) {}

  ngOnInit(): void {
    if (this.form.controls.number_of_rows) {
      // @ts-ignore
      this.form.controls.number_of_rows.validator((control: any) => {
        if (!control.value) {
          return { number_of_rows: 'Should be not be empty' };
        }

        if (!this.form.controls.number_of_seats.value) {
          return { number_of_rows: 'Should be not be empty' };
        }

        const reducedClearly = !(
          this.form.controls.number_of_seats.value % control.value
        );

        if (!reducedClearly) {
          return { number_of_rows: 'Should have clear mod' };
        }

        return null;
      });
    }
  }

  onSubmit() {
    const name = this.form.controls.name.value as string;
    const number_of_seats = this.form.controls.number_of_seats.value as number;
    const list_of_features = this.form.controls.list_of_features
      .value as string;
    const number_of_rows = this.form.controls.number_of_rows.value as number;

    this.theaterService
      .createTheater({
        name,
        number_of_seats,
        list_of_features,
        number_of_rows,
      })
      .subscribe((res: any) => {
        if (res.done) {
          this.dialogRef.close();
        }
      });
  }
}
