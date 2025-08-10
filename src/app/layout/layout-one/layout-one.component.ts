import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from "@angular/router";
import { FooterComponent } from "../footer/footer.component";
import { ROUTES } from '../../shared/shared.constants';

@Component({
  selector: 'app-layout-one',
  imports: [
    RouterModule,
    RouterOutlet,
    FooterComponent
],
  templateUrl: './layout-one.component.html',
  styleUrl: './layout-one.component.css'
})
export class LayoutOneComponent {
  routes=ROUTES;
}
