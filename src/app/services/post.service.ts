import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [
    {id: 1, dateApparition: "2019-11-05", lien: "lien", sourcePdf: "post1.pdf", type: "poster"},
    {id: 2, dateApparition: "2019-12-05", lien: "lien", sourcePdf: "post2.pdf", type: "poster"},
    {id: 3, dateApparition: "2019-12-16", lien: "lien", sourcePdf: "post3.pdf", type: "poster"}
  ]

  constructor() {
  }

  getPosts() {
    return this.posts;
  }
}
