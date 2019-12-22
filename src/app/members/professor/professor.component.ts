import { Component, OnInit, ViewChild } from '@angular/core';
import { ProfessorService } from 'src/app/services/professor.service';
import {MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import { Professor } from 'src/app/models/professor';
declare var $;
@Component({
  selector: 'app-professor',
  templateUrl: './professor.component.html',
  styleUrls: ['./professor.component.scss']
})
export class ProfessorComponent implements OnInit {
  ELEMENT_DATA: Professor[] =[];
  displayedColumns: string[] = ['name', 'lastname', 'cin', 'email','actions'];
   displayProfile:any;
  dataSource = new MatTableDataSource<Professor>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;


  constructor(private professorService:ProfessorService) { }

  ngOnInit() {

    this.ELEMENT_DATA=this.professorService.getAllProfessors();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.ELEMENT_DATA);
     this.displayProfile=false;
  }

}
