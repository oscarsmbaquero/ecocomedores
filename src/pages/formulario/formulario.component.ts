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

  aprovisionamiento = aprovisionamiento;
  // Objeto para almacenar colores basados en el nivel seleccionado
  labelBackgrounds: { [key: string]: string } = {};

  
  

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
   onDropdownChange(name: string, value: any): void {
    console.log('Campo:', name, 'Valor seleccionado:', value);
    switch(value.value) {
      case 'nivel1':
        console.log(value,'asasasa');
        
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
