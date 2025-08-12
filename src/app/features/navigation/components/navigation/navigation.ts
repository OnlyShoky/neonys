import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation';
import { ScrollService } from '../../../../core/services/scroll';
import { LanguageSelectorComponent } from '../../../../shared/components/language-selector/language-selector';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule, LanguageSelectorComponent],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class NavigationComponent {
  private translationService = inject(TranslationService);
  private scrollService = inject(ScrollService);
  
  isMobileMenuOpen = false;

  
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  scrollToSection(sectionId: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = this.document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80; // Ajusta según la altura de tu navbar
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

