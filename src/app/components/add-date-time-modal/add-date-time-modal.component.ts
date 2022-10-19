import { Component, OnInit, Inject, ChangeDetectorRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DateTimePicker } from 'src/app/models/date-time-picker.model';

@Component({
  selector: 'app-add-date-time-modal',
  templateUrl: './add-date-time-modal.component.html',
  styleUrls: ['./add-date-time-modal.component.scss']
})
export class AddDateTimeModalComponent implements OnInit {

  private static width: string = '400px';
  private static height: string = 'auto';

  public data: DateTimePicker;    

  constructor(public dialogRef: MatDialogRef<AddDateTimeModalComponent>,
             @Inject(MAT_DIALOG_DATA) data: DateTimePicker,
             private changeDetectorRef: ChangeDetectorRef) {       
    this.data = data;
  }

  ngOnInit(): void {
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    const rect = this.data.trigger.nativeElement.getBoundingClientRect();
    matDialogConfig.position = { left: `${rect.left}px`, top: `${rect.bottom}px` };
    matDialogConfig.width = AddDateTimeModalComponent.width;
    matDialogConfig.height = AddDateTimeModalComponent.height;
    this.dialogRef.updateSize(matDialogConfig.width, matDialogConfig.height);
    this.dialogRef.updatePosition(matDialogConfig.position);
  }

  public updateDateTimeAndClose() {         
    console.log(this.data);
    this.dialogRef.close(this.data);
  }

  public addHour() {
    this.data.hours = (this.data.hours === 23) ? 0 : this.data.hours + 1;     
  }

  public removeHour() {
    this.data.hours = (this.data.hours === 0) ? 23: this.data.hours - 1;    
  }

  public addMinute() {
    this.data.minutes = (this.data.minutes === 59) ? 0 : this.data.minutes + 1;
  }

  public removeMinute() {
    this.data.minutes = (this.data.minutes === 0) ? 59 : this.data.minutes - 1;
  }

  public changeSelectedDate(event: Date) {    
    this.data.date = event;
  }

  public changeHour(event: number) {    
    if (event > 23) {      
      this.data.hours = NaN;
      setTimeout(() => {
        this.data.hours = 23;      
      }, 50);      
    }    
  }

  public changeMinute(event: number) {
    if (event > 59) {
      this.data.minutes = NaN;
      setTimeout(() => {
        this.data.minutes = 59;      
      }, 50);    
    }
  }

  public keyPress(event: KeyboardEvent) {
    return !event.key || (event.key.charCodeAt(0) >= 48 && event.key.charCodeAt(0) <= 57);
  }
}
