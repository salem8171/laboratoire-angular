import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  post: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AddPostComponent>) {
    this.post = this.fb.group({
      dateApparition: Date,
      lien: String,
      source: String,
      type: String


    });
  }

  ngOnInit() {
  }

  onClose() {

    this.dialogRef.close();

  }

  add() {

  }
}
