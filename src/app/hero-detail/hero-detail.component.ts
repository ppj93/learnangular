import { Component, OnInit, Input } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero;

  constructor() {
    console.log("in herodetail comonrn");
    setInterval(()=>{
      if(this.hero != null){
        //unidirectinal data flow.. if reference of the object changes in parent, client gets updated with new referecnce
        //howeever if reference of the object changes in child, parent does not get updated with new ference
        //however if content of hte ovbject shared by parent/child changes, every1 gets updated...because boject is a refernce type
        this.hero = new Hero (122 , new Date().toString());
      }

    }, 2000);
   }

  ngOnInit() {
  }

}
