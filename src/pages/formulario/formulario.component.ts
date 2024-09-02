import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
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

  indicadoresBloque1 = [
    {
      name: 'campo1_b1',
      label: '1. CERTIFICADO DE PRODUCCIÓN ECOLÓGICA',
      labelsecond: '¿Hay alimentos de producción ecologica en el menú?',
      options: [
        { label: 'Ningún pescado utilizado en el menú está asociado a algún certificado de calidad', value: 'nivel1' },
        { label: 'Al menos el 5% de los pescados servidos en el menú tienen algún certificado de calidad', value: 'nivel2' },
        { label: 'Al menos el 20% de los pescados del menú tienen algún certificado de calidad', value: 'nivel3' },
        { label: 'Al menos el 35% de los pescados del menú tienen algún certificado de calidad', value: 'nivel4' },
        { label: 'Más del 50% del pescado utilizado en el menú está asociado a algún certificado de calidad', value: 'nivel5' }
      ]
    },
    {
      name: 'campo2_b1',
      label: '2. COMPROMISO CON LA GANADERIA EXTENSIVA',
      labelsecond: '¿Los alimentos de origen animal proceden de ganadería extensiva?',
      options: [
        { label: 'Ningún producto utilizado en el menú proviene del comercio justo o de alguna iniciativa cooperativa', value: 'nivel1' },
        { label: 'Al menos el 5% de los productos del menú provienen de comercio justo o iniciativa cooperativa', value: 'nivel2' },
        { label: 'Al menos el 20% de los productos del menú provienen de comercio justo o iniciativa cooperativa', value: 'nivel3' },
        { label: 'Al menos el 35% de los productos del menú provienen de comercio justo o iniciativa cooperativa', value: 'nivel4' },
        { label: 'Más del 50% de los productos utilizados en el menú provienen del comercio justo o de alguna iniciativa cooperativa', value: 'nivel5' }
      ]
    },
    // Agrega los otros campos de manera similar
  ];

  indicadoresBloque2 = [
    { name: 'campo1_b2', label: '9. CANTIDAD DE ENVASES Y EMBALAJES ', labelsecond:'' ,options: this.createOptions() },
    { name: 'campo2_b2', label: '10. PROPORCIÓN Y TIPO DE P LÁSTICOS UTILIZADOS ', labelsecond:'' ,options: this.createOptions() },
    { name: 'campo3_b2', label: '11. PROPORCIÓN DE EMBALAJES ALUMÍNICOS Y ENLATADOS ', labelsecond:'' ,options: this.createOptions() },
    { name: 'campo5_b2', label: '12. ENERGÍA UTILIZADA POR LOS VEHÍCULOS IMPLICADOS ', labelsecond:'' ,options: this.createOptions() },
    { name: 'campo6_b2', label: '13. KILOMETRAJE RECORRIDO ', labelsecond:'' ,options: this.createOptions() },
  ];

  indicadoresBloque3 = [
    { name: 'campo1_b3', label: '14. ENERGÍA UTILIZADA EN COCINADO Y CONSERVACIÓN ', options: this.createOptions() },
    { name: 'campo2_b3', label: 'Campo 2 Bloque 3', options: this.createOptions() },
    { name: 'campo3_b3', label: 'Campo 3 Bloque 3', options: this.createOptions() },
    { name: 'campo4_b3', label: 'Campo 4 Bloque 3', options: this.createOptions() },
    { name: 'campo5_b3', label: 'Campo 5 Bloque 3', options: this.createOptions() },
    { name: 'campo6_b3', label: 'Campo 6 Bloque 3', options: this.createOptions() },
    { name: 'campo7_b3', label: 'Campo 7 Bloque 3', options: this.createOptions() },
    { name: 'campo8_b3', label: 'Campo 8 Bloque 3', options: this.createOptions() },
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.sostenibilidadForm = this.fb.group({});
    this.addControls(this.indicadoresBloque1);
    this.addControls(this.indicadoresBloque2);
    this.addControls(this.indicadoresBloque3);
  }

  createOptions() {
    return [
      { label: 'Nivel 5', value: 5 },
      { label: 'Nivel 4', value: 4 },
      { label: 'Nivel 3', value: 3 },
      { label: 'Nivel 2', value: 2 },
      { label: 'Nivel 1', value: 1 }
    ];
  }

  addControls(indicadores: any) {
    indicadores.forEach((indicador:any) => {
      this.sostenibilidadForm.addControl(indicador.name, this.fb.control('', Validators.required));
    });
  }

  onSubmit(): void {
    console.log(this.sostenibilidadForm.value);
  }
}
