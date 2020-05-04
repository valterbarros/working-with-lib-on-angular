import { NgModule } from '@angular/core';
import { LibStyleGuideComponent } from './lib-style-guide.component';
// import "node_modules/@angular/material/prebuilt-themes/indigo-pink.css";
import { MatSliderModule } from '@angular/material/slider';


console.log(MatSliderModule);

@NgModule({
  declarations: [LibStyleGuideComponent],
  imports: [
    MatSliderModule,
  ],
  providers: [],
  exports: [LibStyleGuideComponent]
})
export class LibStyleGuideModule { }
