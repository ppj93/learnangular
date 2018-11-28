import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  hero : Hero = {id:1, name: 'hero number 1'};
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  selectZalaKi(h: Hero){
    this.selectedHero = h;
    console.log("select zala ki called with " + h.name)
  }
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
