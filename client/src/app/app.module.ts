import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { HttpClientModule }   from '@angular/common/http';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { CellComponent } from './cell/cell.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { ShipComponent } from './ship/ship.component';
import { PlayerComponent } from './player/player.component';
import { DisplayComponent } from './display/display.component';
import { ShipsComponent } from './ships/ships.component';
import { BattleShipComponent } from './battle-ship/battle-ship.component';
import { ControllerComponent } from './controller/controller.component';
import { AlertComponent } from './alert/alert.component'

import { FieldService } from './field.service';
import { BattleShipService } from './battle-ship.service';
import { WebsocketService } from './websocket.service';
import { AlertService } from './alert.service'

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ShipComponent,
    PlayerComponent,
    DisplayComponent,
    ShipsComponent,
    BattleShipComponent,
    ControllerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    BattleShipService,
    FieldService, 
    WebsocketService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
