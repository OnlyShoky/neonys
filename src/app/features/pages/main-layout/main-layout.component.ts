import { Component } from '@angular/core';
import { NavigationComponent } from '../../navigation/components/navigation/navigation';
import { HeroComponent } from '../../hero/components/hero/hero';
import { AboutComponent } from '../../about/components/about/about';
import { AgentsComponent } from '../../agents/components/agents/agents';
import { HowItWorksComponent } from '../../how-it-works/components/how-it-works/how-it-works';
import { ContactComponent } from '../../contact/components/contact/contact';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NavigationComponent,
    HeroComponent,
    AboutComponent,
    AgentsComponent,
    HowItWorksComponent,
    ContactComponent,

  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
