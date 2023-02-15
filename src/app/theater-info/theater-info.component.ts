import { Component, Inject, OnInit } from '@angular/core';
import { ITheater, TheaterService } from '../services/theater/theater.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-theater-info',
  templateUrl: './theater-info.component.html',
  styleUrls: ['./theater-info.component.scss'],
})
export class TheaterInfoComponent implements OnInit {
  theater: ITheater = {} as ITheater;
  form = new FormGroup({
    name: new FormControl(''),
    number_of_seats: new FormControl(),
    list_of_features: new FormControl(''),
  });
  constructor(
    public dialogRef: MatDialogRef<TheaterInfoComponent>,
    private theaterService: TheaterService,
    @Inject(MAT_DIALOG_DATA) public data: { id: string }
  ) {}

  ngOnInit(): void {
    this.theaterService.getTheater(this.data.id).subscribe((res: any) => {
      this.theater = res.theater;
      this.form.controls.name.setValue(this.theater.name);
      this.form.controls.number_of_seats.setValue(this.theater.number_of_seats);
      this.form.controls.list_of_features.setValue(
        this.theater.list_of_features
      );
    });
  }

  onSubmit() {
    const name = this.form.controls.name.value as string;
    const number_of_seats = this.form.controls.number_of_seats.value as number;
    const list_of_features = this.form.controls.list_of_features
      .value as string;

    this.theaterService
      .updateTheater(this.data.id, {
        name,
        number_of_seats,
        list_of_features,
      })
      .subscribe((res: any) => {
        if (!res.done) {
          return;
        }

        this.closeDialog();
      });
  }

  deleteTheater() {
    this.theaterService.deleteTheater(this.data.id).subscribe((res: any) => {
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
