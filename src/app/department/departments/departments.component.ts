import { Component, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent {
 showEmp:boolean = false;


  private contentPlaceholder!: EmployeeComponent;

@ViewChild('contentPlaceholder') set content(content: EmployeeComponent) {
   if(content) { // initially setter gets called with undefined
        this.contentPlaceholder = content;
   }
}

toggle(){
  this.showEmp = true;
  if(this.showEmp && this.contentPlaceholder?.EmpName != undefined ){
  console.log(this.contentPlaceholder?.EmpName);
  }
}
}
