import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from 'src/app/interfaces/post.interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup


  constructor(private postsService: PostsService,
    private router: Router) {



    this.formulario = new FormGroup({

      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),


    })


  }

  ngOnInit(): void {

  }

  onEnviar() {
    this.postsService.createPost(this.formulario.value)
    this.router.navigate(['posts'])
  }

}
