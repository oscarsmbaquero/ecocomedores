import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
//mocks
import { aprovisionamiento } from '../../app/utils/mocks/aprovisionamiento';
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

  totalScore= 0;

  aprovisionamiento = aprovisionamiento;
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

  onSubmit(): void {
    console.log(this.sostenibilidadForm.value);
  }
}
