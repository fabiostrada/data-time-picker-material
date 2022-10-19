import { Component, OnInit, ElementRef, ChangeDetectorRef, forwardRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDateTimeModalComponent } from '../add-date-time-modal/add-date-time-modal.component';
import { filter } from 'rxjs';
import { DateTimePicker } from 'src/app/models/date-time-picker.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateTimePickerComponent),
      multi: true
    }
  ],    
})
export class DateTimePickerComponent implements OnInit, ControlValueAccessor  {

  public value!: Date;
  private date!: Date;
  private hours!: number;
  private minutes!: number;

  public onChange: any = () => { };
  public onTouched: any = () => { };
  public disabled = false;

  constructor(public dialog: MatDialog,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
  }

  public openModal(evt: MouseEvent) {
    const target = new ElementRef(evt.currentTarget);
    
    const dialog = this.dialog.open(AddDateTimeModalComponent, {      
      data: { 
        trigger: target, 
        date: this.date,
        hours: this.hours,
        minutes: this.minutes 
      }      
    });
    dialog.afterClosed()
          .pipe(
              filter(data => !!data)
          ).subscribe((output: DateTimePicker) => {
            dialog.close();
            this.updateValue(output);
          });
  }

  private updateValue(output: DateTimePicker) {
    this.value = new Date();
    this.value.setDate(output.date.getDate());
    if (!!output.hours)
      this.value.setHours(output.hours);
    this.value.setMinutes(output.minutes);
    this.changeDetectorRef.detectChanges(); 
    setTimeout(() => {
      this.value = output.date;
      if (!!output.hours)
        this.value.setHours(output.hours);
      this.value.setMinutes(output.minutes);              
      this.date = this.value;
      if (!!output.hours)
        this.hours = output.hours;
      this.minutes = output.minutes;
      this.changeDetectorRef.detectChanges();  
      this.onChange(this.value);   
    }, 50); 
  }

  writeValue(obj: Date): void {        
    this.value = obj;    
  }

  registerOnChange(fn: any): void {        
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
