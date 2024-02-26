// First level importation
import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// Second level importation
// Third level importation


@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent implements OnInit{

  router: Router = inject(Router);

  imgAssetsPath:string = "../../../../../assets/images";
  activeIndex: number = -1;
  activeBackgroundColor: string = '#126052';

  ngOnInit(): void {
    this.toggleMenu();
  }

  toggleMenu() {

    const menu:HTMLElement = document.querySelector('.menu')!;
    menu.classList.toggle('open');
    
    const menuBtns:NodeListOf<HTMLElement> = document.querySelectorAll('.btn-line');

    menuBtns.forEach( btn => {
      menu.classList.contains('open') ?
      btn.style.backgroundColor = '#FFFFFF':
      btn.style.backgroundColor = '#333';
    });
    
  }

  setActive(index: number): void {
    
    this.activeIndex = index;

    switch(index){
      case 0: this.router.navigate(['/menu']); break;
      case 2: this.router.navigate(['/tomakexam/123/321']); break;
    }

  }

}
