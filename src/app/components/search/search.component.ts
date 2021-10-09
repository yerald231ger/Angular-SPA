import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any = [];
  termino: string = '';

  constructor(private _heroesService: HeroesService,
    private _activateRoute: ActivatedRoute,
    private _router: Router) {
    this._activateRoute.params.subscribe(params => {
      this.heroes = this._heroesService.buscarHeroes(params['termino']);
      this.termino = params['termino'];
    });
  }

  ngOnInit(): void {
  }

  verHeroe = (i: number): void => {
    console.log(i);
    this._router.navigate(['heroe', i]);
  }
}
