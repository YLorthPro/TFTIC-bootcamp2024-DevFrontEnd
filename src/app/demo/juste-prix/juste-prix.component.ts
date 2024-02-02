import { Component } from '@angular/core';
import { ScoreService } from './score.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-juste-prix',
  templateUrl: './juste-prix.component.html',
  styleUrls: ['./juste-prix.component.css']
})
export class JustePrixComponent {

    nombreAleatoire: number;
    essais: number[] = [];
    resultats: number[] = [0,0];
//    nombreJoueur: number = 0; pas besoin avec le FormGroup
    finDePartie: boolean = false;
    formulaire: FormGroup;

    constructor(private _score: ScoreService, private _formBuilder: FormBuilder){
      this.resultats[0] = _score.getVictoires();
      this.resultats[1] = _score.getDefaites();
      this.nombreAleatoire= Math.floor(Math.random() * 1000) + 1;
      this.formulaire = _formBuilder.group({
          entreeUtilisateur: [0, [Validators.required, Validators.min(0), Validators.max(1000)]]
      });
    }

    deviner(){
      let valeur = this.formulaire.get('entreeUtilisateur')!.value;

      this.essais.push(valeur);
      this.formulaire.controls['entreeUtilisateur'].setValue(0);
      if(valeur === this.nombreAleatoire || this.essais.length === 10){
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
