import { Component, OnInit } from '@angular/core';
import { Item } from './Item.model';
import { ItemService } from './item.service';


@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent implements OnInit {



  itens: Item[]

  constructor(private itemService : ItemService) {
    this.itens = this.itemService.getItens();

   }

  ngOnInit(): void {

  }



}
