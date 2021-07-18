import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
public name = '';
public age;
  constructor(private common:CommonService) {
    this.age = common.age;
    // this.name = common.name;

   }
  ngOnInit(): void {
  }
  tangTuoi(){
    this.common.age++;
    this.age = this.common.age;
  }

}
