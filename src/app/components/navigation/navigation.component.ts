import { Component } from '@angular/core';
import {Ripple} from 'primeng/ripple';
import {StyleClassModule} from 'primeng/styleclass';
import {NgOptimizedImage} from '@angular/common';
import {BadgeModule} from 'primeng/badge';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    Ripple,
    StyleClassModule,
    NgOptimizedImage,
    BadgeModule,
    RouterLink
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
