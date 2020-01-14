import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import { Professor } from 'src/app/models/professor';
import { Observable } from 'rxjs';
declare var $;
@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  ELEMENT_DATA: Observable<any>
  displayedColumns: string[] = ['name', 'lastname', 'cin', 'email','actions'];
   Selectedprofessor:any;
  dataSource :any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private professorService:ProfessorService) { }

  ngOnInit() {

    this.ELEMENT_DATA=this.professorService.getAllProfessors();
    this.ELEMENT_DATA.subscribe(data =>{
      this.Selectedprofessor = data[0];
      this.dataSource = new MatTableDataSource<Professor>(data);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
    
    
  }

  preview(element)
  {
    this.Selectedprofessor = element;
  }

}
