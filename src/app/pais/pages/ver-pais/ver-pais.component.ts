import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
    private paisService: PaisService) { }

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(({ id }) => {
        console.log(id);
        this.paisService.getPaisPorAlpha(id).subscribe(
          (pais:Country[]) => {
            console.log(pais[0]);            
          });
      })
  }

}
