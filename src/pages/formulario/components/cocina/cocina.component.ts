import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../../core/services/form.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { cocina } from '../../../../app/utils/mocks/cocina';
@Component({
  selector: 'app-cocina',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule ],
  templateUrl: './cocina.component.html',
  styleUrl: '../../formulario.component.css'
})
export class CocinaComponent {
  @Output() totalScoreChange = new EventEmitter<{ source: string, score: number }>();
  cocinaform! : FormGroup;

  cocina = cocina;

  message: string = '';
  totalScore = 0;
  // labelBackgrounds: { [key: string]: string } = {};
  // fieldScores: { [key: string]: number } = {};
  totalScoresByType: { [key: string]: number } = {};

  constructor(
    public sostenibilidadService: FormService,
    private fb: FormBuilder
  ){ }

  ngOnInit(): void {
    this.cocinaform = this.fb.group({});
    this.sostenibilidadService.initFormControls(
      this.cocinaform,
      this.cocina,
      (name: string, value: any) => this.onDropdownChange(name, value, 'cocina') // Define el tipo aquí
    );
  }

  onDropdownChange(name: string, value: any,  type: string): void {
    this.sostenibilidadService.onDropdownChange(
      this.cocina,
      name,
      value,
      type,
      (newTotalScore: number) => {
        this.totalScore = newTotalScore;
        this.message = this.sostenibilidadService.writeMessage(this.totalScore);
        this.totalScoreChange.emit({ source: 'cocina', score: this.totalScore });
      }
    );
  }

  getLabelBackground(name: string): string {
    return this.sostenibilidadService.getLabelBackground(name);
  }

  
  //TODO INTENTAR QUITAR
  onSubmit(): void {
    console.log(this.cocinaform.value);
  }
}
