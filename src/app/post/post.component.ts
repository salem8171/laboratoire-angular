import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {StarRatingComponent} from "ng-starrating";
import {MDCRipple} from '@material/ripple';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {AddPostComponent} from "../add-post/add-post.component";
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  posts: Observable<any>;

  roleStudent : boolean = false;
  roleProfessor : boolean = false
  roleAdmin : boolean = false
  constructor(private postService: PostService, private dialog: MatDialog , private token : TokenStorageService) {
  }

  ngOnInit() {
    if(this.token.getUser()!=null)
    {
      this.roleStudent = this.token.getUser().role.roleName == 'ROLE_STUDENT';
      this.roleProfessor = this.token.getUser().role.roleName == 'ROLE_PROFESSOR';
      this.roleAdmin = this.token.getUser().role.roleName == 'ROLE_ADMIN';
    }
    this.getPosts();
  }

  getPosts() {
    this.posts = this.postService.getPosts();
    this.posts.subscribe(posts => {
      console.log(posts[0]);
    });
  }

  onRate($event: { oldValue: number, newValue: number, starRating: StarRatingComponent }) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  addPost() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.width = '60%';

    this.dialog.open(AddPostComponent, dialogConfig);
  }
}
