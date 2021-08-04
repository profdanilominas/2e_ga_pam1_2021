import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  indice: number = 0

  filme: any

  filmes = [
    {
      indice: 0,
      nome: 'Infiltrado',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dAtAp4IeT6EYGhewfnNNhalobme.jpg',
      lancamento: '27/05/2021',
      avaliacao: 80,
      duracao: '1h 59m',
      categorias: [ 'Ação', 'Crime' ]
    },
    {
      indice: 1,
      nome: 'Mortal Kombat',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      lancamento: '15/04/2021',
      avaliacao: 75,
      duracao: '1h 50m',
      categorias: [ 'Ação', 'Fantasia', 'Aventura' ]
    }
  ]

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.indice = this.router.snapshot.params['indice']

    this.filme = this.filmes[this.indice]

    console.log('Filme escolhido')
    console.log(this.filme)
  }
}
