// app.component.ts
import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor etc.
import { RouterOutlet } from '@angular/router'; // If you're using routing

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule], // Add necessary imports for standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.translate.setDefaultLang('en'); // Set default language
    this.translate.use('en'); // Use a specific language initially
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}
