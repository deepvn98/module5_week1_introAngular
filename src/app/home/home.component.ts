import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public name = "";
public age;
public listElements = ["Tùng","Hà","Công","Phương","Hoàng","Hải"]

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
  doituong = "";
  createElement(doituong:string){
      this.listElements.push(doituong);
  }


}
