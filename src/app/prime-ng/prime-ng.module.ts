import {ButtonModule} from 'primeng/button';
import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';




@NgModule({
  exports:[MenubarModule, CardModule, FieldsetModule, ButtonModule]
})
export class PrimeNgModule { }
