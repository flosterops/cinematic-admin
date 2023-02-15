import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AddTheaterFormComponent } from '../add-theater-form/add-theater-form.component';
import { MatDialog } from '@angular/material/dialog';
import { ITheater } from '../services/theater/theater.service';
import { TheaterInfoComponent } from '../theater-info/theater-info.component';

interface IDataSource extends ITheater {
  position: number;
}

@Component({
  selector: 'app-theater-table',
  templateUrl: './theater-table.component.html',
  styleUrls: ['./theater-table.component.scss'],
})
export class TheaterTableComponent implements OnInit, OnChanges {
  @Input() theaters: any[] = [];
  @Output() onAdd = new EventEmitter();
  dataSource = new MatTableDataSource<IDataSource>();
  displayedColumns: string[] = [
    'position',
    'name',
    'number_of_seats',
    'list_of_features',
  ];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.theaters.currentValue) {
      this.dataSource.data = changes?.theaters.currentValue;
    }
  }

  openTheaterDialog(): void {
    this.dialog
      .open(AddTheaterFormComponent, {
        height: '500px',
        width: '600px',
      })
      .afterClosed()
      .subscribe(() => {
        this.onAdd.emit();
      });
  }

  openTheaterInfoDialog(id: string): void {
    this.dialog
      .open(TheaterInfoComponent, {
        height: '400px',
        width: '600px',
        data: { id },
      })
      .afterClosed()
      .subscribe(() => {
        this.onAdd.emit();
      });
  }
}
