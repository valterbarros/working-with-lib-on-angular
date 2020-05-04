import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <lib-lib-style-guide [name]="'valter barros'"> </lib-lib-style-guide>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'testing-style-guide-lib';
}
