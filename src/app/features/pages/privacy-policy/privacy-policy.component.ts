import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../core/services/translation';
import { NavigationComponent } from "../../navigation/components/navigation/navigation";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [NavigationComponent, FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  private translationService = inject(TranslationService);

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }
}