import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesServices} from '../../services/heroes.services';
import {Router} from '@angular/router'
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
//agarrar parametro por la url

   heroe: any = {};
  constructor(private activateRoute: ActivatedRoute,
     private heroeService: HeroesServices, private route: Router) {
      
     this.activateRoute.params.subscribe(params=> {
     this.heroe = this.heroeService.getHeroe(params.id);
     if(this.heroe[0] === []){
       this.heroe.nombre = "NO HAY DATOS"
     }
    })

   }
   volver(){
    this.route.navigate(['heroes'])
   }

  ngOnInit() {
  }

}
