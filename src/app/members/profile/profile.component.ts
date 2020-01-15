import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ProfessorService } from 'src/app/services/professor.service';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: Number;
  member: any;
  posts: Observable<any>;
  SupervisedStudents : Observable<any>;

  idCurrentLoggedUser:Number;
  roleStudent: boolean = false;
  roleProfessor: boolean = false;
  isStudent :boolean = false;
  constructor(private acticatedRoute: ActivatedRoute,
              private memberService: MemberService,
              private postService: PostService,
              private token: TokenStorageService,
              private professorService:ProfessorService) { }

  ngOnInit() {
    if(this.token.getUser()!=null)
    {
      this.idCurrentLoggedUser = this.token.getUser().id;
     this.roleStudent = this.token.getUser().role.roleName=="ROLE_STUDENT";
     this.roleProfessor = this.token.getUser().role.roleName=="ROLE_PROFESSOR";
    }
    
    this.acticatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.memberService.getMember(this.id).subscribe(member => {
        this.member = member;
        if(this.member.role.roleName=="ROLE_STUDENT")
        {
          this.isStudent = true;
        }
      });

      this.posts = this.postService.getPostsByAuthorId(this.id);
     
    });

    // if(this.roleProfessor!=false)
    // {
      
    // }
    this.SupervisedStudents=this.professorService.getSupervisedStudents(this.id);
  }

}
