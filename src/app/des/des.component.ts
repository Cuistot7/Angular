import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})


export class DesComponent implements OnInit {

 test = false;
 test1 = false;
 test2 = false;

 random!: number;
 random1!: number;
 random2!: number;

 valeur!: number;
 valeur1!: number;
 valeur2!: number;

 pTotal!: number;
 bTotal!: number;
 total!: number;
 aTotal!: number;
 cumul = 0;

 diceList: Array<string> =  [
  'assets/img/de1.png',
  'assets/img/de2.png',
  'assets/img/de3.png',
  'assets/img/de4.png',
  'assets/img/de5.png',
  'assets/img/de6.png'
 ]

  constructor() {  }

  ngOnInit(): void {
  }

  // Bouton rejouer doit garder le pointage cumulatif en cours et ajouter les suivant
  reload(): void {

    this.test = true;
    this.test1 = true;
    this.test2 = true;

    this.random = Math.floor(Math.random()*this.diceList.length);
    this.random1 = Math.floor(Math.random()*this.diceList.length);
    this.random2 = Math.floor(Math.random()*this.diceList.length);

    this.valeur = this.random + 1;
    this.valeur1 = this.random1 + 1;
    this.valeur2 = this.random2 + 1;

    this.pTotal = this.valeur + this.valeur1 + this.valeur2;

    if(this.random == this.random1 || this.random == this.random2 || this.random1 == this.random2)
    {

       this.bTotal = 5;

    }
        else
        {

          this.bTotal = 0;
        }

  if(this.random ==  this.random1 && this.random1 == this.random2)
  {

    this.bTotal = 10;

  }

    this.aTotal = this.pTotal + this.bTotal;

    this.total = this.cumul + this.aTotal;

    this.cumul = this.total;

  }

  // Bouton reset doit mettre a 0 le pointage cumulatif en cours
  reset(){

    this.test = false;
    this.test1 = false;
    this.test2 = false;

    this.pTotal = 0;
    this.bTotal = 0;
    this.aTotal = 0;
    this.total = 0;
    this.cumul = 0;

  }

}
