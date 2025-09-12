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
  styleUrls: ['./contact.scss'] // nota: plural styleUrls
})
export class ContactComponent {
  private translationService = inject(TranslationService);

  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  loading = false;
  success = false;
  error = false;

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  async onSubmit(form: NgForm): Promise<void> {
    if (!form.valid) return;

    this.loading = true;
    this.success = false;
    this.error = false;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.formData })
      });

      if (response.ok) {
        this.success = true;
        form.resetForm();
        this.formData = { name: '', email: '', message: '' };
      } else {
        throw new Error('Network error');
      }
    } catch (err) {
      console.error(err);
      this.error = true;
    } finally {
      this.loading = false;
    }
  }

  private encode(data: { [key: string]: string }): string {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key] || ''))
      .join('&');
  }
}
