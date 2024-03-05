// First level importation
import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
// Second level importation
import { HamburgerMenuComponent } from '../../components/main/hamburger-menu/hamburger-menu.component';
import { InformationCardComponent } from '../../components/main/information-card/information-card.component';
import { QuestionsguideCardComponent } from '../../components/main/questionsguide-card/questionsguide-card.component';
import { QuestionViewComponent } from '../../components/main/question-view/question-view.component';
// Third level importation

@Component({
  selector: 'app-testview',
  standalone: true,
  imports: [HamburgerMenuComponent, InformationCardComponent, QuestionsguideCardComponent, QuestionViewComponent],
  templateUrl: './testview.component.html',
  styleUrl: './testview.component.scss'
})
export class TestviewComponent implements OnInit{

  router: Router = inject(Router);

  examDescription!: string;
  remainingDescription!: string;
  questionsNumbers!: number;
  nextExamDescription!: string;

  ngOnInit(): void {
    this.examDescription = "Razonamiento matematico";
    this.remainingDescription = "00:15:30";
    this.questionsNumbers = 30;
    this.nextExamDescription = "Lectura critica";
  }

  toggleMenu = () => {
    const divOne:HTMLElement = document.querySelector('.cardGrid')!;
    const divTwo:HTMLElement = document.querySelector('.questionFrame')!;
    divOne.classList.toggle('original');
    divTwo.classList.toggle('original');
  }

  goToView(url:string){
    this.router.navigate([url]);
  }

}
