import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { AddDateTimeModalComponent } from './components/add-date-time-modal/add-date-time-modal.component';


export const AngularMaterial = [
  MatSnackBarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatDatepickerModule,
  MatCardModule,
  MatNativeDateModule
];

export const CommonModule = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  AppRoutingModule
]

@NgModule({
  declarations: [
    AppComponent,
    DateTimePickerComponent,
    AddDateTimeModalComponent
  ],
  imports: [
    ...CommonModule,
    ...AngularMaterial
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
