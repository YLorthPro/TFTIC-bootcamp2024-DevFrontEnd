import { Component } from '@angular/core';

@Component({
  selector: 'app-bidings',
  templateUrl: './bidings.component.html',
  styleUrls: ['./bidings.component.css']
})
export class BidingsComponent {

  variable1: string = "Coucou";
  variable2?: string;
  variable3?: string;

  age: number = 0;
  majeur: boolean = false;

  desactive: boolean = true;
  desactiveLeRetour: boolean = true;

  coucouMarc(){
    this.variable3 = "Marc <3"
    if(this.desactive == true)
      this.desactive = false
    else
      this.desactive = true
  }

  isMajeur(){
    if(this.age>=18)
      this.majeur=true;
    else
      this.majeur= false;


    if(this.desactiveLeRetour == true)
      this.desactiveLeRetour = false
    else
      this.desactiveLeRetour = true
  }
}
