import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-company',
  templateUrl: './about-company.component.html',
  styleUrls: ['./about-company.component.scss']
})
export class AboutCompanyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Open Company Address in google maps in new browser window
  openAddress(){
    window.open('https://www.google.com/maps/place/GalaxyEuro/@17.5667265,78.4817987,17z/data=!3m1!4b1!4m8!1m2!2m1!1sGalaxy+Euro!3m4!1s0x0:0x794d6a2c38704079!8m2!3d17.5667213!4d78.4839872', "_blank");
  }

}
