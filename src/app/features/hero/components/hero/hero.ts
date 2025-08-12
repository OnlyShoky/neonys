import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation';
import { ScrollService } from '../../../../core/services/scroll';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class HeroComponent {
  private translationService = inject(TranslationService);
  private scrollService = inject(ScrollService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  scrollToSection(sectionId: string): void {
    this.scrollService.scrollToSection(sectionId);
  }
}

