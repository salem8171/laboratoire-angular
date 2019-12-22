import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';

declare var $;


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  ELEMENT_DATA: Student[] =[];
  displayedColumns: string[] = ['name', 'lastname', 'cin', 'email','actions'];
  dataSource = new MatTableDataSource<Student>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  // @ViewChild('datatable') table;
  /* @ViewChild('dataTable', {static: true}) table: ElementRef;
   dataTable: any;

   dtOptions: DataTables.Settings = {};
   */ 
  constructor(private studentService:StudentService) {
    
  }

  ngOnInit() {
    // $(document).ready(() => {
    //   $('#example').DataTable();
    // });
    /*this.dataTable = $(this.table.nativeElement);
    this.dataTable.dataTable();*/

    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 10,
    //   processing: true
    // };
    this.ELEMENT_DATA=this.studentService.getAllStudents();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.ELEMENT_DATA);
 

   
    

  }

}




