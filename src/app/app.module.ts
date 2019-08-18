import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DataService } from './services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsSliderComponent } from './cards-slider/cards-slider.component';
import { CardsFormComponent } from './cards-form/cards-form.component';
import { VirtualPhoneComponent } from './virtual-phone/virtual-phone.component';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsSliderComponent,
    CardsFormComponent,
    VirtualPhoneComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
