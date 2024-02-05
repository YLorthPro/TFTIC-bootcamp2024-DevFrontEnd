import {Component, OnInit} from '@angular/core';
import {PostService} from "../services/post.service";
import {Post} from "../models/post";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  tableauDePost?: Post[];
  constructor(private _postService: PostService){}

  ngOnInit(){
        this._postService.avoirToutLesPosts().subscribe(
          (valeur)=> this.tableauDePost=valeur
        )
    }

}
