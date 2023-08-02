import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsComponent } from './departments/departments.component';
import { EmployeeComponent } from './employee/employee.component';
import { Route, Router, RouterModule, Routes } from '@angular/router';

const rout:Routes=[
  {path:"", component:DepartmentsComponent}
]

@NgModule({
  declarations: [
    DepartmentsComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(rout)]
  ]
})
export class DepartmentModule { }
