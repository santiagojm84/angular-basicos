import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
  pais = {} as Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.getPaisAlpha();
  }

  getPaisAlpha() {
    this.activatedRoute.params.subscribe((params) => {
      const paisId = params['idPais'];
      this.paisService.getPaisAlpha(paisId).subscribe((pais) => {
        this.pais = pais
        console.log(pais);
      });
    });

    /*this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisAlpha(id)),
        tap((resp) => console.log(resp))
      )
      .subscribe((pais) => (this.pais = pais));*/
  }
}
