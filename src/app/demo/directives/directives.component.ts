import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  bool: boolean = true;
  prenoms: String[] = ["Marc", "Thibault", "Quentin", "Quentin", "Julien", "Floriane",
    "Denis", "Eleftherios"];
  uneVariable: string = "Bonjour!"

  films: string[] = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Return of the King",
    "Schindler's List",
    "Inception",
    "Fight Club",
    "Forrest Gump",
    "The Matrix",
    "Goodfellas",
    "The Silence of the Lambs",
    "The Green Mile",
    "The Godfather: Part II",
    "Se7en",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Departed",
    "Gladiator",
    "The Lion King",
    "The Prestige"
  ];

  traitementEvenement(nouveauTitre: string){
    this.films.push(nouveauTitre);
  }
}
