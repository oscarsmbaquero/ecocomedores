import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from '../../../../core/services/form.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { aprovisionamiento } from '../../../../app/utils/mocks/aprovisionamiento';


@Component({
  selector: 'app-aprovisionamiento',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './aprovisionamiento.component.html',
  styleUrl: '../../formulario.component.css',
})
export class AprovisionamientoComponent {
  sostenibilidadForm!: FormGroup;

  //@Output() totalScoreChange = new EventEmitter<number>();
  @Output() totalScoreChange = new EventEmitter<{ source: string, score: number }>();
  aprovisionamiento = aprovisionamiento;

  message: string = '';
  totalScore = 0;
  labelBackgrounds: { [key: string]: string } = {};
  fieldScores: { [key: string]: number } = {};

  constructor(
    public sostenibilidadService: FormService,
    private fb: FormBuilder
  ){ }

  ngOnInit(): void {
    this.sostenibilidadForm = this.fb.group({});
    this.sostenibilidadService.initFormControls(
      this.sostenibilidadForm,
      this.aprovisionamiento,
      this.onDropdownChange.bind(this)
    );
  }
  onDropdownChange(name: string, value: any): void {
    this.sostenibilidadService.onDropdownChange( this.aprovisionamiento, name, value, (newTotalScore: number) => {
        this.totalScore = newTotalScore;
        this.message = this.sostenibilidadService.writeMessage(this.totalScore);
        this.totalScoreChange.emit({ source: 'aprovisionamiento', score: this.totalScore });
      }
    );
  }

  getLabelBackground(name: string): string {
    return this.sostenibilidadService.getLabelBackground(name);
  }

  // getBackgroundColor(score: number): string {
  //   return this.sostenibilidadService.getBackgroundColor(score);
  // }


 

  //TODO INTENTAR QUITAR
  onSubmit(): void {
    console.log(this.sostenibilidadForm.value);
  }
}

