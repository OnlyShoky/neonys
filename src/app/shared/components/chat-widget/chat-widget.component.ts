// src/app/core/chat-widget/chat-widget.component.ts
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
    // Detectar idioma del navegador
    const userLang = navigator.language.startsWith('es') ? 'es' : 'en';
    const chatUrl = this.ngrok + this.n8nChatUrl;

    console.log("Chat url:", chatUrl);

    createChat({
      webhookUrl: chatUrl,
      target: '#n8n-chat',
      mode: 'window',
      showWelcomeScreen: true,
      enableStreaming: false,
      loadPreviousSession: true,
      defaultLanguage: userLang === 'en' ? 'en' : undefined, // compatible con TS
      i18n: {
        es: {
          title: '¡Hola! 👋',
          subtitle: 'Empieza un chat con Peak Boxing Club. Estamos aquí para ayudarte 24/7.',
          footer: '',
          getStarted: 'Nueva conversación',
          inputPlaceholder: 'Escribe tu pregunta...',
          closeButtonTooltip: 'Cerrar chat', 
        },
        en: {
          title: 'Hi there! 👋',
          subtitle: "Start a chat with Peak Boxing Club. We're here to help you 24/7.",
          footer: '',
          getStarted: 'New Conversation',
          inputPlaceholder: 'Type your question..',
          closeButtonTooltip: 'Close chat', 
        }
      },
      initialMessages: userLang === 'es'
        ? ['¡Hola! 👋 Bienvenido a Peak Boxing Club.', 'Mi nombre es Mohamed, ¿en qué puedo ayudarte hoy?']
        : ['Hi there! 👋 Welcome to Peak Boxing Club.', "My name is Mohamed. How can I assist you today?"]
    });
  }
}
