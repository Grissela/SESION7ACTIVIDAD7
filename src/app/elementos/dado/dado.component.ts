import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})
export class DadoComponent implements OnInit {

  constructor() { }

  min:number=1;
  max:number=6;

  random!:number;
  aleatorio(){
    //para que sea del 1 al 6, con un maximo de 5 para que agregue 1
    this.random = Math.round(Math.random()*5)+1;
    
    // this.random = Math.round(Math.random()*(((this.max - this.min + this.min) + this.min)));/*Valor maximo y valor minimo el minimo le agregue 1*/ 

  }
  ngOnInit(): void {
  }

}
