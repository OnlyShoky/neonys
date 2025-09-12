import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslationService } from '../../../../core/services/translation';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class ContactComponent {
  private translationService = inject(TranslationService);

  formData: ContactForm = { name: '', email: '', message: '' };
  loading = false;
  success = false;
  error = false;

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  private encodeFormData(data: any) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;

    this.loading = true;
    this.success = false;
    this.error = false;

    const payload = {
      'form-name': 'contactNetlify', // debe coincidir con tu HTML
      'bot-field': '',
      ...this.formData
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encodeFormData(payload)
    })
      .then(() => {
        this.success = true;
        this.loading = false;
        form.resetForm();
      })
      .catch(() => {
        this.error = true;
        this.loading = false;
      });
  }
}
