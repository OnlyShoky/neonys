import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class AboutComponent {
  private translationService = inject(TranslationService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}

