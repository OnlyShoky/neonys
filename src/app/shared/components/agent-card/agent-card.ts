import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translation';
import { ScrollService } from '../../../../../src/app/core/services/scroll';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {  Inject, PLATFORM_ID } from '@angular/core';




export interface Agent {
  name: string;
  titleKey: string;
  subtitleKey: string;
  descKey: string;
  icon: string;
  color: string;
  hoverColor: string;
  image: string;
  workflow: string;
}

@Component({
  selector: 'app-agent-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agent-card.html',
  styleUrl: './agent-card.scss'
})
export class AgentCardComponent {
  @Input() agent!: Agent;
  @Output() getAgent = new EventEmitter<Agent>();
  private scrollService = inject(ScrollService);

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  

  private translationService = inject(TranslationService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  onGetAgent(): void {
    this.getAgent.emit(this.agent);
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
}

