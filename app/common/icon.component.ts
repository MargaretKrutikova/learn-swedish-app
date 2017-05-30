import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'svg-icon',
  template: `<svg role="img" [ngClass]="[iconSpecificClass]" class="icon">
                <use [attr.xlink:href]="iconUrl"></use>
              </svg>`
})

export class IconComponent {
    static readonly SVG_SPRITE_PATH = "./sprite/sprite.svg";
    iconUrl: string;
    iconSpecificClass: string;

    @Input()
    set name(val: string) {
        this.iconUrl = `${IconComponent.SVG_SPRITE_PATH}#${val}`;
        this.iconSpecificClass = `icon--${val}`;
    }
}