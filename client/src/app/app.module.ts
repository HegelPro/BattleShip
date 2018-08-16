import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { CellComponent } from './cell/cell.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { PlayingAreaComponent } from './playing-area/playing-area.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    CellComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    PlayingAreaComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
