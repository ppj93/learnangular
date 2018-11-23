import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';

import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  hero : Hero = {id:1, name: 'hero number 1'};
  selectedHero: Hero;

  constructor() { }

  selectZalaKi(h: Hero){
    this.selectedHero = h;
    console.log("select zala ki called with " + h.name)
  }
  ngOnInit() {
  }

}
