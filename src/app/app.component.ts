// app.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor etc.
import { RouterOutlet } from '@angular/router'; // If you're using routing
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    TranslateModule,
    NgxSpinnerModule,
  ], // Add necessary imports for standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  spinner:NgxSpinnerService = inject(NgxSpinnerService);
  spinnerService: SpinnerService=inject(SpinnerService);
  translate: TranslateService = inject(TranslateService);


  ngOnInit() {
    this.translate.setDefaultLang('en'); // Set default language
    this.translate.use('en'); // Use a specific language initially
    this.spinnerService.loading$.subscribe((value:boolean) => {
        if(value)
          this.spinner.show();
        else
          this.spinner.hide();
    });
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

}
