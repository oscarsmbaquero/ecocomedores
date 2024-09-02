import { Routes } from '@angular/router';
//componentes
import { InstruccionesComponent } from '../pages/instrucciones/instrucciones.component';
import { HojaRutaComponent } from '../pages/hoja-ruta/hoja-ruta.component';
import { IndicadoresComponent } from '../pages/indicadores/indicadores.component';
import { FormularioComponent } from '../pages/formulario/formulario.component';

export const routes: Routes = [
    {
        path: "instrucciones",//raiz de la app
        pathMatch:'full',//coincida nombre exacto
        component: InstruccionesComponent
    },
    {
        path: "hoja-ruta",//raiz de la app
        pathMatch:'full',//coincida nombre exacto
        component: HojaRutaComponent
    },
    {
        path: "indicadores",//raiz de la app
        pathMatch:'full',//coincida nombre exacto
        component: IndicadoresComponent
    },
    {
        path: "form",//raiz de la app
        pathMatch:'full',//coincida nombre exactoa
        component: FormularioComponent
    },
    {
        path: '',
        //canActivate: [AuthGuard],
        component: InstruccionesComponent
      },
      { 
        path: '**', 
        redirectTo: '' 
      }
];
