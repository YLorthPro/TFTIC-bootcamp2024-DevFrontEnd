import { Component } from '@angular/core';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-demo-services',
  templateUrl: './demo-services.component.html',
  styleUrls: ['./demo-services.component.css']
})
export class DemoServicesComponent {
  stockDuDemoService: string[];
  produit: string = "";

  constructor(private _stock: StockService){
    this.stockDuDemoService = this._stock.getStock();
  }

  ajouter(){
    this._stock.ajouter(this.produit);
    this.produit = "";
    this.stockDuDemoService = this._stock.getStock();
  }

}
