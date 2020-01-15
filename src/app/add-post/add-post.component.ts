import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";
import { PostService } from '../services/post.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  post: FormGroup;

  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<AddPostComponent>,
    private postService: PostService,
    private tokenService: TokenStorageService) {
    this.post = this.fb.group({
      date: Date,
      lien: String,
      // source: String,
      type: String
    });
  }

  ngOnInit() {
  }

  onClose() {

    this.dialogRef.close();

  }

  add() {
    this.post.value.idAuteur = this.tokenService.getUser().id;
    this.postService.addPost(this.post.value).subscribe();
    this.onClose();
    window.location.reload();
  }
}
