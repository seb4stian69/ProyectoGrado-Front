import { Component } from '@angular/core';

@Component({
  selector: 'app-question-view',
  standalone: true,
  imports: [],
  templateUrl: './question-view.component.html',
  styleUrl: './question-view.component.scss'
})
export class QuestionViewComponent {

  questionImgUrl:string = "../../../../../assets/images/QuestionTestImg.png";
  questionParagraph:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat, diam eu elementum hendrerit, diam augue vehicula elit, vitae fringilla nulla nibh at lorem. Cras quis erat ligula. Duis ornare risus quis nisl imperdiet maximus. Curabitur iaculis ante sed velit condimentum, at sodales risus accumsan. Nam placerat tincidunt leo, nec ullamcorper orci egestas vel. Morbi quis iaculis nulla, eu accumsan dolor. Pellentesque et bibendum lectus. Nullam efficitur purus nunc, et facilisis est consectetur eget. Integer id urna efficitur, fermentum quam sit amet, imperdiet nibh. Ut sodales magna nec tempor pretium. Vivamus congue libero nec auctor efficitur. In hac habitasse platea dictumst. Vestibulum eleifend pulvinar arcu, in vulputate erat fringilla in.";
  question:string = "¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?";

}
