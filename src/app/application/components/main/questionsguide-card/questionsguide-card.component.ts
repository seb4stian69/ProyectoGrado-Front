// First level importation
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// Second level importation
// Third level importation


@Component({
  selector: 'app-questionsguide-card',
  standalone: true,
  imports: [],
  templateUrl: './questionsguide-card.component.html',
  styleUrl: './questionsguide-card.component.scss'
})
export class QuestionsguideCardComponent implements OnInit{

  @Input() numberOfQuestions!: number;
  questionsList!: number[];

  ngOnInit(): void {
    this.questionsList = Array.from(
      { length: this.numberOfQuestions },
      (_, index) => index + 1
    );
  }

  toResolved(element:EventTarget | null){
    const pass:HTMLElement = element as HTMLElement;
    pass.classList.toggle('resolved');
  }

}
