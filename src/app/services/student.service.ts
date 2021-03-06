import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:8090/api/student";
@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient) { }

  private students: Student[] = [

    {
      cin: "11081155",
      nom: "maher",
      prenom: "ch",
      dateNaissance: new Date(1996, 6, 8),
      cv: "1.pdf",
      photo: [],
      email: "maher.chabchoub@enis.tn",
      password: "css",
      dateInscription: new Date("Fri Dec 08 2020 07:44:57"),
      sujet: "sujet1",
      diplome: "GI"


    },
    {
      cin: "11405789",
      nom: "youssef",
      prenom: "maa",
      dateNaissance: new Date("Fri Dec 08 2020 07:44:57"),
      cv: "2.pdf",
      photo: [],
      email: "youssef.maaloul@enis.tn",
      password: "css",
      dateInscription: new Date("Fri Dec 08 2020 07:44:57"),
      sujet: "sujet2",
      diplome: "GI"
    },


    {
      cin: "11546000",
      nom: "msk",
      prenom: "msk",
      dateNaissance: new Date("Fri Dec 08 2020 07:44:57"),
      cv: "2.pdf",
      photo: [],
      email: "msk.msk@enis.tn",
      password: "css",
      dateInscription: new Date("Fri Dec 08 2020 07:44:57"),
      sujet: "sujet3",
      diplome: "GI"

    }


  ];
  public getAllStudents() {
    return this.http.get(URL + '/all');

  }

  public deleteStudentById(id) {
    return this.http.delete(URL + "/delete/" + id);
  }

  public addSupervisor(idStudent, idProfessor) {
    return this.http.put(URL + "/" + idStudent + "/addEncadant/" + idProfessor, {});
  }

  public getSupervisor(id){
    return this.http.get(URL+"/"+id+"/findEncadrant");
  }
}