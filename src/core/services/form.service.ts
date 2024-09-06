import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private labelBackgrounds: { [key: string]: string } = {};
  private fieldScores: { [key: string]: number } = {};
  private totalScore = 0;

  constructor(private fb: FormBuilder) {}

  initFormControls(form: FormGroup, items: any[], onChange: (name: string, value: any) => void) {
    items.forEach(item => {
      form.addControl(item.name, this.fb.control('', Validators.required));
      form.get(item.name)?.valueChanges.subscribe(value => {
        onChange(item.name, value);
      });
    });
  }

  onDropdownChange(
    items: any[],
    name: string,
    value: any,
    updateScoreCallback: (totalScore: number) => void
  ): void {    
    const selectedItem = items.find(item => item.name === name);
    if (selectedItem) {
      const selectedOption = selectedItem.options.find((option: { value: any; }) => option.value === value.value);

      if (selectedOption) {
        const newScore = selectedOption.score || 0;
        const oldScore = this.fieldScores[name] || 0;
        this.totalScore += newScore - oldScore;
        this.fieldScores[name] = newScore;
        updateScoreCallback(this.totalScore);
      }
    }

    this.updateLabelBackground(name, value.value);
  }

  private updateLabelBackground(name: string, value: string) {
    switch (value) {
      case 'nivel1':
        this.labelBackgrounds[name] = 'lightcoral';
        break;
      case 'nivel2':
        this.labelBackgrounds[name] = 'burlywood';
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
        this.labelBackgrounds[name] = 'black';
    }
  }

  getLabelBackground(name: string): string {
    return this.labelBackgrounds[name] || 'black';
  }

  writeMessage(value: number): string {    
    switch (true) {
      case value < 30:
        return "UF!! SE REQUIEREN CAMBIOS INMEDIATOS DE FUNCIONAMIENTO";
      case value >= 33 && value <= 56:
        return "PARECE QUE HABRÁ QUE PONERSE A LA OBRA, PARA MEJORAR LA SITUACIÓN";
      case value >= 58 && value <= 70:
        return "CUIDANDO LOS DETALLES, MEJORARÉIS LA SOSTENIBILIDAD DEL CENTRO.!ANIMO!";
      default:
        return "BUEN TRABAJO! ESTAIS A PUNTO DE ALCANZAR UNA SOSTENIBILIDAD MÁXIMA";
    }
  }

  getBackgroundColor(score: number): string {    
    if (score < 30) {
      return 'red';
    } else if (score >= 30 && score < 60) {
      return 'orange';
    } else if (score >= 60 && score < 90) {
      return 'lightgreen';
    } else {
      return 'green';
    }
  }
}
