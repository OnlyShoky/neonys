import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../../../core/services/translation';
import { AgentCardComponent, Agent } from '../../../../shared/components/agent-card/agent-card';

@Component({
  selector: 'app-agents',
  standalone: true,
  imports: [CommonModule, AgentCardComponent],
  templateUrl: './agents.html',
  styleUrls: ['./agents.scss']
})
export class AgentsComponent {
  private translationService = inject(TranslationService);
  currentIndex = 0;
  isAnimating = false;

  agents: Agent[] = [
    {
      name: 'Inboxa',
      titleKey: 'agents.inboxa.title',
      subtitleKey: 'agents.inboxa.subtitle',
      descKey: 'agents.inboxa.desc',
      icon: 'fa-envelope',
      color: '#6b8cff',
      hoverColor: '#5a7bef',
      image: '/assets/Inboxa.png',
      workflow: 'Gmail → Filter → Categorize → Notify'
    },
    {
      name: 'Leado',
      titleKey: 'agents.leado.title',
      subtitleKey: 'agents.leado.subtitle',
      descKey: 'agents.leado.desc',
      icon: 'fa-bullseye',
      color: '#a66bff',
      hoverColor: '#955af0',
      image: '/assets/Leado.png',
      workflow: 'Typeform → Notion DB → Slack alert'
    },
    {
      name: 'Clientron',
      titleKey: 'agents.clientron.title',
      subtitleKey: 'agents.clientron.subtitle',
      descKey: 'agents.clientron.desc',
      icon: 'fa-file-invoice-dollar',
      color: '#6b8cff',
      hoverColor: '#5a7bef',
      image: '/assets/Clientron.png',
      workflow: 'Pipedrive → Invoice Ninja → Email'
    },
    {
      name: 'Pixaro',
      titleKey: 'agents.pixaro.title',
      subtitleKey: 'agents.pixaro.subtitle',
      descKey: 'agents.pixaro.desc',
      icon: 'fa-image',
      color: '#2bc5ce',
      hoverColor: '#2bc5ce',
      image: '/assets/Pixaro.png',
      workflow: 'Prompt → Generate → Edit → Export'
    },
    {
      name: 'Postari',
      titleKey: 'agents.postari.title',
      subtitleKey: 'agents.postari.subtitle',
      descKey: 'agents.postari.desc',
      icon: 'fa-share-alt',
      color: '#a66bff',
      hoverColor: '#955af0',
      image: '/assets/Postari.png',
      workflow: 'Notion → Buffer → Social Media'
    }
  ];

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  getCardClass(i: number): string {
    const len = this.agents.length;
    const offset = (i - this.currentIndex + len) % len;

    if (offset === 0) return 'center';
    if (offset === 1) return 'right';
    if (offset === len - 1) return 'left';
    return 'hidden';
  }

  prev() { this.updateIndex(this.currentIndex - 1); }
  next() { this.updateIndex(this.currentIndex + 1); }
  goTo(i: number) { this.updateIndex(i); }

  updateIndex(newIndex: number) {
    if (this.isAnimating) return;
    this.isAnimating = true;
    this.currentIndex = (newIndex + this.agents.length) % this.agents.length;
    setTimeout(() => this.isAnimating = false, 500);
  }

  onGetAgent(agent: Agent) {
    console.log('Get agent:', agent.name);
  }
}
