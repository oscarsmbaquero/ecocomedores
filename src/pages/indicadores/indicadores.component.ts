import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indicadores',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './indicadores.component.html',
  styleUrl: './indicadores.component.css'
})
export class IndicadoresComponent {

  productionIndicators = [
    { indicator: 'CERTIFICADO DE PRODUCCIÓN ECOLÓGICA', notes: 'Con posibilidad de certificaciones participativas o sistemas de confianza', page: 18 },
    { indicator: 'COMPROMISO CON LA GANADERIA EXTENSIVA', notes: 'Para los productos de origen animal (lácteos, huevos y carnes)', page: 20 },
    { indicator: 'CERTIFICADO DE PESCA SOSTENIBLE', notes: 'Para todos los productos del mar', page: 23 },
    { indicator: 'PRODUCTOS DE COMERCIO JUSTO / ORIGEN COOPERATIVO', notes: 'Para productos de importación', page: 26 },
    { indicator: 'DENOMINACIONES DOP/IGP', notes: 'Con especial atención a los productos Extremeños', page: 29 },
    { indicator: 'TERRITORIALIDAD DE LOS ALIMENTOS', notes: 'Distinguiendo origen biorregional, nacional e internacional', page: 32 },
    { indicator: 'ESTACIONALIDAD DEL ALIMENTO', notes: 'Para alimentos sujetos a estacionalidad como frutas, verduras, pescados y carnes', page: 36 },
    { indicator: 'FRESCURA DE LOS ALIMENTOS', notes: 'Aplicable a los alimentos susceptibles de ser congelados o/y precocinados', page: 38 }
  ];

  distributionIndicators = [
    { indicator: 'CANTIDAD DE ENVASES Y EMBALAJES', notes: 'Atención en la reducción del uso y la incorporación de reutilizables', page: 40 },
    { indicator: 'PROPORCIÓN Y TIPO DE PLÁSTICOS UTILIZADOS', notes: 'Atención en la sustitución de materiales', page: 42 },
    { indicator: 'PROPORCIÓN DE EMBALAJES ALUMÍNICOS Y ENLATADOS', notes: 'Con atención en la escasez de los materiales implicados. Atención en la sustitución', page: 44 },
    { indicator: 'ENERGÍA UTILIZADA POR LOS VEHÍCULOS IMPLICADOS', notes: 'Con atención en la dependencia de los combustibles fósiles', page: 46 },
    { indicator: 'KILOMETRAJE RECORRIDO', notes: 'Desde el lugar de cocinado hasta el comedor', page: 47 }
  ];

  kitchenProcessingIndicators = [
    { indicator: 'ENERGÍA UTILIZADA EN COCINADO Y CONSERVACIÓN', notes: 'Con un enfoque de transición hacia modelos energéticos descarbonizados', page: 49 },
    { indicator: 'CERTIFICADO AMBIENTAL DE DOTACIÓN', notes: 'En alineación con los Objetivos de Desarrollo Sostenible (7)', page: 54 },
    { indicator: 'CONTROL DE DESPERDICIO ALIMENTARIO', notes: 'En alineación con los Objetivos de Desarrollo Sostenible (12.3)', page: 56 },
    { indicator: 'MATERIAL AUXILIAR UTILIZADO EN COCINA', notes: 'En persecución de la minimización de residuos', page: 58 },
    { indicator: 'MATERIALES DE ENVASADO DE MENUS', notes: 'Con atención en la reducción de los residuos de mayor impacto ambiental', page: 59 },
    { indicator: 'TIPO DE PRODUCTOS DE LIMPIEZA UTILIZADOS', notes: 'Con atención en su toxicidad para la salud de las personas y para el medio ambiente', page: 60 },
    { indicator: 'RECICLAJE DE RESIDUOS', notes: 'Separación de fracciones y posible implicación en programas de compostaje', page: 62 }
  ];

  consumptionIndicators = [
    { indicator: 'VARIEDAD DE ALIMENTOS EN EL MENÚ', notes: 'Referente a la cantidad de ingredientes distintos utilizados', page: 64 },
    { indicator: 'TEMPORALIDAD EN EL MENÚ', notes: 'Variaciones a lo largo del año según la estación', page: 66 },
    { indicator: 'ADECUACIÓN A LA CULTURA GASTRONÓMICA REGIONAL', notes: 'Con atención al valor del patrimonio cultural de la alimentación', page: 67 },
    { indicator: 'MEDIDAS DE AUMENTO DE FRUTAS Y HORTALIZAS', notes: 'Por su importancia para la salud y para la actividad agraria biorregional', page: 69 },
    { indicator: 'MEDIDAS DE REDUCCIÓN Y MEJORA DE LA CALIDAD DE LA PROTEÍNA ANIMAL', notes: 'Con atención en la importancia ambiental de reducir el consumo de carne y en paralelo fomentar la ganadería extensiva', page: 70 },
    { indicator: 'TIPO DE ELECTRICIDAD EN FUNCIONAMIENTO COMEDOR', notes: 'Con un enfoque de transición hacia modelos energéticos descarbonizados', page: 73 },
    { indicator: 'CERTIFICACIÓN AMBIENTAL DE DOTACIÓN DE COMEDOR', notes: 'En alineación con los Objetivos de Desarrollo Sostenible (7)', page: 75 }
  ];

  wasteManagementIndicators = [
    { indicator: 'CONTROL DEL DESPILFARRO ALIMENTARIO', notes: 'En alineación con los Objetivos de Desarrollo Sostenible (12.3)', page: 77 },
    { indicator: 'REUSABILIDAD DEL MENAJE (material auxiliar) UTILIZADO EN COMEDOR', notes: 'En persecución de la minimización de residuos', page: 80 },
    { indicator: 'REDUCCIÓN DEL VOLÚMEN DE RESIDUOS', notes: 'Con atención en la reducción de los residuos de mayor impacto ambiental', page: 81 },
    { indicator: 'SEPARACIÓN DE RESIDUOS', notes: 'Para contribuir a su reciclado', page: 83 },
    { indicator: 'PLANES DE COMPOSTAJE', notes: 'Búsqueda del cierre de ciclos en nutrientes en proyectos de cercanía', page: 84 },
    { indicator: 'PRODUCTOS DE LIMPIEZA EMPLEADOS', notes: 'Con atención en su toxicidad para la salud de las personas y para el medio ambiente', page: 85 }
  ];

  downloadPdf(tipo: string) {

    let pdfUrl = '';
    let nameDownload = ';'

    if (tipo === 'respaldo'){
      pdfUrl = 'assets/pdf/informe_respaldo.pdf'; 
      nameDownload = "informe de respaldo.pdf"
    }else{
       pdfUrl = 'assets/pdf/informe_completo.pdf'; 
       nameDownload = "informe completo.pdf"
    }    

    // Crear un enlace temporal para descargar el PDF
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = nameDownload; // Nombre del archivo que se descargará
    link.click();
  }
}
