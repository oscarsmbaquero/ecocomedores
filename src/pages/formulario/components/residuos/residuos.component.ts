import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../../core/services/form.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { residuos } from '../../../../app/utils/mocks/residuos';

@Component({
  selector: 'app-residuos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule ],
  templateUrl: './residuos.component.html',
  styleUrl: '../../formulario.component.css'
})
export class ResiduosComponent {
  @Output() totalScoreChange = new EventEmitter<{ source: string, score: number }>();
  residuosform! : FormGroup;
  residuos = residuos;
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
    this.residuosform = this.fb.group({});
    this.sostenibilidadService.initFormControls(
      this.residuosform,
      this.residuos,
      (name: string, value: any) => this.onDropdownChange(name, value, 'residuos') // Define el tipo aquí
    );
  }

  onDropdownChange(name: string, value: any, type: string): void {
    this.sostenibilidadService.onDropdownChange(
      this.residuos,
      name,
      value,
      type, // Pasa el tipo al servicio
      (newTotalScore: number) => {
        this.totalScore = newTotalScore;
        this.message = this.sostenibilidadService.writeMessage(this.totalScore);
        this.totalScoreChange.emit({ source: 'residuos', score: this.totalScore });
      }
    );
  }

  getLabelBackground(name: string): string {
    return this.sostenibilidadService.getLabelBackground(name);
  }

  
  //TODO INTENTAR QUITAR
  onSubmit(): void {
    console.log(this.residuosform.value);
  }
}
