import { Component } from '@angular/core';

@Component({
  selector: 'test-card',
  standalone: true,
  imports: [],
  templateUrl: './test-card.component.html',
  styleUrl: './test-card.component.scss'
})
export class TestCardComponent {

  imgAssetsPath:string = "../../../../../assets/images";

}
