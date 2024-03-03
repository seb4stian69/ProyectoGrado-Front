// First level importation
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
// Second level importation
import { HamburgerMenuComponent } from '../../components/main/hamburger-menu/hamburger-menu.component';
import { InformationCardComponent } from '../../components/main/information-card/information-card.component';
// Third level importation

@Component({
  selector: 'app-testview',
  standalone: true,
  imports: [HamburgerMenuComponent, InformationCardComponent],
  templateUrl: './testview.component.html',
  styleUrl: './testview.component.scss'
})
export class TestviewComponent {

  router: Router = inject(Router);

  toggleMenu() {
    const div:HTMLElement = document.querySelector('.cardGrid')!;
    div.classList.toggle('original');
  }

  goToView(url:string){
    this.router.navigate([url]);
  }

}
