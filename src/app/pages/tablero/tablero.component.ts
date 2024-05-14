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
  //palabra a adivinar
  public palabras: string[] = [];
  //palabra a adivinar encriptada
constructor (
  public palabraser: PalabraService
) { }
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
}
