import { Component, Input,OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-totales',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './totales.component.html',
  styleUrl: './totales.component.css'
})
export class TotalesComponent {

  @Input() visible = false;
  @Input() total = 0;
  messagge = '';

  get modalStyle(): { [key: string]: string } {
    let backgroundColor = 'white'; // Valor por defecto

    if (this.total <= 4) {
      backgroundColor = 'lightcoral';
      this.messagge = 'Mal';
    } else if (this.total > 4 && this.total < 20) {
      backgroundColor = 'lightyellow';
      this.messagge = 'Regular';
    } else if (this.total >= 20) {
      backgroundColor = 'lightgreen';
      this.messagge = 'Bien';
    }

    return { 'background-color': backgroundColor };
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['visible']) {
      console.log('Modal visibility changed:', this.visible);
    }
    if (changes['total']) {
      console.log('Total score changed:', this.total);
    }

}
}
