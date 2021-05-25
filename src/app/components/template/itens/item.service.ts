import { Injectable } from '@angular/core';
import { Item } from './Item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private itens : Item[]


  constructor() {
    this.itens = [
      new Item(1,"Para-Choque",'Carro',300.53,30,'Kenzy'),
      new Item(2,"Pastilha de Freio",'Carro',20.53,42,'Fontelli'),
      new Item(3,"Volante",'Carro',160.00,30,'Kenzy'),
      new Item(4,"Banco",'Carro',460.43,42,'Fontelli'),
      new Item(5,"Embreagem",'Carro',1200.53,30,'Kenzy'),
      new Item(6,"Motor",'Carro',4000.53,42,'Fontelli'),
      new Item(7,"Pneu",'Carro',310.00,30,'Avenida'),
      new Item(8,"Capa de Banco",'Carro',190.53,42,'Fontelli'),

    ]
  }
  getItens(){
    return this.itens;
  }

  getItem(i:number){
    return this.itens[i]
  }
}


