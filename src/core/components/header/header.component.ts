import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

   /**
   * subrayado de opcion seleccionada
   */
   selectedOption: string = '';



  constructor(
    private navbarService: NavbarService,
  ){

  }


toggleNavbar() {
  this.navbarService.collapseNavbar();
}

selectOption(option: string) {
  this.selectedOption = option;
  this.toggleNavbar();
}
currentTheme: any;

}
