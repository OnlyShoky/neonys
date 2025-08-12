import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './features/navigation/components/navigation/navigation';
import { HeroComponent } from './features/hero/components/hero/hero';
import { AboutComponent } from './features/about/components/about/about';
import { AgentsComponent } from './features/agents/components/agents/agents';
import { HowItWorksComponent } from './features/how-it-works/components/how-it-works/how-it-works';
import { ContactComponent } from './features/contact/components/contact/contact';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    AgentsComponent,
    HowItWorksComponent,
    ContactComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  title = 'neonys-angular';
}

