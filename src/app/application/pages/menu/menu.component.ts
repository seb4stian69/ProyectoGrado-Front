// First level importation
import { Component } from '@angular/core';
// Second level importation
import { HamburgerMenuComponent } from '../../components/main/hamburger-menu/hamburger-menu.component';
// Third level importation


@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [HamburgerMenuComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
