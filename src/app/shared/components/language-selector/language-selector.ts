import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translation';

interface Language {
  code: string;
  name: string;
  flag: string;
}

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-selector.html',
  styleUrl: './language-selector.scss'
})
export class LanguageSelectorComponent {
  private translationService = inject(TranslationService);

  languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      flag: 'https://flagcdn.com/w20/gb.png'
    },
    {
      code: 'es',
      name: 'Español',
      flag: 'https://flagcdn.com/w20/es.png'
    },
    {
      code: 'fr',
      name: 'Français',
      flag: 'https://flagcdn.com/w20/fr.png'
    }
  ];

  getCurrentLanguageCode(): string {
    return this.translationService.getCurrentLanguage().toUpperCase();
  }

  getCurrentFlag(): string {
    const currentLang = this.translationService.getCurrentLanguage();
    const language = this.languages.find(lang => lang.code === currentLang);
    return language?.flag || this.languages[0].flag;
  }

  changeLanguage(languageCode: string): void {
    this.translationService.setLanguage(languageCode);
  }
}

