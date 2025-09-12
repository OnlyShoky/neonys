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

  private isValidEmail(email: string): boolean {
    // Validación básica de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  onSubmit(form: NgForm) {
    if (!form.valid || !this.isValidEmail(this.formData.email)) {
      alert('Por favor rellena todos los campos correctamente y asegúrate de que el email sea válido.');
      return;
    }

    this.loading = true;

    const body = this.encodeFormData({
      'form-name': 'contactNetlify',
      name: this.formData.name,
      email: this.formData.email,
      message: this.formData.message
    });

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body
    })
      .then(() => {
        this.loading = false;
        this.success = true;
        this.error = false;
        alert('✅ Formulario enviado correctamente!');
        form.resetForm();
        this.formData = { name: '', email: '', message: '' };
      })
      .catch(() => {
        this.loading = false;
        this.success = false;
        this.error = true;
        alert('❌ Hubo un error al enviar el formulario. Intenta de nuevo.');
      });
  }
}
