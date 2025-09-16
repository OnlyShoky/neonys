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
  private ngrok = 'https://f703a62dc562.ngrok-free.app/';
  private n8nChatUrl = 'webhook/bdfaf162-1bbe-46b4-8033-aace37e2eda8/chat';

  ngOnInit(): void {
    const browserLang = navigator.language.split('-')[0]; // "es" o "en"
    console.log('Idioma del navegador:', browserLang);

    // Forzar el idioma del HTML para que n8n-chat lo respete
    document.documentElement.lang = 'en'; // Siempre en inglés

    const chatUrl = this.ngrok + this.n8nChatUrl;

    // Configuración del chat con textos en español
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
      title: '¡Hola! 👋', // puedes usar español aunque el idioma predeterminado sea 'en'
      subtitle: 'Empieza un chat con Peak Boxing Club. Estamos aquí para ayudarte 24/7.',
      footer: '',
      getStarted: 'Nueva conversación',
      inputPlaceholder: 'Escribe tu pregunta...',
      closeButtonTooltip: 'Cerrar chat',
    }
  },
  initialMessages: [
    '¡Hola! 👋 Bienvenido a Peak Boxing Club.',
    'Mi nombre es Lucia. ¿En qué puedo ayudarte hoy?'
  ]
});

  }
}
