import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlideMenuModule } from 'cuppa-ng2-slidemenu/cuppa-ng2-slidemenu';

import { AppComponent } from './app.component';
import { MCRTopBarModule } from 'mcr-components';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DatabaseComponent } from './database/database.component';
import { QueryComponent } from './query/query.component';
import { SeparatorComponent } from './separator/separator.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    DatabaseComponent,
    QueryComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule,
    MCRTopBarModule,
    SlideMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
