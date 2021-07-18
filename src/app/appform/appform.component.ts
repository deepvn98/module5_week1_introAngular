import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-appform',
  templateUrl: './appform.component.html',
  styleUrls: ['./appform.component.css']
})
export class AppformComponent implements OnInit {
  public ProfileForm =new FormGroup({
    name: new FormControl(''),
    useName: new FormControl(''),
    password: new FormControl('')
  });
// public name = '';
// public userName = '';
// public password = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.ProfileForm);
    
    
  }

}
