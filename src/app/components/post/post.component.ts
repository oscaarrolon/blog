import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  arrLocalStorage: any
  arrPosts: Post[]


  constructor(private postsService: PostsService) {
    this.arrLocalStorage = []
    this.arrPosts = []
    this.arrLocalStorage = JSON.parse(localStorage.getItem('posts')!)
  }

  ngOnInit(): void {

    this.arrPosts = this.postsService.getAll()


    if (this.arrPosts) {
      localStorage.setItem('posts', JSON.stringify(this.arrPosts));
    }

    console.log(this.arrLocalStorage)


  }



}
