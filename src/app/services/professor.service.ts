import { Injectable } from '@angular/core';
import { Professor } from '../models/professor';
import { HttpClient } from '@angular/common/http';

const URL="http://localhost:8090/api/professor";
@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private http: HttpClient) { }
  private professors:Professor[]=[

    { cin:"11081155",
      nom:"maher",
      prenom:"ch",
       dateNaissance:new Date(1996,6,8),
       cv:"1.pdf",
       photo:[],
       email:"maher.chabchoub@enis.tn",
       password:"css",
       etablissement:"enis",
       grade:"ingénieur",
       sujet:"sujet1",
       diplome:"GI"
      
  
    },
    {  cin:"11405789",
    nom:"youssef",
    prenom:"maa",
     dateNaissance:new Date("Fri Dec 08 2020 07:44:57"),
     cv:"2.pdf",
     photo:[],
     email:"youssef.maaloul@enis.tn",
     password:"css",
     etablissement:"enis",
     grade:"ingénieur",
     sujet:"sujet2",
     diplome:"GI"
  },
      
  
     {  cin:"11546000",
     nom:"msk",
     prenom:"msk",
      dateNaissance:new Date("Fri Dec 08 2020 07:44:57"),
      cv:"2.pdf",
      photo:[],
      email:"msk.msk@enis.tn",
      password:"css",
      etablissement:"enis",
      grade:"ingénieur",
      sujet:"sujet3",
      diplome:"GI"
       
       
   
     }
  
  
  ];
  public getAllProfessors()
  {
    return this.http.get(URL+'/all');
  
  }
  
  
  }
