import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { CellComponent } from './cell/cell.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { BattleShipService } from './battle-ship.service';
import { ShipComponent } from './ship/ship.component';
import { FieldService } from './field.service';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ShipComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [BattleShipService, FieldService],
  bootstrap: [AppComponent]
})
export class AppModule { }
