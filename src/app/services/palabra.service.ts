import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {
 public palabras: string[]  = []
  constructor() { }
  get() {
  return this.palabras
 }
}
