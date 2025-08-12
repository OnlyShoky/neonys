import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private translationService = inject(TranslationService);

  formData: ContactForm = {
    name: '',
    email: '',
    message: ''
  };

  getTranslation(key: string): string {
    return this.translationService.getTranslation(key);
  }

  onSubmit(): void {
    console.log('Form submitted:', this.formData);
    // Here you would typically send the form data to a backend service
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}

