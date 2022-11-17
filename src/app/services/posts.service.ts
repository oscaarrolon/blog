import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


  arrPosts: Post[]




  constructor() {

    this.arrPosts = []

  }

  createPost(pObjeto: any) {

    this.arrPosts.push(pObjeto!)
  }



  getAll() {

    return this.arrPosts

  }


  getByCategory(pCategory: string) {

    return this.arrPosts.filter(post => pCategory === post.categoria)

  }
}



