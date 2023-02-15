import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { IMovie } from '../services/movie/movie.service';
import { AddMovieFormComponent } from '../add-movie-form/add-movie-form.component';
import { MovieInfoComponent } from '../movie-info/movie-info.component';

interface IDataSource extends IMovie {
  position: number;
}

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss'],
})
export class MovieTableComponent implements OnInit {
  @Input() movies: any[] = [];
  @Output() onAdd = new EventEmitter();
  dataSource = new MatTableDataSource<IDataSource>();
  displayedColumns: string[] = [
    'position',
    'name',
    'description',
    'duration',
    'age',
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.movies.currentValue) {
      this.dataSource.data = changes?.movies.currentValue;
    }
  }

  openAddMovieDialog(): void {
    this.dialog
      .open(AddMovieFormComponent, {
        height: '500px',
        width: '700px',
      })
      .afterClosed()
      .subscribe(() => {
        this.onAdd.emit();
      });
  }

  openMovieInfoDialog(id: string): void {
    this.dialog
      .open(MovieInfoComponent, {
        height: '500px',
        width: '700px',
        data: { id },
      })
      .afterClosed()
      .subscribe(() => {
        this.onAdd.emit();
      });
  }
}
