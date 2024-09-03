import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../core/components/header/header.component";
import { FooterComponent } from "../core/components/footer/footer.component";
import { LogoComponent } from '../shared/components/logo/logo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LogoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecocomedores';

  scrollPosition = 0;
  
   // Método para manejar el evento de scroll
   @HostListener('window:scroll', [])
   onWindowScroll() {
     this.scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
     console.log(this.scrollPosition);
   }
  
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    
  }

}
