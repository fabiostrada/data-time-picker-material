import { ElementRef } from '@angular/core';

export class DateTimePicker {
    public trigger!: ElementRef;
    public date!: Date;
    public hours!: number;
    public minutes!: number;
}