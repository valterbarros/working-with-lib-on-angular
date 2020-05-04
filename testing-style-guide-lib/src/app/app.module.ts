import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LibStyleGuideModule } from 'lib-style-guide';
import { AppComponent } from './app.component';
console.log(LibStyleGuideModule);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibStyleGuideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
