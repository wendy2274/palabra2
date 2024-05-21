import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letra',
  templateUrl: './letra.component.html',
  styleUrls: ['./letra.component.sass']
})
export class LetraComponent {
  @Input() letra: string = '';
  miLetra: string = '';

  letraCambiada(): void {
    if (this.miLetra.length > 1) {
      this.miLetra = this.miLetra.slice(0, 1);
    }
  }
}