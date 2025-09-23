import { Injectable } from '@angular/core';

interface Translations {
  [key: string]: {
    [key: string]: any;
  };
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = 'fr';

  private translations: Translations = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        agents: "Hero Agents",
        howItWorks: "How It Works",
        contact: "Contact"
      },
      hero: {
        title1: "Your Digital",
        title2: "Hero Agents",
        subtitle: "Futuristic assistants that handle your digital routines. Welcome to effortless productivity.",
        cta1: "Meet the Agents",
        cta2: "Get Started"
      },
      about: {
        title1: "Why Choose",
        title2: "Neonys",
        subtitle: "Neonys Hero Agents free your mind and schedule, handling the digital noise so you can focus on what truly matters.",
        feature1: {
          title: "Effortless",
          desc: "Each Hero Agent performs complex tasks seamlessly in the background. Set it, forget it."
        },
        feature2: {
          title: "Smart",
          desc: "Designed with adaptive logic, your Hero Agents learn and optimize over time."
        },
        feature3: {
          title: "Secure",
          desc: "Neonys operates behind the scenes with privacy-first protocols and robust security."
        },
        whyTitle: "Why Hero Agents?",
        benefit1: "Specialized in specific digital tasks",
        benefit2: "24/7 operation without fatigue",
        benefit3: "Integrates with all your favorite apps",
        benefit4: "Visual interface makes monitoring easy",
        benefit5: "Smart error handling and recovery",
        benefit6: "Cost-effective compared to human assistants"
      },
      agents: {
        title1: "Meet Your",
        title2: "Hero Agents",
        subtitle: "Each Hero Agent specializes in a domain of your digital life — from inboxes to insights.",
        inboxa: {
          title: "Email Organizer Agent",
          subtitle: "Inbox Zeroer",
          desc: "Sorts all your incoming emails, moves attachments to cloud storage, filters spam, and sends notifications only for important messages."
        },
        leado: {
          title: "Lead Capture Agent",
          subtitle: "Lead Magnet",
          desc: "Automatically captures leads from Typeform, enriches them with additional data, and sends them to Notion & Slack with priority tagging."
        },
        clientron: {
          title: "Billing Automation Unit",
          subtitle: "Auto-Invoicer",
          desc: "Generates professional invoices when deals close in your CRM, sends them to clients, and follows up on unpaid invoices automatically."
        },
        postari: {
          title: "Social Media Publisher",
          subtitle: "Social Scheduler",
          desc: "Publishes social media posts from your Notion content calendar to all platforms with optimal timing and automatic hashtag generation."
        },
        cta: "Get this Agent",
        customText: "Don't see exactly what you need? We build custom Hero Agents too!",
        customCta: "Request Custom Agent"
      },
      howItWorks: {
        title1: "How It",
        title2: "Works",
        subtitle: "Getting started with Hero Agents has never been easier.",
        step1: {
          title: "Book a Call",
          desc: "Schedule a free consultation to discuss your automation needs and goals."
        },
        step2: {
          title: "We Design",
          desc: "Our team creates a custom Hero Agent solution tailored to your specific requirements."
        },
        step3: {
          title: "You Save Time",
          desc: "Start enjoying the benefits of automation, saving hours every week."
        },
        testimonialsTitle: "What Our Clients Say",
        testimonial1: {
          role: "Marketing Director",
          text: "The social media automation has saved me 10+ hours per week. Now I can focus on strategy instead of posting."
        },
        testimonial2: {
          role: "Small Business Owner",
          text: "Clientron handles all my invoicing automatically. No more chasing payments or manual data entry!"
        }
      },
      contact: {
        ready: "Ready to",
        automate: "automate?",
        subtitle: "Let's discuss how we can save you time and streamline your workflows.",
        form: {
          name: "Name",
          email: "Email",
          message: "What would you like to automate?",
          submit: "Send Message",
          sending: "Sending",
          success: "Your message has been sent successfully!",
          error: "There was an error sending your message. Please try again."
        }
      },

      footer: {
        tagline: "Hero Agents for the future.",
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Us"
      },
      privacyPolicy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: December 2023",
        section1: {
          title: "Information We Collect",
          intro: "At Neonys, we collect information that helps us provide and improve our Hero Agent services:",
          item1: {
            title: "Account Information",
            desc: "Name, email address, and contact details when you register"
          },
          item2: {
            title: "Service Data",
            desc: "Information related to your automation workflows and preferences"
          },
          item3: {
            title: "Technical Data",
            desc: "IP address, browser type, device information, and usage statistics"
          },
          item4: {
            title: "Integration Data",
            desc: "App credentials and data from connected services (with your permission)"
          }
        },
        section2: {
          title: "How We Use Your Information",
          intro: "We use your information to:",
          item1: "Provide, maintain, and improve our Hero Agent services",
          item2: "Personalize your experience and optimize automation workflows",
          item3: "Communicate with you about service updates, security alerts, and support",
          item4: "Ensure the security and integrity of our platform",
          item5: "Comply with legal obligations and enforce our terms"
        },
        section3: {
          title: "Data Sharing and Disclosure",
          intro: "We do not sell your personal data. We may share information with:",
          item1: {
            title: "Service Providers",
            desc: "Trusted partners who help us deliver our services"
          },
          item2: {
            title: "Legal Requirements",
            desc: "When required by law or to protect our rights"
          },
          item3: {
            title: "Business Transfers",
            desc: "In connection with mergers, acquisitions, or asset sales"
          },
          outro: "We require all third parties to respect your privacy and handle your data securely."
        },
        section4: {
          title: "Data Security",
          intro: "We implement industry-standard security measures including:",
          item1: "Encryption of data in transit and at rest",
          item2: "Regular security audits and vulnerability assessments",
          item3: "Access controls and authentication mechanisms",
          item4: "Secure development practices and employee training"
        },
        section5: {
          title: "Your Rights and Choices",
          intro: "You have the right to:",
          item1: "Access and review your personal information",
          item2: "Correct inaccurate or incomplete data",
          item3: "Delete your account and personal data",
          item4: "Export your data in a portable format",
          item5: "Opt-out of marketing communications",
          item6: "Withdraw consent for data processing",
          outro: "To exercise these rights, contact us at privacy@neonys.io."
        },
        section6: {
          title: "Data Retention",
          content: "We retain your personal data only as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Typically, we retain data for 3 years after account termination unless longer retention is required by law."
        },
        section7: {
          title: "International Data Transfers",
          content: "Neonys operates globally, and your data may be processed in countries outside your residence. We ensure appropriate safeguards are in place and comply with applicable data protection laws for international data transfers."
        },
        section8: {
          title: "Cookies and Tracking",
          intro: "We use cookies and similar technologies to:",
          item1: "Authenticate users and maintain sessions",
          item2: "Remember your preferences and settings",
          item3: "Analyze website traffic and usage patterns",
          item4: "Deliver personalized content and advertisements",
          outro: "You can control cookies through your browser settings."
        },
        section9: {
          title: "Children's Privacy",
          content: "Our services are not intended for children under 16. We do not knowingly collect personal information from children under 16. If we become aware of such collection, we will take steps to delete the information."
        },
        section10: {
          title: "Changes to This Policy",
          content: "We may update this Privacy Policy periodically. We will notify you of significant changes through email or prominent notices on our website. Continued use of our services after changes constitutes acceptance of the updated policy."
        },
        section11: {
          title: "Contact Us",
          intro: "If you have questions about this Privacy Policy or our data practices, contact us at:",
          email: "Email",
          address: "Address"
        }
      },
      termsOfService: {
        title: "Terms of Service",
        effectiveDate: "Effective date: December 2023",
        section1: {
          title: "Acceptance of Terms",
          content: "By accessing or using Neonys Hero Agents services, you agree to be bound by these Terms of Service and our Privacy Policy. If you disagree with any part of these terms, you may not access our services."
        },
        section2: {
          title: "Description of Service",
          intro: "Neonys provides automated digital assistant services (\"Hero Agents\") that help users automate various digital tasks and workflows. Our services include:",
          item1: "Pre-built automation agents for common digital tasks",
          item2: "Custom agent development services",
          item3: "Integration with third-party applications and services",
          item4: "Monitoring and management tools for automation workflows"
        },
        section3: {
          title: "Account Registration",
          intro: "To use our services, you must:",
          item1: "Be at least 18 years old or have parental consent",
          item2: "Provide accurate and complete registration information",
          item3: "Maintain the security of your account credentials",
          item4: "Notify us immediately of any unauthorized account use",
          outro: "You are responsible for all activities that occur under your account."
        },
        section4: {
          title: "Service Plans and Payments",
          intro: "We offer various service plans with different features and pricing. By subscribing to a paid plan, you agree to:",
          item1: "Pay all applicable fees on time",
          item2: "Provide valid payment information",
          item3: "Authorize us to charge your payment method",
          item4: "Accept our cancellation and refund policies",
          outro: "Prices are subject to change with 30 days' notice to current subscribers."
        },
        section5: {
          title: "User Responsibilities",
          intro: "You agree to:",
          item1: "Use our services only for lawful purposes",
          item2: "Comply with all applicable laws and regulations",
          item3: "Respect intellectual property rights",
          item4: "Not engage in spam, fraud, or malicious activities",
          item5: "Not reverse engineer or attempt to hack our services",
          item6: "Not use our services to violate others' privacy rights"
        },
        section6: {
          title: "Intellectual Property",
          ourRights: "Our Rights",
          ourRightsDesc: "Neonys owns all intellectual property rights in our services, including software, designs, trademarks, and content. We grant you a limited license to use our services according to these terms.",
          yourContent: "Your Content",
          yourContentDesc: "You retain ownership of any data, content, or materials you provide to our services. You grant us a license to use your content solely to provide and improve our services."
        },
        section7: {
          title: "Third-Party Integrations",
          intro: "Our services integrate with various third-party applications. When you connect these services:",
          item1: "You are responsible for complying with the third party's terms",
          item2: "We are not liable for third-party service issues or changes",
          item3: "You authorize us to access and use your third-party account data",
          item4: "We handle your credentials securely and only for intended purposes"
        },
        section8: {
          title: "Service Availability and Modifications",
          content: "We strive to maintain high service availability but do not guarantee uninterrupted service. We may perform maintenance, updates, or modifications that temporarily affect availability. We reserve the right to modify or discontinue services with reasonable notice to users."
        },
        section9: {
          title: "Limitation of Liability",
          intro: "To the maximum extent permitted by law, Neonys shall not be liable for:",
          item1: "Indirect, incidental, or consequential damages",
          item2: "Loss of profits, data, or business opportunities",
          item3: "Damages resulting from service interruptions or failures",
          item4: "Issues caused by third-party services or user actions",
          outro: "Our total liability shall not exceed the amount you paid for services in the past 6 months."
        },
        section10: {
          title: "Termination",
          intro: "You may cancel your account at any time. We may suspend or terminate your account if you:",
          item1: "Violate these terms or applicable laws",
          item2: "Engage in fraudulent or harmful activities",
          item3: "Fail to pay fees when due",
          item4: "Create risk or legal exposure for Neonys",
          outro: "Upon termination, your right to use our services immediately ceases."
        },
        section11: {
          title: "Disclaimer of Warranties",
          content: "Our services are provided \"as is\" without warranties of any kind. We do not warrant that services will be uninterrupted, error-free, or meet your specific requirements. You use our services at your own risk."
        },
        section12: {
          title: "Governing Law and Dispute Resolution",
          content: "These terms are governed by the laws of California. Any disputes shall be resolved through binding arbitration in San Francisco, CA. You agree to waive the right to participate in class actions."
        },
        section13: {
          title: "Changes to Terms",
          content: "We may update these Terms of Service periodically. We will notify you of material changes via email or through our services. Continued use after changes constitutes acceptance of the new terms."
        },
        section14: {
          title: "Contact Information",
          intro: "For questions about these terms, contact us at:",
          email: "Email",
          address: "Address"
        },
        section15: {
          title: "Entire Agreement",
          content: "These Terms of Service, together with our Privacy Policy, constitute the entire agreement between you and Neonys regarding our services and supersede all prior agreements and understandings."
        }
      }
    },
    es: {
      nav: {
        home: "Inicio",
        about: "Acerca de",
        agents: "Agentes Hero",
        howItWorks: "Cómo Funciona",
        contact: "Contacto"
      },
      hero: {
        title1: "Tus",
        title2: "Agentes Hero Digitales",
        subtitle: "Asistentes futuristas que manejan tus rutinas digitales. Bienvenido a la productividad sin esfuerzo.",
        cta1: "Conoce a los Agentes",
        cta2: "Comenzar"
      },
      about: {
        title1: "Por qué Elegir",
        title2: "Neonys",
        subtitle: "Los Agentes Hero de Neonys liberan tu mente y agenda, manejando el ruido digital para que te enfoques en lo que realmente importa.",
        feature1: {
          title: "Sin Esfuerzo",
          desc: "Cada Agente Hero realiza tareas complejas de forma fluida en segundo plano. Configúralo y olvídate."
        },
        feature2: {
          title: "Inteligente",
          desc: "Diseñados con lógica adaptativa, tus Agentes Hero aprenden y optimizan con el tiempo."
        },
        feature3: {
          title: "Seguro",
          desc: "Neonys opera detrás de escena con protocolos de privacidad y seguridad robustos."
        },
        whyTitle: "¿Por qué Agentes Hero?",
        benefit1: "Especializados en tareas digitales específicas",
        benefit2: "Operación 24/7 sin fatiga",
        benefit3: "Se integran con todas tus aplicaciones favoritas",
        benefit4: "Interfaz visual que facilita el monitoreo",
        benefit5: "Manejo inteligente de errores y recuperación",
        benefit6: "Más rentable que asistentes humanos"
      },
      agents: {
        title1: "Conoce a Tus",
        title2: "Agentes Hero",
        subtitle: "Cada Agente Hero se especializa en un ámbito de tu vida digital — desde bandejas de entrada hasta análisis.",
        inboxa: {
          title: "Agente Organizador de Email",
          subtitle: "Cero Correos en la Bandeja",
          desc: "Ordena todos tus correos entrantes, mueve archivos adjuntos a la nube, filtra spam y envía notificaciones solo para mensajes importantes."
        },
        leado: {
          title: "Agente Capturador de Leads",
          subtitle: "Imán de Leads",
          desc: "Captura automáticamente leads de Typeform, los enriquece con datos adicionales y los envía a Notion & Slack con etiquetado prioritario."
        },
        clientron: {
          title: "Unidad de Automatización de Facturación",
          subtitle: "Facturador Automático",
          desc: "Genera facturas profesionales cuando cierras tratos en tu CRM, las envía a clientes y hace seguimiento automático de facturas impagas."
        },
        postari: {
          title: "Publicador de Redes Sociales",
          subtitle: "Programador Social",
          desc: "Publica posts desde tu calendario de contenido en Notion a todas las plataformas con el mejor timing y generación automática de hashtags."
        },
        cta: "Adquirir este Agente",
        customText: "¿No ves exactamente lo que necesitas? ¡También creamos Agentes Hero personalizados!",
        customCta: "Solicitar Agente Personalizado"
      },
      howItWorks: {
        title1: "Cómo",
        title2: "Funciona",
        subtitle: "Empezar con los Agentes Hero nunca fue tan fácil.",
        step1: {
          title: "Agenda una Llamada",
          desc: "Programa una consulta gratuita para discutir tus necesidades y objetivos de automatización."
        },
        step2: {
          title: "Diseñamos",
          desc: "Nuestro equipo crea una solución personalizada de Agentes Hero ajustada a tus requerimientos."
        },
        step3: {
          title: "Ahorras Tiempo",
          desc: "Comienza a disfrutar los beneficios de la automatización, ahorrando horas cada semana."
        },
        testimonialsTitle: "Lo Que Dicen Nuestros Clientes",
        testimonial1: {
          role: "Director de Marketing",
          text: "La automatización de redes sociales me ha ahorrado más de 10 horas por semana. Ahora puedo enfocarme en la estrategia en lugar de publicar."
        },
        testimonial2: {
          role: "Pequeño Empresario",
          text: "Clientron maneja toda mi facturación automáticamente. ¡No más perseguir pagos ni ingresar datos manualmente!"
        }
      },
      contact: {
        ready: "Listo para",
        automate: "automatizar?",
        subtitle: "Hablemos de cómo podemos ahorrarte tiempo y optimizar tus flujos de trabajo.",
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          message: "¿Qué te gustaría automatizar?",
          submit: "Enviar Mensaje",
          sending: "Enviando",
          success: "¡Tu mensaje ha sido enviado con éxito!",
          error: "Hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo."
        }
      },
      footer: {
        tagline: "Agentes Hero para el futuro.",
        rights: "Todos los derechos reservados.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
        contact: "Contáctanos"
      },
      privacyPolicy: {
        title: "Política de Privacidad",
        lastUpdated: "Última actualización: Diciembre 2023",
        section1: {
          title: "Información que Recopilamos",
          intro: "En Neonys, recopilamos información que nos ayuda a proporcionar y mejorar nuestros servicios de Agentes Hero:",
          item1: {
            title: "Información de la Cuenta",
            desc: "Nombre, dirección de correo electrónico y datos de contacto cuando te registras"
          },
          item2: {
            title: "Datos del Servicio",
            desc: "Información relacionada con tus flujos de trabajo de automatización y preferencias"
          },
          item3: {
            title: "Datos Técnicos",
            desc: "Dirección IP, tipo de navegador, información del dispositivo y estadísticas de uso"
          },
          item4: {
            title: "Datos de Integración",
            desc: "Credenciales de aplicaciones y datos de servicios conectados (con tu permiso)"
          }
        },
        section2: {
          title: "Cómo Utilizamos Tu Información",
          intro: "Utilizamos tu información para:",
          item1: "Proporcionar, mantener y mejorar nuestros servicios de Agentes Hero",
          item2: "Personalizar tu experiencia y optimizar flujos de trabajo de automatización",
          item3: "Comunicarnos contigo sobre actualizaciones del servicio, alertas de seguridad y soporte",
          item4: "Garantizar la seguridad e integridad de nuestra plataforma",
          item5: "Cumplir con obligaciones legales y hacer cumplir nuestros términos"
        },
        section3: {
          title: "Compartición y Divulgación de Datos",
          intro: "No vendemos tus datos personales. Podemos compartir información con:",
          item1: {
            title: "Proveedores de Servicios",
            desc: "Socios confiables que nos ayudan a entregar nuestros servicios"
          },
          item2: {
            title: "Requisitos Legales",
            desc: "Cuando lo requiera la ley o para proteger nuestros derechos"
          },
          item3: {
            title: "Transferencias de Negocio",
            desc: "En relación con fusiones, adquisiciones o ventas de activos"
          },
          outro: "Requerimos que todos los terceros respeten tu privacidad y manejen tus datos de forma segura."
        },
        section4: {
          title: "Seguridad de los Datos",
          intro: "Implementamos medidas de seguridad estándar de la industria que incluyen:",
          item1: "Cifrado de datos en tránsito y en reposo",
          item2: "Auditorías de seguridad regulares y evaluaciones de vulnerabilidades",
          item3: "Controles de acceso y mecanismos de autenticación",
          item4: "Prácticas de desarrollo seguro y capacitación de empleados"
        },
        section5: {
          title: "Tus Derechos y Opciones",
          intro: "Tienes derecho a:",
          item1: "Acceder y revisar tu información personal",
          item2: "Corregir datos inexactos o incompletos",
          item3: "Eliminar tu cuenta y datos personales",
          item4: "Exportar tus datos en un formato portable",
          item5: "Excluirte de comunicaciones de marketing",
          item6: "Retirar el consentimiento para el procesamiento de datos",
          outro: "Para ejercer estos derechos, contáctanos en privacy@neonys.io."
        },
        section6: {
          title: "Retención de Datos",
          content: "Conservamos tus datos personales solo el tiempo necesario para proporcionar nuestros servicios, cumplir con obligaciones legales, resolver disputas y hacer cumplir nuestros acuerdos. Normalmente, conservamos los datos durante 3 años después de la terminación de la cuenta, a menos que se requiera una retención más prolongada por ley."
        },
        section7: {
          title: "Transferencias Internacionales de Datos",
          content: "Neonys opera globalmente, y tus datos pueden procesarse en países fuera de tu residencia. Garantizamos que existen salvaguardas apropiadas y cumplimos con las leyes aplicables de protección de datos para transferencias internacionales de datos."
        },
        section8: {
          title: "Cookies y Seguimiento",
          intro: "Utilizamos cookies y tecnologías similares para:",
          item1: "Autenticar usuarios y mantener sesiones",
          item2: "Recordar tus preferencias y configuraciones",
          item3: "Analizar el tráfico del sitio web y patrones de uso",
          item4: "Entregar contenido y anuncios personalizados",
          outro: "Puedes controlar las cookies a través de la configuración de tu navegador."
        },
        section9: {
          title: "Privacidad Infantil",
          content: "Nuestros servicios no están destinados a niños menores de 16 años. No recopilamos conscientemente información personal de niños menores de 16 años. Si nos damos cuenta de dicha recopilación, tomaremos medidas para eliminar la información."
        },
        section10: {
          title: "Cambios a Esta Política",
          content: "Podemos actualizar esta Política de Privacidad periódicamente. Te notificaremos sobre cambios significativos por correo electrónico o avisos prominentes en nuestro sitio web. El uso continuado de nuestros servicios después de los cambios constituye la aceptación de la política actualizada."
        },
        section11: {
          title: "Contáctanos",
          intro: "Si tienes preguntas sobre esta Política de Privacidad o nuestras prácticas de datos, contáctanos en:",
          email: "Correo Electrónico",
          address: "Dirección"
        }
      },
      termsOfService: {
        title: "Términos de Servicio",
        effectiveDate: "Fecha efectiva: Diciembre 2023",
        section1: {
          title: "Aceptación de los Términos",
          content: "Al acceder o utilizar los servicios de Agentes Hero de Neonys, aceptas estar sujeto a estos Términos de Servicio y nuestra Política de Privacidad. Si no estás de acuerdo con alguna parte de estos términos, no podrás acceder a nuestros servicios."
        },
        section2: {
          title: "Descripción del Servicio",
          intro: "Neonys proporciona servicios de asistente digital automatizado (\"Agentes Hero\") que ayudan a los usuarios a automatizar diversas tareas y flujos de trabajo digitales. Nuestros servicios incluyen:",
          item1: "Agentes de automatización preconstruidos para tareas digitales comunes",
          item2: "Servicios de desarrollo de agentes personalizados",
          item3: "Integración con aplicaciones y servicios de terceros",
          item4: "Herramientas de monitoreo y gestión para flujos de trabajo de automatización"
        },
        section3: {
          title: "Registro de Cuenta",
          intro: "Para utilizar nuestros servicios, debes:",
          item1: "Tener al menos 18 años o contar con consentimiento parental",
          item2: "Proporcionar información de registro precisa y completa",
          item3: "Mantener la seguridad de tus credenciales de cuenta",
          item4: "Notificarnos inmediatamente sobre cualquier uso no autorizado de la cuenta",
          outro: "Eres responsable de todas las actividades que ocurran bajo tu cuenta."
        },
        section4: {
          title: "Planes de Servicio y Pagos",
          intro: "Ofrecemos varios planes de servicio con diferentes características y precios. Al suscribirte a un plan de pago, aceptas:",
          item1: "Pagar todas las tarifas aplicables a tiempo",
          item2: "Proporcionar información de pago válida",
          item3: "Autorizarnos a cargar tu método de pago",
          item4: "Aceptar nuestras políticas de cancelación y reembolso",
          outro: "Los precios están sujetos a cambios con 30 días de aviso a los suscriptores actuales."
        },
        section5: {
          title: "Responsabilidades del Usuario",
          intro: "Aceptas:",
          item1: "Utilizar nuestros servicios solo para fines legales",
          item2: "Cumplir con todas las leyes y regulaciones aplicables",
          item3: "Respetar los derechos de propiedad intelectual",
          item4: "No participar en spam, fraudes o actividades maliciosas",
          item5: "No realizar ingeniería inversa ni intentar hackear nuestros servicios",
          item6: "No utilizar nuestros servicios para violar los derechos de privacidad de otros"
        },
        section6: {
          title: "Propiedad Intelectual",
          ourRights: "Nuestros Derechos",
          ourRightsDesc: "Neonys posee todos los derechos de propiedad intelectual en nuestros servicios, incluidos software, diseños, marcas comerciales y contenido. Te otorgamos una licencia limitada para usar nuestros servicios de acuerdo con estos términos.",
          yourContent: "Tu Contenido",
          yourContentDesc: "Tú conservas la propiedad de cualquier dato, contenido o material que proporciones a nuestros servicios. Nos otorgas una licencia para usar tu contenido únicamente para proporcionar y mejorar nuestros servicios."
        },
        section7: {
          title: "Integraciones de Terceros",
          intro: "Nuestros servicios se integran con varias aplicaciones de terceros. Cuando conectas estos servicios:",
          item1: "Eres responsable de cumplir con los términos del tercero",
          item2: "No somos responsables por problemas o cambios en los servicios de terceros",
          item3: "Nos autorizas a acceder y usar los datos de tu cuenta de terceros",
          item4: "Manejamos tus credenciales de forma segura y solo para los fines previstos"
        },
        section8: {
          title: "Disponibilidad y Modificaciones del Servicio",
          content: "Nos esforzamos por mantener una alta disponibilidad del servicio pero no garantizamos un servicio ininterrumpido. Podemos realizar mantenimiento, actualizaciones o modificaciones que afecten temporalmente la disponibilidad. Nos reservamos el derecho de modificar o discontinuar servicios con aviso razonable a los usuarios."
        },
        section9: {
          title: "Limitación de Responsabilidad",
          intro: "En la máxima medida permitida por la ley, Neonys no será responsable por:",
          item1: "Daños indirectos, incidentales o consecuentes",
          item2: "Pérdida de ganancias, datos u oportunidades comerciales",
          item3: "Daños resultantes de interrupciones o fallas del servicio",
          item4: "Problemas causados por servicios de terceros o acciones del usuario",
          outro: "Nuestra responsabilidad total no excederá la cantidad que pagaste por los servicios en los últimos 6 meses."
        },
        section10: {
          title: "Terminación",
          intro: "Puedes cancelar tu cuenta en cualquier momento. Podemos suspender o terminar tu cuenta si:",
          item1: "Violas estos términos o las leyes aplicables",
          item2: "Participas en actividades fraudulentas o dañinas",
          item3: "No pagas las tarifas cuando vencen",
          item4: "Creas riesgo o exposición legal para Neonys",
          outro: "Al terminar, tu derecho a usar nuestros servicios cesa inmediatamente."
        },
        section11: {
          title: "Renuncia de Garantías",
          content: "Nuestros servicios se proporcionan \"tal cual\" sin garantías de ningún tipo. No garantizamos que los servicios serán ininterrumpidos, libres de errores o que cumplirán con tus requisitos específicos. Utilizas nuestros servicios bajo tu propio riesgo."
        },
        section12: {
          title: "Ley Aplicable y Resolución de Disputas",
          content: "Estos términos se rigen por las leyes de California. Cualquier disputa se resolverá mediante arbitraje vinculante en San Francisco, CA. Aceptas renunciar al derecho de participar en acciones colectivas."
        },
        section13: {
          title: "Cambios a los Términos",
          content: "Podemos actualizar estos Términos de Servicio periódicamente. Te notificaremos sobre cambios materiales por correo electrónico o a través de nuestros servicios. El uso continuado después de los cambios constituye la aceptación de los nuevos términos."
        },
        section14: {
          title: "Información de Contacto",
          intro: "Para preguntas sobre estos términos, contáctanos en:",
          email: "Correo Electrónico",
          address: "Dirección"
        },
        section15: {
          title: "Acuerdo Completo",
          content: "Estos Términos de Servicio, junto con nuestra Política de Privacidad, constituyen el acuerdo completo entre tú y Neonys con respecto a nuestros servicios y reemplazan todos los acuerdos y entendimientos previos."
        }
      }
    },

    fr: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        agents: "Agents Héros",
        howItWorks: "Comment Ça Marche",
        contact: "Contact"
      },
      hero: {
        title1: "Vos",
        title2: "Agents Héros Digitaux",
        subtitle: "Assistants futuristes qui gèrent vos routines numériques. Bienvenue dans la productivité sans effort.",
        cta1: "Rencontrez les Agents",
        cta2: "Commencer"
      },
      about: {
        title1: "Pourquoi Choisir",
        title2: "Neonys",
        subtitle: "Les Agents Héros de Neonys libèrent votre esprit et votre agenda, en gérant le bruit numérique pour que vous puissiez vous concentrer sur l’essentiel.",
        feature1: {
          title: "Sans Effort",
          desc: "Chaque Agent Héros réalise des tâches complexes en toute transparence en arrière-plan. Configurez-le et oubliez-le."
        },
        feature2: {
          title: "Intelligent",
          desc: "Conçus avec une logique adaptative, vos Agents Héros apprennent et s’optimisent avec le temps."
        },
        feature3: {
          title: "Sécurisé",
          desc: "Neonys fonctionne en coulisses avec des protocoles de confidentialité et une sécurité robustes."
        },
        whyTitle: "Pourquoi les Agents Héros ?",
        benefit1: "Spécialisés dans des tâches numériques spécifiques",
        benefit2: "Fonctionnement 24/7 sans fatigue",
        benefit3: "S’intègre à toutes vos applications préférées",
        benefit4: "Interface visuelle facilitant la surveillance",
        benefit5: "Gestion intelligente des erreurs et récupération",
        benefit6: "Plus économique que des assistants humains"
      },
      agents: {
        title1: "Rencontrez Vos",
        title2: "Agents Héros",
        subtitle: "Chaque Agent Héros est spécialisé dans un domaine de votre vie numérique — des boîtes de réception aux analyses.",
        inboxa: {
          title: "Agent Organisateur d’Emails",
          subtitle: "Zéro Inbox",
          desc: "Trie tous vos emails entrants, déplace les pièces jointes vers le cloud, filtre les spams et envoie des notifications uniquement pour les messages importants."
        },
        leado: {
          title: "Agent de Capture de Leads",
          subtitle: "Aimant à Leads",
          desc: "Capture automatiquement les leads depuis Typeform, les enrichit avec des données supplémentaires et les envoie à Notion & Slack avec un marquage prioritaire."
        },
        clientron: {
          title: "Unité d’Automatisation de Facturation",
          subtitle: "Facturier Automatique",
          desc: "Génère des factures professionnelles quand des contrats se concluent dans votre CRM, les envoie aux clients et suit automatiquement les factures impayées."
        },
        postari: {
          title: "Éditeur de Réseaux Sociaux",
          subtitle: "Planificateur Social",
          desc: "Publie des posts depuis votre calendrier de contenu Notion vers toutes les plateformes avec un timing optimal et génération automatique de hashtags."
        },
        cta: "Obtenez cet Agent",
        customText: "Vous ne trouvez pas exactement ce dont vous avez besoin ? Nous créons aussi des Agents Héros personnalisés !",
        customCta: "Demander un Agent Personnalisé"
      },
      howItWorks: {
        title1: "Comment",
        title2: "Ça Marche",
        subtitle: "Commencer avec les Agents Héros n’a jamais été aussi simple.",
        step1: {
          title: "Réservez un Appel",
          desc: "Planifiez une consultation gratuite pour discuter de vos besoins et objectifs d’automatisation."
        },
        step2: {
          title: "Nous Concevons",
          desc: "Notre équipe crée une solution d’Agent Héros personnalisée adaptée à vos exigences spécifiques."
        },
        step3: {
          title: "Vous Gagnez du Temps",
          desc: "Commencez à profiter des bénéfices de l’automatisation, en économisant des heures chaque semaine."
        },
        testimonialsTitle: "Ce Que Disent Nos Clients",
        testimonial1: {
          role: "Directeur Marketing",
          text: "L’automatisation des réseaux sociaux m’a fait gagner plus de 10 heures par semaine. Je peux maintenant me concentrer sur la stratégie au lieu de poster."
        },
        testimonial2: {
          role: "Petit Entrepreneur",
          text: "Clientron gère toute ma facturation automatiquement. Plus besoin de courir après les paiements ou de saisir manuellement les données !"
        }
      },
      contact: {
        ready: "Prêt à",
        automate: "automatiser ?",
        subtitle: "Discutons de comment nous pouvons vous faire gagner du temps et simplifier vos flux de travail.",
        form: {
          name: "Nom",
          email: "Email",
          message: "Que souhaitez-vous automatiser ?",
          submit: "Envoyer le Message",
          sending: "Envoi en cours",
          success: "Votre message a été envoyé avec succès !",
          error: "Une erreur est survenue lors de l'envoi. Veuillez réessayer."
        }
      },

      footer: {
        tagline: "Agents Héros pour le futur.",
        rights: "Tous droits réservés.",
        privacy: "Politique de Confidentialité",
        terms: "Conditions d’Utilisation",
        contact: "Contactez-nous"
      },
      privacyPolicy: {
        title: "Politique de Confidentialité",
        lastUpdated: "Dernière mise à jour : Décembre 2023",
        section1: {
          title: "Informations que Nous Collectons",
          intro: "Chez Neonys, nous collectons des informations qui nous aident à fournir et améliorer nos services d’Agents Hero :",
          item1: {
            title: "Informations du Compte",
            desc: "Nom, adresse e-mail et coordonnées lors de votre inscription"
          },
          item2: {
            title: "Données de Service",
            desc: "Informations liées à vos flux de travail d’automatisation et préférences"
          },
          item3: {
            title: "Données Techniques",
            desc: "Adresse IP, type de navigateur, informations sur l’appareil et statistiques d’utilisation"
          },
          item4: {
            title: "Données d’Intégration",
            desc: "Identifiants d’applications et données de services connectés (avec votre permission)"
          }
        },
        section2: {
          title: "Comment Nous Utilisons Vos Informations",
          intro: "Nous utilisons vos informations pour :",
          item1: "Fournir, maintenir et améliorer nos services d’Agents Hero",
          item2: "Personnaliser votre expérience et optimiser les flux d’automatisation",
          item3: "Communiquer avec vous concernant les mises à jour, alertes de sécurité et support",
          item4: "Garantir la sécurité et l’intégrité de notre plateforme",
          item5: "Respecter les obligations légales et appliquer nos conditions"
        },
        section3: {
          title: "Partage et Divulgation des Données",
          intro: "Nous ne vendons pas vos données personnelles. Nous pouvons partager des informations avec :",
          item1: {
            title: "Fournisseurs de Services",
            desc: "Partenaires de confiance qui nous aident à fournir nos services"
          },
          item2: {
            title: "Exigences Légales",
            desc: "Lorsque la loi l’exige ou pour protéger nos droits"
          },
          item3: {
            title: "Transferts d’Entreprise",
            desc: "Dans le cadre de fusions, acquisitions ou ventes d’actifs"
          },
          outro: "Nous exigeons que tous les tiers respectent votre vie privée et traitent vos données de manière sécurisée."
        },
        section4: {
          title: "Sécurité des Données",
          intro: "Nous mettons en œuvre des mesures de sécurité conformes aux standards de l’industrie, incluant :",
          item1: "Chiffrement des données en transit et au repos",
          item2: "Audits de sécurité réguliers et évaluations de vulnérabilités",
          item3: "Contrôles d’accès et mécanismes d’authentification",
          item4: "Pratiques de développement sécurisé et formation des employés"
        },
        section5: {
          title: "Vos Droits et Choix",
          intro: "Vous avez le droit de :",
          item1: "Accéder et examiner vos informations personnelles",
          item2: "Corriger des données inexactes ou incomplètes",
          item3: "Supprimer votre compte et vos données personnelles",
          item4: "Exporter vos données dans un format portable",
          item5: "Vous désinscrire des communications marketing",
          item6: "Retirer votre consentement au traitement des données",
          outro: "Pour exercer ces droits, contactez-nous à privacy@neonys.io."
        },
        section6: {
          title: "Conservation des Données",
          content: "Nous conservons vos données personnelles uniquement le temps nécessaire pour fournir nos services, respecter les obligations légales, résoudre les litiges et appliquer nos accords. En général, nous conservons les données pendant 3 ans après la résiliation du compte, sauf si la loi exige une durée plus longue."
        },
        section7: {
          title: "Transferts Internationaux de Données",
          content: "Neonys opère à l’échelle mondiale, et vos données peuvent être traitées dans des pays en dehors de votre résidence. Nous garantissons des protections appropriées et le respect des lois applicables sur la protection des données pour les transferts internationaux."
        },
        section8: {
          title: "Cookies et Suivi",
          intro: "Nous utilisons des cookies et technologies similaires pour :",
          item1: "Authentifier les utilisateurs et maintenir les sessions",
          item2: "Mémoriser vos préférences et paramètres",
          item3: "Analyser le trafic du site et les habitudes d’utilisation",
          item4: "Fournir du contenu et des publicités personnalisées",
          outro: "Vous pouvez contrôler les cookies via les paramètres de votre navigateur."
        },
        section9: {
          title: "Confidentialité des Enfants",
          content: "Nos services ne sont pas destinés aux enfants de moins de 16 ans. Nous ne collectons pas sciemment d’informations personnelles auprès d’eux. Si nous découvrons une telle collecte, nous prendrons des mesures pour supprimer ces informations."
        },
        section10: {
          title: "Modifications de Cette Politique",
          content: "Nous pouvons mettre à jour cette Politique de Confidentialité périodiquement. Nous vous informerons des changements importants par e-mail ou via un avis visible sur notre site. L’utilisation continue de nos services après les changements constitue une acceptation de la politique mise à jour."
        },
        section11: {
          title: "Contactez-Nous",
          intro: "Si vous avez des questions sur cette Politique de Confidentialité ou nos pratiques de données, contactez-nous à :",
          email: "Courriel",
          address: "Adresse"
        }
      },
      termsOfService: {
        title: "Conditions d’Utilisation",
        effectiveDate: "Date d’effet : Décembre 2023",
        section1: {
          title: "Acceptation des Conditions",
          content: "En accédant ou en utilisant les services Agents Hero de Neonys, vous acceptez d’être lié par ces Conditions d’Utilisation et notre Politique de Confidentialité. Si vous n’acceptez pas une partie de ces conditions, vous ne pouvez pas accéder à nos services."
        },
        section2: {
          title: "Description du Service",
          intro: "Neonys fournit des services d’assistant numérique automatisé (\"Agents Hero\") qui aident les utilisateurs à automatiser diverses tâches et flux numériques. Nos services incluent :",
          item1: "Agents d’automatisation préconstruits pour des tâches numériques courantes",
          item2: "Services de développement d’agents personnalisés",
          item3: "Intégration avec des applications et services tiers",
          item4: "Outils de suivi et de gestion pour les flux automatisés"
        },
        section3: {
          title: "Inscription de Compte",
          intro: "Pour utiliser nos services, vous devez :",
          item1: "Avoir au moins 18 ans ou disposer du consentement parental",
          item2: "Fournir des informations d’inscription exactes et complètes",
          item3: "Maintenir la sécurité de vos identifiants de compte",
          item4: "Nous informer immédiatement de toute utilisation non autorisée du compte",
          outro: "Vous êtes responsable de toutes les activités effectuées sous votre compte."
        },
        section4: {
          title: "Plans de Service et Paiements",
          intro: "Nous proposons plusieurs plans de service avec différentes fonctionnalités et tarifs. En souscrivant à un plan payant, vous acceptez de :",
          item1: "Payer toutes les frais applicables à temps",
          item2: "Fournir des informations de paiement valides",
          item3: "Nous autoriser à débiter votre mode de paiement",
          item4: "Accepter nos politiques d’annulation et de remboursement",
          outro: "Les prix peuvent être modifiés avec un préavis de 30 jours pour les abonnés actuels."
        },
        section5: {
          title: "Responsabilités de l’Utilisateur",
          intro: "Vous acceptez de :",
          item1: "Utiliser nos services uniquement à des fins légales",
          item2: "Respecter toutes les lois et réglementations applicables",
          item3: "Respecter les droits de propriété intellectuelle",
          item4: "Ne pas participer au spam, fraude ou activités malveillantes",
          item5: "Ne pas pratiquer l’ingénierie inverse ou tenter de pirater nos services",
          item6: "Ne pas utiliser nos services pour violer les droits de confidentialité d’autrui"
        },
        section6: {
          title: "Propriété Intellectuelle",
          ourRights: "Nos Droits",
          ourRightsDesc: "Neonys détient tous les droits de propriété intellectuelle sur nos services, y compris logiciels, designs, marques et contenus. Nous vous accordons une licence limitée pour utiliser nos services conformément à ces conditions.",
          yourContent: "Votre Contenu",
          yourContentDesc: "Vous conservez la propriété de toute donnée, contenu ou matériel que vous fournissez à nos services. Vous nous accordez une licence pour utiliser votre contenu uniquement afin de fournir et améliorer nos services."
        },
        section7: {
          title: "Intégrations Tiers",
          intro: "Nos services s’intègrent avec diverses applications tierces. Lorsque vous connectez ces services :",
          item1: "Vous êtes responsable du respect des conditions du tiers",
          item2: "Nous ne sommes pas responsables des problèmes ou changements liés aux services tiers",
          item3: "Vous nous autorisez à accéder et utiliser les données de votre compte tiers",
          item4: "Nous gérons vos identifiants de manière sécurisée et uniquement aux fins prévues"
        },
        section8: {
          title: "Disponibilité et Modifications du Service",
          content: "Nous nous efforçons d’assurer une haute disponibilité mais ne garantissons pas un service ininterrompu. Nous pouvons effectuer des maintenances, mises à jour ou modifications qui affectent temporairement la disponibilité. Nous nous réservons le droit de modifier ou interrompre des services avec un préavis raisonnable."
        },
        section9: {
          title: "Limitation de Responsabilité",
          intro: "Dans la mesure maximale permise par la loi, Neonys ne sera pas responsable de :",
          item1: "Dommages indirects, accessoires ou consécutifs",
          item2: "Pertes de profits, données ou opportunités commerciales",
          item3: "Dommages résultant d’interruptions ou pannes du service",
          item4: "Problèmes causés par des services tiers ou actions de l’utilisateur",
          outro: "Notre responsabilité totale n’excédera pas le montant que vous avez payé pour les services au cours des 6 derniers mois."
        },
        section10: {
          title: "Résiliation",
          intro: "Vous pouvez annuler votre compte à tout moment. Nous pouvons suspendre ou résilier votre compte si :",
          item1: "Vous violez ces conditions ou les lois applicables",
          item2: "Vous participez à des activités frauduleuses ou nuisibles",
          item3: "Vous ne payez pas les frais à échéance",
          item4: "Vous créez un risque ou une exposition juridique pour Neonys",
          outro: "En cas de résiliation, votre droit d’utiliser nos services cesse immédiatement."
        },
        section11: {
          title: "Exclusion de Garanties",
          content: "Nos services sont fournis \"tels quels\" sans garanties d’aucune sorte. Nous ne garantissons pas que les services seront ininterrompus, sans erreur ou répondront à vos besoins spécifiques. Vous utilisez nos services à vos propres risques."
        },
        section12: {
          title: "Droit Applicable et Résolution des Litiges",
          content: "Ces conditions sont régies par les lois de Californie. Tout litige sera résolu par arbitrage contraignant à San Francisco, CA. Vous acceptez de renoncer au droit de participer à des recours collectifs."
        },
        section13: {
          title: "Modifications des Conditions",
          content: "Nous pouvons mettre à jour ces Conditions d’Utilisation périodiquement. Nous vous informerons des changements matériels par e-mail ou via nos services. L’utilisation continue après les changements constitue une acceptation des nouvelles conditions."
        },
        section14: {
          title: "Informations de Contact",
          intro: "Pour toute question sur ces conditions, contactez-nous à :",
          email: "Courriel",
          address: "Adresse"
        },
        section15: {
          title: "Accord Complet",
          content: "Ces Conditions d’Utilisation, ainsi que notre Politique de Confidentialité, constituent l’accord complet entre vous et Neonys concernant nos services et remplacent tous les accords ou ententes antérieurs."
        }
      }

    }

  };

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  setLanguage(language: string): void {
    if (this.translations[language]) {
      this.currentLanguage = language;
    }
  }

  getTranslation(key: string): string {
    const keys = key.split('.');
    let translation: any = this.translations[this.currentLanguage];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        // Fallback to English if translation not found
        translation = this.translations['en'];
        for (const fallbackKey of keys) {
          if (translation && translation[fallbackKey]) {
            translation = translation[fallbackKey];
          } else {
            return key; // Return key if no translation found
          }
        }
        break;
      }
    }

    return typeof translation === 'string' ? translation : key;
  }
}

