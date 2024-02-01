import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  //@Input signifie que je vais recevoir qqchose du paent
  @Input() filmsEnfant!: string[];

  @Output() evenement: EventEmitter<string> = new EventEmitter<string>()

  nouveauFilm: string ="";

  ajouter(){
    if(this.nouveauFilm != ""){
      this.evenement.emit(this.nouveauFilm);
      this.nouveauFilm=""
    }
  }
}
