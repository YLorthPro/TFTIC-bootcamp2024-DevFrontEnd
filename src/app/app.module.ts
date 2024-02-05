import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './demo/home/home.component';
import { ContactComponent } from './demo/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BidingsComponent } from './demo/bidings/bidings.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DirectivesComponent } from './demo/directives/directives.component';
import { InputOutputComponent } from './demo/directives/input-output/input-output.component';
import { DemoServicesComponent } from './demo/demo-services/demo-services.component';
import { JustePrixComponent } from "./demo/juste-prix/juste-prix.component";
import {ErreurComponent} from "./demo/juste-prix/erreur/erreur.component";
import { ConnectionAPIComponent } from './demo/connection-api/connection-api.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    NavbarComponent,
    BidingsComponent,
    DirectivesComponent,
    InputOutputComponent,
    DemoServicesComponent,
    JustePrixComponent,
    ErreurComponent,
    ConnectionAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
