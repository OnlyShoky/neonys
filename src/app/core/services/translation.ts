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
  private currentLanguage = 'en';
  
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
        automate: "automate",
        subtitle: "Let's discuss how we can save you time and streamline your workflows.",
        form: {
          name: "Name",
          email: "Email",
          message: "What would you like to automate?",
          submit: "Send Message"
        }
      },
      footer: {
        tagline: "Hero Agents for the future.",
        rights: "All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        contact: "Contact Us"
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
    automate: "automatizar",
    subtitle: "Hablemos de cómo podemos ahorrarte tiempo y optimizar tus flujos de trabajo.",
    form: {
      name: "Nombre",
      email: "Correo Electrónico",
      message: "¿Qué te gustaría automatizar?",
      submit: "Enviar Mensaje"
    }
  },
  footer: {
    tagline: "Agentes Hero para el futuro.",
    rights: "Todos los derechos reservados.",
    privacy: "Política de Privacidad",
    terms: "Términos de Servicio",
    contact: "Contáctanos"
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
      submit: "Envoyer le Message"
    }
  },
  footer: {
    tagline: "Agents Héros pour le futur.",
    rights: "Tous droits réservés.",
    privacy: "Politique de Confidentialité",
    terms: "Conditions d’Utilisation",
    contact: "Contactez-nous"
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

