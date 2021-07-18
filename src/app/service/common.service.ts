import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
public name = "";
public age =0;
  constructor() { }
  tangTuoi(){
    this.age++;
  }

}
