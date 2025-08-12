import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../core/services/translation';

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

  private translationService = inject(TranslationService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  onGetAgent(): void {
    this.getAgent.emit(this.agent);
  }
}

