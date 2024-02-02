import { Component } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-juste-prix',
  templateUrl: './juste-prix.component.html',
  styleUrls: ['./juste-prix.component.css']
})
export class JustePrixComponent {

    nombreAleatoire: number;
    essais: number[] = [];
    resultats: number[] = [0,0];
    nombreJoueur: number = 0;
    finDePartie: boolean = false;

    constructor(private _score: ScoreService){
      this.resultats[0] = _score.getVictoires();
      this.resultats[1] = _score.getDefaites();
      this.nombreAleatoire= Math.floor(Math.random() * 1000) + 1;
    }

    deviner(){
      this.essais.push(this.nombreJoueur);
      this.nombreJoueur = 0;
      if(this.nombreJoueur === this.nombreAleatoire || this.essais.length === 10){
        this.finDePartie = true;
        if(this.aGagne())
          this._score.setVictoires();
        else
          this._score.setDefaites();
      }
    }

    rejouer(){
      this.finDePartie = false;
      this.nombreAleatoire = Math.floor(Math.random() * 1000) + 1;
      this.essais = [];
      this.resultats[0] = this._score.getVictoires();
      this.resultats[1] = this._score.getDefaites();
    }

    aGagne(): boolean{
      if(this.essais[this.essais.length-1] == this.nombreAleatoire && this.essais.length <= 10){
        return true;
      }
      else{
        return false;
      }
    }

}
