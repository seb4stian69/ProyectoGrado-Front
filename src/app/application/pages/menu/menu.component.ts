// First level importation
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
// Second level importation
import { HamburgerMenuComponent } from '../../components/main/hamburger-menu/hamburger-menu.component';
import { TestCardComponent } from '../../components/main/test-card/test-card.component';
import { TestCardData } from '../../../interfaces/application-data/testcarddata';
// Third level importation


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HamburgerMenuComponent, TestCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  router: Router = inject(Router);

  testCardList: TestCardData[] = [
    {
      title: "Test de pensamiento critico",
      srcImg: "ImgTest.png",
      secondTitle: "Cuestionario de Reflexion Critica",
      testID: "321"
    }
  ]

  toggleMenu() {
    const div:HTMLElement = document.querySelector('.cardGrid')!;
    div.classList.toggle('original');
  }

  goToTest(id:string){
    this.router.navigate([`/tomakexam/123/${id}`]);
  }

  goToView(url:string){
    this.router.navigate([url]);
  }

}
