import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutCompanyComponent } from './components/about-company/about-company.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FooterComponent } from './components/footer/footer.component';
import { DharmaadikaritvaComponent } from './components/dharmaadikaritva/dharmaadikaritva.component';
import { AntarastriyaComponent } from './components/antarastriya/antarastriya.component';
import { ManavaComponent } from './components/manava/manava.component';
import { UttaraditvaComponent } from './components/uttaraditva/uttaraditva.component';
import { JanapadaSevaComponent } from './components/janapada-seva/janapada-seva.component';
// import { GatewayComponent } from './gateway/gateway.component';
import { ExpresswayComponent } from './components/expressway/expressway.component';
import { WindenergyComponent } from './components/windenergy/windenergy.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutCompanyComponent,
    HeaderComponent,
    ContactUsComponent,
    FooterComponent,
    DharmaadikaritvaComponent,
    AntarastriyaComponent,
    ManavaComponent,
    UttaraditvaComponent,
    JanapadaSevaComponent,
    // GatewayComponent,
    ExpresswayComponent,
    WindenergyComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
