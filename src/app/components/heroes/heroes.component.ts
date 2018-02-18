import { Component, OnInit } from '@angular/core';
import {HeroesServices, Heroe} from '../../services/heroes.services';
import {Router} from '@angular/router'
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
private heroues: Heroe[] = [];
  constructor(private _heroesServices: HeroesServices, private route: Router) {


   }
 
  ngOnInit() {
    this.heroues = this._heroesServices.getHeroes();
    console.log(this.heroues);
  }
  verHeroe(idx: number){
      this.route.navigate(['/heroe',idx]);
  }

}
