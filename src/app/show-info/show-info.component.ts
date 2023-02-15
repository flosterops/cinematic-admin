import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ShowService } from '../services/show/show.service';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.scss'],
})
export class ShowInfoComponent {
  show: any = {} as any;
  time = '';
  form = new FormGroup({
    date: new FormControl(),
    time: new FormControl(),
    theater: new FormControl(),
    movie: new FormControl(),
    price: new FormControl(),
  });
  constructor(
    public dialogRef: MatDialogRef<ShowInfoComponent>,
    private showService: ShowService,
    @Inject(MAT_DIALOG_DATA)
    public data: { id: string; theaters: any[]; movies: any[] }
  ) {}

  ngOnInit(): void {
    this.showService.getShow(this.data.id).subscribe((res: any) => {
      this.show = res.show;
      const date = new Date(this.show.date);
      this.form.controls.date.setValue(new Date(this.show.date));
      this.time = `${date.getHours()}:${date.getMinutes()}`;
      this.form.controls.theater.setValue(this.show.Theater.id);
      this.form.controls.movie.setValue(this.show.Movie.id);
      this.form.controls.price.setValue(this.show.price);
    });

    console.log(this.form.controls);
  }

  onSubmit() {
    const timeToUpdate = this.form.controls.time.value || this.time;
    const [hours, minutes] = timeToUpdate.split(':');
    const date = this.form.controls.date.value.setHours(hours, minutes, 0);
    const theaterId = this.form.controls.theater.value;
    const movieId = this.form.controls.movie.value;
    const price = Number(this.form.controls.price.value);

    this.showService
      .updateShow(this.data.id, {
        date,
        theaterId,
        movieId,
        price,
      })
      .subscribe((res: any) => {
        if (!res.done) {
          return;
        }

        this.closeDialog();
      });
  }

  deleteTheater() {
    this.showService.deleteShow(this.data.id).subscribe((res: any) => {
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
