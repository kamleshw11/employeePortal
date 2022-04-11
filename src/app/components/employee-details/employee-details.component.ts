import { Component, OnInit } from '@angular/core';
import { Employee } from '../utility/Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {
  searchText='';
  employees: Employee[] = [
    { empId: 1, name: "Kamlesh", designation: "GM", image: "https://source.unsplash.com/random/200x200/?nature,code", flag: true },
    { empId: 2, name: "Kalpesh", designation: "Manager", image: "https://source.unsplash.com/random/200x200/?nature,code", flag: true },
    { empId: 3, name: "Hrishi", designation: "Director", image: "https://source.unsplash.com/random/200x200/?nature,code", flag: true },
    { empId: 4, name: "Jiva", designation: "Trainee", image: "https://source.unsplash.com/random/200x200/?nature,code", flag: true },
    { empId: 5, name: "Ram", designation: "CEO", image: "https://source.unsplash.com/random/200x200/?nature,code", flag: true },
    { empId: 6, name: "Sham", designation: "Manager", image: "https://source.unsplash.com/random/200x200/?nature,code", flag: true },
  ];
  
  toggleImage(employee: Employee) {
    employee.flag = !employee.flag;
  }
  constructor() { }

  ngOnInit(): void {
  }
 
}
