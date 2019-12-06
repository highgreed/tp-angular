import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  userprofileForm = new FormGroup({
    firstName: new FormControl('')
  });
  ngOnInit(){

  }
  onSubmit() {
    console.warn(this.userprofileForm.value);

    console.log(this.userprofileForm.controls['firstName'].value);
  }
}