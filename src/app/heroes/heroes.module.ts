import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeCompoenet } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations:[//components
        HeroeCompoenet,
        ListadoComponent
    ],
    exports:[//cnmponents a exportar
        ListadoComponent
    ],
    imports:[//modulos a importar: para más funcionalidad
        CommonModule
    ],
    providers:[]//para los servicios
})
export class HeroesModule{

}