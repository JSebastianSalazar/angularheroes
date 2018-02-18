import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Heroe, HeroesServices} from '../../services/heroes.services'
@Component({
  selector: 'app-searh',
  templateUrl: './searh.component.html',
  styleUrls: ['./searh.component.css']
})
export class SearhComponent implements OnInit {
  heroe: any = {};
  termino: string ;
  terminoLongitud: number;
  constructor(private activateRoute: ActivatedRoute,
    private heroeService: HeroesServices, private route: Router) {
     
     this.activateRoute.params.subscribe(params=>{
       this.termino = params.nombre;
       this.heroe = this.heroeService.buscarHeroe(params.nombre);
       this.terminoLongitud = this.heroe.length;
       console.log(this.heroe);
     }) }

  ngOnInit() {
  }
  atras(){
    this.route.navigate(['heroes'])
   }
}
