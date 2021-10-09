import { Route } from '@angular/compiler/src/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number | undefined;
  @Output() heroeSeleccionado: EventEmitter<number> = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  verHeroe = (): void => {
    this.heroeSeleccionado?.emit(this.index);
    this.router.navigate(['/heroe', this.index])
  }
}