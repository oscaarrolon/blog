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
    this.arrPosts = [{
      titulo: 'Miguel Almiron',
      texto: 'El internacional paraguayo, Miguel Almirón, vive su mejor momento desde que llegó al Newcastle. Ahora mismo está a un nivel imparable y por eso ha sido elegido jugador de octubre en la Premier League.Almirón anotó cinco goles en seis partidos durante octubre y se ha convertido en el segundo paraguayo en la historia en ganar este premio, después de que Roque Santa Cruz lo consiguiera con el Blackburn Rovers en 2007.',
      autor: 'Oscar Rolon',
      imagen: 'https://www.mundodeportivo.com/files/image_948_465/files/fp/uploads/2022/10/23/635576b94223b.r_d.2251-917-2152.jpeg',
      fecha: new Date(),
      categoria: 'deportes',
    }]
    this.arrLocalStorage = JSON.parse(localStorage.getItem('posts')!)
  }

  ngOnInit(): void {

    this.arrLocalStorage = this.postsService.getAll()
    this.arrPosts.push(this.arrLocalStorage)
    console.log(this.arrPosts)

    if (this.arrPosts) {
      localStorage.setItem('posts', JSON.stringify(this.arrPosts));
    }

    console.log(this.arrLocalStorage)


  }



}
