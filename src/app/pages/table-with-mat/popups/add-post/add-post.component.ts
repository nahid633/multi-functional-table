import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppService} from '../../../../services/app/app.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  postForm: FormGroup;
  constructor(public dialogRef: MatDialogRef<AddPostComponent>, private appService: AppService, private snackbar: MatSnackBar) {}

  ngOnInit() {
    this.postForm = new FormGroup({
      userId: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', [Validators.required]),
    });
  }
  onCancel(){
    this.dialogRef.close();
  }
  onSave(){
    this.appService.addPost(this.postForm.value).subscribe(res => {
      this.snackbar.open('Succecfully Added', '', {
        duration: 2000
      });
      this.dialogRef.close('ok');
    }, error  => {
      this.snackbar.open('Error happened', '', {
        duration: 2000
      });
    });
  }
}
