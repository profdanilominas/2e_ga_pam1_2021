import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
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

  constructor() { }

  ngOnInit(): void {
  }

}
