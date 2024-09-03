import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarService } from '../../services/navbar.service';
import { Subscription } from 'rxjs';

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
   selectedOption: string ='form';
   private subscription: Subscription = new Subscription;



  constructor(
    private navbarService: NavbarService,
  ){}

  ngOnInit(): void {
    this.subscription = this.navbarService.selectedOption$.subscribe(option => {
      this.selectedOption = option;
      console.log(this.selectedOption);
      
    });
    
  }


toggleNavbar() {
  this.navbarService.collapseNavbar();
}

selectOption(option: string) {
  this.selectedOption = option;
  this.navbarService.setSelectedOption(option);
  this.toggleNavbar();
}
currentTheme: any;

}
