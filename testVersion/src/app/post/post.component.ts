import { IPost } from './../IPost';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public posts = [];
  public errorMessage;
  constructor(private _postService: PostService) { }

  ngOnInit() {
    this._postService.getPosts()
        .subscribe(data=> this.posts=data,
                    error=> this.errorMessage=error);

  }
  createPost(input: HTMLInputElement){
    let post: any ={title:input.value}
    input.value='';
    this._postService.creatPost(post)
    .subscribe(data=>{
      post.id=data.id
      this.posts.splice(0,0,post);
      // console.log(data);
    });
  }

  updatePost(post){
    this._postService.updatePost(post)
        .subscribe(data=>{
          console.log(data);
        });
  }

  deletePost(post){
    this._postService.deletePost(post)
        .subscribe(data=>{
         let index =this.posts.indexOf(post);
         this.posts.splice(index,1);
        });
  }
}
