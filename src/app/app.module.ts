import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { GeorgComponent } from './georg/georg.component';
import { LogoComponent } from './congstarlogo/congstarlogo.component';
import { TralalaComponent } from './tralala/tralala.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, GeorgComponent, LogoComponent, TralalaComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { geheimwert = 'H4CK4THON'}
