import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  { path: 'posts', component: PostComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '**', redirectTo: 'posts' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
