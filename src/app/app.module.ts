import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';
import { Content3Component } from './content3/content3.component';
import { Content4Component } from './content4/content4.component';
import { Content5Component } from './content5/content5.component';
import { Content6Component } from './content6/content6.component';
import { Content7Component } from './content7/content7.component';
import { Content8Component } from './content8/content8.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Content1Component,
    Content2Component,
    Content3Component,
    Content4Component,
    Content5Component,
    Content6Component,
    Content7Component,
    Content8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
