import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PlayerListComponent } from './container/player-list/player-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavbarComponent,
    PlayerListComponent
  ],
  imports: [
    BrowserModule, NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
