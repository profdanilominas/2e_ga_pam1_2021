import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  filmes = [
    {
      nome: 'Infiltrado (2021)',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dAtAp4IeT6EYGhewfnNNhalobme.jpg',
      lancamento: '27/05/2021',
      avaliacao: 80,
      duracao: '1h 59m',
      categorias: [ 'Ação', 'Crime' ]
    },
    {
      nome: '',
      capa: '',
      lancamento: '',
      avaliacao: 0,
      duracao: '',
      categorias: []
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
