import { Component, OnInit } from '@angular/core';
import { PalabraService } from 'src/app/services/palabra.service';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit{
  //conjunto de palabras posibles
  public palabra: string = '';
  public iteracion: any[] = [];
  public turno = 0;
  public nivel: number = 1; // Default difficulty level: 1 (easy)
  public intentos: number = 8; // Default number of attempts: 8 (easy)
  //palabra a adivinar
  public palabras: string[] = [];
  //palabra a adivinar encriptada
constructor (
  public palabraser: PalabraService
) { }
palabraCompleta: boolean = false;

ngOnInit(): void {
 //this.palabras =['maria','carro','canto','lunes','campo','barco','parar','haber','puede','parir','juana','bebes','casas','manos','plato'];
 this.palabraser.get().subscribe((res: any)=>{
  res.forEach((element: any) => {
    this.palabras.push(element.palabra)
  });
 this.palabra = this.palabras[Math.floor(Math.random() * this.palabras.length)];
 this.iteracion = new Array(6).fill('');
 });
 
}
setDifficulty(nivel: number): void {
  this.nivel = nivel;
  switch (this.nivel) {
    case 1:
      this.intentos = 8;
      break;
    case 2:
      this.intentos = 6;
      break;
    case 3:
      this.intentos = 3;
      break;
    default:
      this.intentos = 8;
      break;
  }
  this.iteracion = new Array(this.palabra.length).fill('');
  this.turno = 0;
}
}

