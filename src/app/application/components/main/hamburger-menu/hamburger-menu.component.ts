// First level importation
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Second level importation
import { HamburgerMenuData } from '../../../../interfaces/application-data/hamburguermenudata';
// Third level importation


@Component({
  selector: 'app-hamburger-menu',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './hamburger-menu.component.html',
  styleUrl: './hamburger-menu.component.scss'
})
export class HamburgerMenuComponent implements OnInit{

  @Output() openCloseEventEmitter = new EventEmitter<boolean>();
  @Output() goToViewEventEmitter = new EventEmitter<string>();
  @Input() activeIndex!: number;

  indexListMenu: HamburgerMenuData[] = [
    {
      index: 0,
      tagName: "Menu",
      imgSrc: "menuLogo"
    },
    {
      index: 1,
      tagName: "Informacion personal",
      imgSrc: "informacionPersonalLogo"
    },
    {
      index: 2,
      tagName: "Test en proceso",
      imgSrc: "testEnProcesoLogo"
    },
    {
      index: 3,
      tagName: "Notificaciones",
      imgSrc: "notificacionesLogo"
    },
    {
      index: 4,
      tagName: "Cerrar sesion",
      imgSrc: "cerrarSesionLogo"
    }
  ]

  imgAssetsPath:string = "../../../../../assets/images";
  activeBackgroundColor: string = '#126052';

  ngOnInit(): void {
    this.toggleMenu();
  }

  toggleMenu() {

    const menu:HTMLElement = document.querySelector('.menu')!;
    menu.classList.toggle('open');
    
    const menuBtns:NodeListOf<HTMLElement> = document.querySelectorAll('.btn-line');

    menuBtns.forEach( btn => {
    
      const booleanValue: boolean = menu.classList.contains('open');
      
      booleanValue?
      btn.style.backgroundColor = '#FFFFFF':
      btn.style.backgroundColor = '#333';

      this.openCloseEventEmitter.emit(booleanValue)
    
    });
    
  }

  setActive(index: number): void {
    
    switch(index){
      case 0: this.goToViewEventEmitter.emit('/menu'); break;
      case 2: this.goToViewEventEmitter.emit('/tomakexam/123/321'); break;
    }

  }

}
