import { Component, ElementRef, Input, OnInit, Renderer2, inject } from '@angular/core';
import { SafeHtmlPipe } from '../../../../core/pipes/domsanitizer';


@Component({
  selector: 'app-information-card',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './information-card.component.html',
  styleUrl: './information-card.component.scss'
})
export class InformationCardComponent{

  @Input() title: string = "Examen:";
  @Input() description: string = "Razonamiento matematico";

}
