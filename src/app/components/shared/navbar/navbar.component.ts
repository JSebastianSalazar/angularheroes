import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import {Heroe, HeroesServices, } from '../../../services/heroes.services'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {

   }

  ngOnInit() { 

  }
  buscarHeroe(nombre: string){
    this.router.navigate(['/busqueda',nombre]);
    
  }


}
