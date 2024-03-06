// First level importation
import { Component, EventEmitter, Input, Output } from '@angular/core';
// Second level importation
import { TestCardData } from '../../../../interfaces/application-data/testcarddata';
// Third level importation


@Component({
  selector: 'test-card',
  standalone: true,
  imports: [],
  templateUrl: './test-card.component.html',
  styleUrl: './test-card.component.scss'
})
export class TestCardComponent {

  @Input() cardData!:TestCardData;
  @Output() gotoTestEventEmitter = new EventEmitter<string>();;

  imgAssetsPath:string = "../../../../../assets/images";

  goToTest(testId:string):void{
    this.gotoTestEventEmitter.emit(testId)
  }

}
