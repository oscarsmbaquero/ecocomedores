import { Component,  EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../../core/services/form.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { comedor } from '../../../../app/utils/mocks/comedor';

@Component({
  selector: 'app-comedor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule ],
  templateUrl: './comedor.component.html',
  styleUrl: '../../formulario.component.css'
})
export class ComedorComponent {
  @Output() totalScoreChange = new EventEmitter<{ source: string, score: number }>();
  comedorform! : FormGroup;

  comedor = comedor;
  message: string = '';
  totalScore = 0;
  labelBackgrounds: { [key: string]: string } = {};
  fieldScores: { [key: string]: number } = {};
  totalScoresByType: { [key: string]: number } = {};

  constructor(
    public sostenibilidadService: FormService,
    private fb: FormBuilder
  ){ }


  ngOnInit(): void {
    this.comedorform = this.fb.group({});
    this.sostenibilidadService.initFormControls(
      this.comedorform,
      this.comedor,
      (name: string, value: any) => this.onDropdownChange(name, value, 'aprovisionamiento') // Define el tipo aquí
    );
  }

  onDropdownChange(name: string, value: any, type: string): void {
    this.sostenibilidadService.onDropdownChange(
      this.comedor,
      name,
      value,
      type, // Pasa el tipo al servicio
      (newTotalScore: number) => {
        this.totalScore = newTotalScore;
        this.message = this.sostenibilidadService.writeMessage(this.totalScore);
        this.totalScoreChange.emit({ source: 'comedor', score: this.totalScore });
      }
    );
  }

  getLabelBackground(name: string): string {
    return this.sostenibilidadService.getLabelBackground(name);
  }

  
  //TODO INTENTAR QUITAR
  onSubmit(): void {
    console.log(this.comedorform.value);
  }



}
