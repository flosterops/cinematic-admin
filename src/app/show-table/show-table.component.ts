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
import { IShow } from '../services/show/show.service';
import { AddShowFormComponent } from '../add-show-form/add-show-form.component';
import { ShowInfoComponent } from '../show-info/show-info.component';

interface IDataSource extends Omit<IShow, 'theater' | 'movie'> {
  position: number;
}

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss'],
})
export class ShowTableComponent implements OnInit {
  @Input() shows: any[] = [];
  @Input() movies: any[] = [];
  @Input() theaters: any[] = [];
  @Output() onAdd = new EventEmitter();
  dataSource = new MatTableDataSource<IDataSource>();
  displayedColumns: string[] = [
    'position',
    'date',
    'time',
    'theaterName',
    'movieName',
    'price',
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.shows?.currentValue) {
      this.dataSource.data = changes?.shows.currentValue;
    }
  }

  openInfoShowDialog(id: string) {
    this.dialog
      .open(ShowInfoComponent, {
        height: '550px',
        width: '700px',
        data: {
          id,
          movies: this.movies,
          theaters: this.theaters,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.onAdd.emit();
      });
  }

  openShowDialog(): void {
    this.dialog
      .open(AddShowFormComponent, {
        height: '550px',
        width: '700px',
        data: {
          movies: this.movies,
          theaters: this.theaters,
        },
      })
      .afterClosed()
      .subscribe(() => {
        this.onAdd.emit();
      });
  }
}
