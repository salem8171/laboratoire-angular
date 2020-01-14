import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { PostService } from 'src/app/services/post.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: Number;
  member: any;
  posts: Observable<any>;

  constructor(private acticatedRoute: ActivatedRoute,
              private memberService: MemberService,
              private postService: PostService) { }

  ngOnInit() {
    this.acticatedRoute.params.subscribe(params => {
      this.id = params['id'];

      this.memberService.getMember(this.id).subscribe(member => {
        this.member = member;
      });

      this.posts = this.postService.getPostsByAuthorId(this.id);
    });
  }

}
