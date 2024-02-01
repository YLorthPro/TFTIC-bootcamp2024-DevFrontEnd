import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stock: string[]=["lait", "patate","salade","Marc"]

  constructor() { }

  getStock():string[]{
    return this.stock;
  }

  ajouter(produit: string){
    this.stock.push(produit);
  }

  retirer(i: number){
    this.stock.splice(i);
  }
}
