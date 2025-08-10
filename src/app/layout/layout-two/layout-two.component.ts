import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-layout-two',
  imports: [
    RouterModule,
    FooterComponent
],
  templateUrl: './layout-two.component.html',
  styleUrl: './layout-two.component.css'
})
export class LayoutTwoComponent {

}
