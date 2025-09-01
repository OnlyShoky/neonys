import { Component, inject, OnInit } from '@angular/core';
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
export class LanguageSelectorComponent implements OnInit {

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

  private detectDefaultLanguage(): void {
    // Browser language (e.g. "en-US", "es-ES")
    const browserLang = navigator.language.split('-')[0]; // take just "en", "es", "fr"
    console.log('Browser language:', browserLang);

    // Check if supported
    const supported = this.languages.some(lang => lang.code === browserLang);

    console.log('Supported:', supported);

    setTimeout(() => {
      if (supported) {
        this.translationService.setLanguage(browserLang);
      } else {
        this.translationService.setLanguage('en');
      }
    });
  }

  ngOnInit(): void {
    this.detectDefaultLanguage();
  }

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

