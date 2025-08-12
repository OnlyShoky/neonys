import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss'
})
export class HowItWorksComponent {
  private translationService = inject(TranslationService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}

