import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatCommonModule, MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TheaterTableComponent } from './theater-table/theater-table.component';
import { MatTableModule } from '@angular/material/table';
import { AddTheaterFormComponent } from './add-theater-form/add-theater-form.component';
import { AddMovieFormComponent } from './add-movie-form/add-movie-form.component';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { TheaterInfoComponent } from './theater-info/theater-info.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { AddShowFormComponent } from './add-show-form/add-show-form.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ShowInfoComponent } from './show-info/show-info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LoginFormComponent,
    HomePageComponent,
    HeaderComponent,
    TheaterTableComponent,
    AddTheaterFormComponent,
    AddMovieFormComponent,
    MovieTableComponent,
    TheaterInfoComponent,
    MovieInfoComponent,
    ShowTableComponent,
    AddShowFormComponent,
    ShowInfoComponent,
  ],
  imports: [
    BrowserModule,
    MatCommonModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NgbModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    MatTableModule,
    NgxMatTimepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent],
})
export class AppModule {}
