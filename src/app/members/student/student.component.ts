import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $;


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})

export class StudentComponent implements OnInit {
  ELEMENT_DATA: Observable<any>;
  DATA: any;
  displayedColumns: string[] = ['name', 'lastname', 'cin', 'email', 'actions'];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;



  Selectedstudent: any;
  roleAdmin: boolean = false;



  constructor(private studentService: StudentService, private token: TokenStorageService) {

  }

  ngOnInit() {
    if (this.token.getUser() != null) {
      this.roleAdmin = (this.token.getUser().role.roleName == 'ROLE_ADMIN');
    }

    this.ELEMENT_DATA = this.studentService.getAllStudents();
    this.ELEMENT_DATA.subscribe(data => {
      this.DATA = data;
      this.dataSource = new MatTableDataSource<Student>(this.DATA);
      this.Selectedstudent = data[0];
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

  delete(id) {


    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Student!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.studentService.deleteStudentById(id).subscribe();
        window.location.reload();
        Swal.fire(
          'Deleted!',
          'Student has been deleted.',
          'success'
        );

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Student is safe :)',
        );
      }
    });
  }
}



