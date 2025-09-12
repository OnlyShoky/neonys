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

  async onSubmit(form: NgForm) {
    this.loading = true;
    this.success = false;
    this.error = false;

    try {
      // Creamos un formData para enviar POST normal
      const data = new FormData();
      data.append('form-name', 'contactNetlify');
      data.append('name', this.formData.name);
      data.append('email', this.formData.email);
      data.append('message', this.formData.message);

      // Enviamos al mismo endpoint que Netlify detecta
      await fetch('/', {
        method: 'POST',
        body: data,
      });

      this.success = true;
      form.resetForm();
    } catch (err) {
      console.error(err);
      this.error = true;
    } finally {
      this.loading = false;
    }
  }
}
