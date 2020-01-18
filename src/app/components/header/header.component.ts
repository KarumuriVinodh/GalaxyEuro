import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(location: Location, router: Router) { 
    router.events.subscribe((val) => {

      let element = document.querySelector('.navbar');

      if(location.path() != ''){
        element.classList.add('sticky-top' );
      } else {
        element.classList.remove('sticky-top' );
      }
    });
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('sticky-top' );
    } else {
      element.classList.remove('sticky-top' );
    }
  }


  ngOnInit() { }
}
