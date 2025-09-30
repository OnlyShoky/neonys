import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translation';
import { Meta, Title } from '@angular/platform-browser';
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

  // inside your component
  private meta = inject(Meta);
  private title = inject(Title);

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
    this.setSEOTags(languageCode);
    
  }

  private setSEOTags(languageCode: string): void {
    if (languageCode === 'en') {
      this.title.setTitle('Neonys | Future-Proof Automation & AI Solutions');
      this.meta.updateTag({ name: 'title', content: 'Neonys | Future-Proof Automation & AI Solutions' });
      this.meta.updateTag({ name: 'description', content: 'Neonys empowers businesses with automation, AI-driven solutions, and digital transformation strategies to optimize efficiency and stay ahead of the competition.' });
      this.meta.updateTag({ name: 'keywords', content: 'Neonys, automation, AI solutions, business automation, digital transformation, industry 4.0, process optimization' });
    }

    if (languageCode === 'fr') {
      this.title.setTitle('Neonys | Solutions d’automatisation et d’IA pour l’avenir');
      this.meta.updateTag({ name: 'title', content: 'Neonys | Solutions d’automatisation et d’IA pour l’avenir' });
      this.meta.updateTag({ name: 'description', content: 'Neonys aide les entreprises à automatiser et optimiser leurs processus grâce à l’IA et la transformation digitale, pour plus d’efficacité et de compétitivité.' });
      this.meta.updateTag({ name: 'keywords', content: 'Neonys, automatisation, solutions IA, transformation digitale, optimisation des processus, industrie 4.0' });
    }

    if (languageCode === 'es') {
      this.title.setTitle('Neonys | Soluciones de Automatización e IA para el Futuro');
      this.meta.updateTag({ name: 'title', content: 'Neonys | Soluciones de Automatización e IA para el Futuro' });
      this.meta.updateTag({ name: 'description', content: 'Neonys ayuda a las empresas a transformar sus procesos con automatización, inteligencia artificial y estrategias digitales para aumentar la eficiencia y la innovación.' });
      this.meta.updateTag({ name: 'keywords', content: 'Neonys, automatización, soluciones IA, transformación digital, optimización de procesos, industria 4.0' });
    }
  }

}

