import {inject, Component,  OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {  

  primeNgConfig:PrimeNGConfig = inject(PrimeNGConfig);

  ngOnInit(): void {
      this.primeNgConfig.ripple = true;
  }

}
