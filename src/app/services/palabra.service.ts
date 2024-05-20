import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'

})
export class PalabraService {
 public palabras: string[]  = []
  constructor(
    public http: HttpClient
  ) { }
  get(){
  return this.http.get('http://localhost:3000/palabras');
   }
   getRandomWord(nivel: number): string {
    const words = this.palabras.filter(
      (word) => word.length === nivel * 2 - 2
    );
    return words[Math.floor(Math.random() * words.length)];
  }
} 
  
