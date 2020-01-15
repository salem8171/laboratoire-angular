import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import { MatPaginator, MatSort, MatTableDataSource } from "@angular/material";
import { Professor } from 'src/app/models/professor';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { StudentService } from 'src/app/services/student.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
declare var $;
@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  ELEMENT_DATA: Observable<any>
  displayedColumns: string[] = ['name', 'lastname', 'cin', 'email', 'actions', 'action'];
  Selectedprofessor: any;
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  roleAdmin: boolean = false;
  roleStudent: boolean = false;

  Supervised: any;
  disable: boolean = false;
  idSupervised = 0;
  constructor(private professorService: ProfessorService, private token: TokenStorageService,
    private studentService: StudentService) { this.getSupervisor(); }

  ngOnInit() {
    if (this.token.getUser() != null) {
      this.roleAdmin = (this.token.getUser().role.roleName == 'ROLE_ADMIN');
      this.roleStudent = (this.token.getUser().role.roleName == 'ROLE_STUDENT');
    }
    this.ELEMENT_DATA = this.professorService.getAllProfessors();
    this.ELEMENT_DATA.subscribe(data => {
      this.Selectedprofessor = data[0];
      this.dataSource = new MatTableDataSource<Professor>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })



  }

  preview(element) {
    this.Selectedprofessor = element;
  }

  delete(id) {

    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this Professor!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.professorService.deleteProfessorById(id).subscribe();
        window.location.reload();
        Swal.fire(
          'Deleted!',
          'Professor has been deleted.',
          'success'
        );

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your Professor is safe :)',
        );
      }
    });
  }

  addSupervisor(id) {
    this.studentService.addSupervisor(this.token.getUser().id, id).subscribe();
    window.location.reload();
  }

  getSupervisor() {
    if(this.token.getUser()){
      this.studentService.getSupervisor(this.token.getUser().id).subscribe(supervisor => {
        this.Supervised = supervisor;
        
        if(this.Supervised)
        {
          this.disable = true;
          this.idSupervised = this.Supervised.id;
          console.log(this.Supervised.id);
        }
     
      })
    }
   
  }
}
