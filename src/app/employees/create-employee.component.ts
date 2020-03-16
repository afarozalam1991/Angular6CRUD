import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  fullName;
  previewPhoto= false;
  photoPath;
  email;
  gender;
  phoneNumber;
  contactPreference;
  isActive;
  department = '1';
  dateOfBirth = new Date();
  departments: Department[] = [
    {
      id: 1, name: 'Help Desk'
    },
    {
      id: 2, name: 'HR'
    },
    {
      id: 3, name: 'IT'
    },
    {
      id: 4, name: 'Paroll'
    }

  ];
  datePickerConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.datePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(2018, 0, 1),
        maxDate: new Date(2020, 11, 31),
        dateInputFormat: 'DD/MM/YYYY',
        isDisabled: true
      });
  }

  ngOnInit(): void {
  }
  saveEmployee(employeeForm: NgForm): void {
    console.log(employeeForm);
  }
  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }
}
