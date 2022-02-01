import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // Alternative Options:- '[app-root]' -> <div app-root></div>, '.app-root' -> <div class="app-root"></div>
  templateUrl: './app.component.html', // template: `<h1>Hello World</h1>`
  styleUrls: ['./app.component.css'] // styles: [`h1 { color: red; }`]
})
export class AppComponent {
  title = 'ang_v13';
}
