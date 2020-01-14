import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {StudentService} from 'src/app/services/student.service';
import {Student} from 'src/app/models/student';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Observable } from 'rxjs';

declare var $;


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  ELEMENT_DATA: Observable<any>;
  DATA : any;
  displayedColumns: string[] = ['name', 'lastname', 'cin', 'email', 'actions'];
  dataSource :any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

 

  Selectedstudent : any;

 
  constructor(private studentService: StudentService ,private token : TokenStorageService) {

  }

  ngOnInit() {
    
    this.ELEMENT_DATA = this.studentService.getAllStudents();
    this.ELEMENT_DATA.subscribe(data=>{
      this.DATA = data;
      this.dataSource = new MatTableDataSource<Student>(this.DATA);
      this.Selectedstudent = data[2];
      console.log(this.Selectedstudent);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
    
    console.log(this.ELEMENT_DATA);


  }

  preview(data) {
    console.log(data);

    this.Selectedstudent = data;
  }

}




