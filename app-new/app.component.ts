import { Component } from '@angular/core';

import './rxjs-operators';
import { CharacterService } from './characters/character.service';

@Component({
  selector: 'my-app',
  template: `
    <a [routerLink]="['/dashboard']">Dashboard</a>
    <a [routerLink]="['/characters']">Characters</a>
    <a [routerLink]="['/language-notes']">Language notes</a>
    <a [routerLink]="['/new-language-note']">New language note</a>
    <router-outlet></router-outlet>
    `
})
export class AppComponent { }
