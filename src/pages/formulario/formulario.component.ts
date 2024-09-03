import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//mocks
import { aprovisionamiento } from '../../app/utils/mocks/aprovisionamiento';
import { distribucion } from '../../app/utils/mocks/distribucion';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-formulario',
  standalone: true,
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  imports: [CommonModule, ReactiveFormsModule, DropdownModule, ButtonModule]
})
export class FormularioComponent implements OnInit {
  sostenibilidadForm!: FormGroup;
  
  message: string = ''; // Propiedad para almacenar el mensaje

  totalScore= 0;

  aprovisionamiento = aprovisionamiento;
  distribucion = distribucion;
  // Objeto para almacenar colores basados en el nivel seleccionado
  labelBackgrounds: { [key: string]: string } = {};
  fieldScores: { [key: string]: number } = {};

  
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sostenibilidadForm = this.fb.group({});
    this.addControls(this.aprovisionamiento);
    this.aprovisionamiento.forEach(item => {
      this.sostenibilidadForm.get(item.name)?.valueChanges.subscribe(value => {
        this.onDropdownChange(item.name, value);
      });
    });
    this.addControls(this.distribucion);
    this.aprovisionamiento.forEach(item => {
      this.sostenibilidadForm.get(item.name)?.valueChanges.subscribe(value => {
        this.onDropdownChange(item.name, value);
      });
    });
  }

  

  addControls(indicadores: any) {
    indicadores.forEach((indicador:any) => {
      this.sostenibilidadForm.addControl(indicador.name, this.fb.control('', Validators.required));
    });
  }
   /**
    * Método para manejar los cambios
    * @param name 
    * @param value 
    */
  //  onDropdownChange(name: string, value: any): void {
  //   console.log('Campo:', name, 'Valor seleccionado:', value);

  //   const selectedItem = this.aprovisionamiento.find(item => item.name === name);
  //   console.log(selectedItem);
  //   if (selectedItem) {
  //     // Buscar la opción seleccionada dentro del item
  //     const selectedOption = selectedItem.options.find(option => option.value === value.value);
  
  //     if (selectedOption) {
  //       // Sumar el puntaje de la opción seleccionada al puntaje total
  //       this.totalScore += selectedOption.score;
  //       console.log('Puntaje total:', this.totalScore);
  //     }
  //   }
    


  //   switch(value.value) {
  //     case 'nivel1':
  //       console.log(value,'asasasa');        
  //       this.labelBackgrounds[name] = 'red';
  //       break;
  //     case 'nivel2':
  //       this.labelBackgrounds[name] = 'orange';
  //       break;
  //     case 'nivel3':
  //       this.labelBackgrounds[name] = 'orange';
  //       break;
  //     case 'nivel4':
  //       this.labelBackgrounds[name] = 'lightgreen';
  //       break;
  //     case 'nivel5':
  //       this.labelBackgrounds[name] = 'green';
  //       break;
  //     default:        
  //       this.labelBackgrounds[name] = 'black'; // Color por defecto
  //   }
  // }
  onDropdownChange(name: string, value: any): void {
    console.log('Campo:', name, 'Valor seleccionado:', value);  
    // Buscar el item correspondiente por el nombre
    const selectedItem = this.aprovisionamiento.find(item => item.name === name);  
    if (selectedItem) {
      // Buscar la opción seleccionada dentro del item
      const selectedOption = selectedItem.options.find(option => option.value === value.value);
  
      if (selectedOption) {
        // Obtener el puntaje de la opción seleccionada
        const newScore = selectedOption.score || 0;  
        // Obtener el puntaje anterior del campo, si existe
        const oldScore = this.fieldScores[name] || 0;  
        // Ajustar el puntaje total
        this.totalScore += newScore - oldScore;  
        // Actualizar el puntaje del campo en fieldScores
        this.fieldScores[name] = newScore;  
        console.log('Puntaje total:', this.totalScore);
        // Actualizar el mensaje basado en la puntuación total
        this.message = this.writeMessage(this.totalScore);
        this.getBackgroundColor(this.totalScore);        
      }
    }  
    // Cambiar el color del fondo según el valor seleccionado
    switch (value.value) {
      case 'nivel1':
        this.labelBackgrounds[name] = 'red';
        break;
      case 'nivel2':
        this.labelBackgrounds[name] = 'orange';
        break;
      case 'nivel3':
        this.labelBackgrounds[name] = 'orange';
        break;
      case 'nivel4':
        this.labelBackgrounds[name] = 'lightgreen';
        break;
      case 'nivel5':
        this.labelBackgrounds[name] = 'green';
        break;
      default:
        this.labelBackgrounds[name] = 'black'; // Color por defecto
    }
  }

  writeMessage(value: number): string {
    switch (true) {
      case (value < 30):
        return "UF!! SE REQUIEREN CAMBIOS INMEDIATOS DE FUNCIONAMIENTO";        
      case (value >= 33 && value <=56):
        return "PARECE QUE HABRÁ QUE PONERSE A LA OBRA, PARA MEJORAR LA SITUACIÓN";        
      case (value >= 58 && value <=70):
          return "CUIDANDO LOS DETALLES, MEJORARÉIS LA SOSTENIBILIDAD DEL CENTRO.!ANIMO!";       
      default:
        return "BUEN TRABAJO! ESTAIS A PUNTO DE ALCANZAR UNA SOSTENIBILIDAD MÁXIMA";
    }
  }

  getBackgroundColor(score: number): string {
    if (score < 30) {
      return 'red'; // Fondo rojo para puntajes bajos
    } else if (score >= 30 && score < 60) {
      return 'orange'; // Fondo naranja para puntajes medios
    } else if (score >= 60 && score < 90) {
      return 'lightgreen'; // Fondo verde claro para puntajes buenos
    } else {
      return 'green'; // Fondo verde para puntajes altos
    }
  }
  onSubmit(): void {
    console.log(this.sostenibilidadForm.value);
  }
}
