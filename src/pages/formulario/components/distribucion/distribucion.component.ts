import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../../core/services/form.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { distribucion } from '../../../../app/utils/mocks/distribucion';

@Component({
  selector: 'app-distribucion',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule ],
  templateUrl: './distribucion.component.html',
  styleUrl: '../../formulario.component.css'
})
export class DistribucionComponent {

  @Output() totalScoreChange = new EventEmitter<{ source: string, score: number }>();
  distribucionform! : FormGroup;

  distribucion = distribucion;
  totalScoresByType: { [key: string]: number } = {};

  message: string = '';
  totalScore = 0;
  labelBackgrounds: { [key: string]: string } = {};
  fieldScores: { [key: string]: number } = {};

  constructor(
    public sostenibilidadService: FormService,
    private fb: FormBuilder
  ){ }

  ngOnInit(): void {
    this.distribucionform = this.fb.group({});
    this.sostenibilidadService.initFormControls(
      this.distribucionform,
      this.distribucion,
      (name: string, value: any) => this.onDropdownChange(name, value, 'distribucion') // Define el tipo aquí
    );
  }
  onDropdownChange(name: string, value: any, type: string): void {
    this.sostenibilidadService.onDropdownChange(
      this.distribucion,
      name,
      value,
      type, // Pasa el tipo al servicio
      (newTotalScore: number) => {
        this.totalScore = newTotalScore;
        this.message = this.sostenibilidadService.writeMessage(this.totalScore);
        this.totalScoreChange.emit({ source: 'distribucion', score: this.totalScore });
      }
    );
  }

  getLabelBackground(name: string): string {
    return this.sostenibilidadService.getLabelBackground(name);
  }

  
  //TODO INTENTAR QUITAR
  onSubmit(): void {
    console.log(this.distribucionform.value);
  }

}
