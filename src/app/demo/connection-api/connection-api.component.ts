import {Component, OnInit} from '@angular/core';
import {Post} from "../models/post";
import {PostService} from "../services/post.service";
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-connection-api',
  templateUrl: './connection-api.component.html',
  styleUrls: ['./connection-api.component.css']
})
export class ConnectionAPIComponent implements OnInit{

  listePosts ?: Post[];
  post ?: Post;
  utilisateur ?: User;
  postId ?: number;
  constructor(private _postService: PostService, private _userService: UserService) {
  }

  ngOnInit(): void {
        this._postService.avoirToutLesPosts().subscribe({
          next: (valeurObservable)=> this.listePosts=valeurObservable,

          error: (err)=> alert(err.error()),

          complete: ()=> console.log("Chargement terminé")

        })
  }

  postSelectionne(){
    if(this.postId !== undefined){
      this._postService.avoirUnPost(this.postId).subscribe({
        next: (valeurObservable)=> {
          this.post=valeurObservable;
          this.utilisateurSelectionne(this.post.userId);
        },

        error: (err)=> alert(err),

        complete: ()=> console.log("Envoi terminé")

      })
    }
  }

  utilisateurSelectionne(id: number){
    this._userService.getOne(id).subscribe({
      next: (valeurObservable)=> this.utilisateur=valeurObservable,

      error: (err)=> alert(err),

      complete: ()=> console.log("Chargement terminé")

    })
  }

  posterUnPost(post: Post){
      this._postService.posterUnPost(post).subscribe({
        next: (valeurObservable)=> console.log("Post envoyé"),

        error: (err)=> alert(err),

        complete: ()=> console.log("Envoi terminé")

      })
    }


}
