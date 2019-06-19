import { Component } from '@angular/core';
import {Customer} from "./dto/Customer";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'class-works';
  counter: number[] = [];
  

  // customerlist: Customer[] = customers;
  //
  //
  // countType(value): void {
  //   for (let x = 0; x < value; x++) {
  //     this.counter.push(x);
  //   }
  // }
  //
  // // status = true;
  //
  // // doSomthing(): void {
  // //   this.status = status ?  true : false;
  // //   this.status = status ? false : true;
  // // }
  //
  // status:boolean=false;
  //
  //
  //
  // doSomthing():void{
  //   this.status=this.status? false:true;
  //
  //
  // }
  //
  //
  //
  // add(id, name, address): void {
  //   customers.push(new Customer(id, name, address));
  // }


}
