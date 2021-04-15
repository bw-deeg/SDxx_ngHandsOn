import { Employee } from './../../models/employee';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  employee: Employee = new Employee();
  locations = ['Los Angeles', 'Austin', 'Kansas City', 'Denver']

  onSubmit() {
    console.log(this.employee);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
