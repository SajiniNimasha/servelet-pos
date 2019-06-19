import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/dto/item';
import {ItemService} from "../../service/item.service";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  items:Item[]=[];
  selectedItem:Item =new Item('','',Number(''),Number(''));

  constructor(private ItemService :ItemService) {
    // this.items.push(new Item('I001','Tea',200.00,12.00));
    // this.items.push(new Item('I001','Tea',200,12));
    //

   }

  ngOnInit() {
    this.ItemService.getAllItems().subscribe(items=>{
        this.items = items;


      }

    );

  }

}
