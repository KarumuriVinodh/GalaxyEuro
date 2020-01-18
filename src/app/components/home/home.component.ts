import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var Typewriter:any; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const instance = new Typewriter('#typewriter', {
      strings: ['SEZ’s, Customs and GST', 'India entry assistance, Market to go and OutBound', 'CSR','IR & HR Activity','Civil Services Magazine'],
      autoStart: true,
      loop: true,
    });

  }

  scroll(el: HTMLElement) {
    // el.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    // setTimeout(() => {
    //   window.scrollBy(0,-80)
    //   }, 100);

const y = el.getBoundingClientRect().top + window.pageYOffset - 80;

window.scrollTo({top: y, behavior: 'smooth'});
}

}
