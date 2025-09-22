import { Component, OnInit } from '@angular/core';
import '@n8n/chat/style.css';
import { createChat } from '@n8n/chat';

@Component({
  selector: 'app-chat-widget',
  template: `<div id="n8n-chat"></div>`,
  styleUrls: ['./chat-widget.component.scss'],
  standalone: true
})
export class ChatWidgetComponent implements OnInit {
  // private ngrok = 'https://f703a62dc562.ngrok-free.app/'; ngrok http 5678
  private ngrok = 'https://14f9f566570a.ngrok-free.app/';
  private n8nChatUrl = 'webhook/bdfaf162-1bbe-46b4-8033-aace37e2eda8/chat';

  ngOnInit(): void {
    const browserLang = navigator.language.split('-')[0]; // "es", "fr" o "en"
    console.log('Idioma del navegador:', browserLang);

    // Forzar el idioma del HTML para que n8n-chat lo respete
    document.documentElement.lang = 'en'; // Siempre en inglés

    const chatUrl = this.ngrok + this.n8nChatUrl;

    interface Translations {
      [key: string]: {
        title: string;
        subtitle: string;
        footer: string;
        getStarted: string;
        inputPlaceholder: string;
        closeButtonTooltip: string;
        initialMessages: string[];
      };
    }

    // Definir las traducciones para cada idioma
    const translations: Translations = {
      en: {
        title: 'Hello! 👋',
        subtitle: 'Start a chat with Peak Boxing Club. We are here to help you 24/7.',
        footer: '',
        getStarted: 'New conversation',
        inputPlaceholder: 'Type your question...',
        closeButtonTooltip: 'Close chat',
        initialMessages: [
          'Hello! 👋 Welcome to Peak Boxing Club.',
          'My name is Lucia. How can I help you today?'
        ]
      },
      es: {
        title: '¡Hola! 👋',
        subtitle: 'Empieza un chat con Peak Boxing Club. Estamos aquí para ayudarte 24/7.',
        footer: '',
        getStarted: 'Nueva conversación',
        inputPlaceholder: 'Escribe tu pregunta...',
        closeButtonTooltip: 'Cerrar chat',
        initialMessages: [
          '¡Hola! 👋 Bienvenido a Peak Boxing Club.',
          'Mi nombre es Lucia. ¿En qué puedo ayudarte hoy?'
        ]
      },
      fr: {
        title: 'Bonjour! 👋',
        subtitle: 'Commencez une conversation avec Peak Boxing Club. Nous sommes là pour vous aider 24h/24 et 7j/7.',
        footer: '',
        getStarted: 'Nouvelle conversation',
        inputPlaceholder: 'Tapez votre question...',
        closeButtonTooltip: 'Fermer le chat',
        initialMessages: [
          'Bonjour! 👋 Bienvenue à Peak Boxing Club.',
          'Je m\'appelle Lucia. Comment puis-je vous aider aujourd\'hui?'
        ]
      }
    };

    // Seleccionar traducción basada en el idioma del navegador (por defecto inglés)
    const selectedLang = translations[browserLang] ? browserLang : 'en';
    const translation = translations[selectedLang];

    // Configuración del chat
    createChat({
      webhookUrl: chatUrl,
      target: '#n8n-chat',
      mode: 'window',
      showWelcomeScreen: true,
      enableStreaming: false,
      loadPreviousSession: true,
      defaultLanguage: 'en', // siempre en inglés para evitar errores
      i18n: {
        en: {
          title: translation.title,
          subtitle: translation.subtitle,
          footer: translation.footer,
          getStarted: translation.getStarted,
          inputPlaceholder: translation.inputPlaceholder,
          closeButtonTooltip: translation.closeButtonTooltip,
        }
      },
      initialMessages: translation.initialMessages
    });
  }
}