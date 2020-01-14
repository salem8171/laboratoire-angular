import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';

const URL = "http://localhost:8090/api/publication";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts = [
    {id: 1, dateApparition: "2019-11-05", lien: "lien", sourcePdf: "post1.pdf", type: "poster"},
    {id: 2, dateApparition: "2019-12-05", lien: "lien", sourcePdf: "post2.pdf", type: "poster"},
    {id: 3, dateApparition: "2019-12-16", lien: "lien", sourcePdf: "post3.pdf", type: "poster"}
  ]

  constructor(private http: HttpClient) {
  }

  addPost(post) {
    return this.http.post(URL + "/add", post);
  }

  getPosts() {
    return this.http.get(URL + "/all");
  }

  deletePost(id: Number) {
    return this.http.delete(URL + "/delete/" + id);
  }

  getPostsByAuthorId(id: Number) {
    return this.http.get(URL + "/all/auteur/" + id);
  }
}
