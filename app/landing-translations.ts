import type { Lang } from "@/contexts/LanguageContext"

export const landingTranslations: Record<Lang, LandingT> = {
  es: {
    nav: {
      features: "Funciones",
      app: "App",
      stores: "Distribuidores",
      categories: "Categorías",
      howItWorks: "Cómo funciona",
      cta: "Obtener la app — Gratis",
      langModal: "Elegir idioma",
    },
    hero: {
      title1: "Todas las ofertas.",
      title2: "Una App.",
      subtitle: "Ahorra tiempo y dinero — todas las ofertas semanales de Aligro, TopCC y Transgourmet de un vistazo. Sin más folletos.",
      chips: ["Gratis", "Sin suscripción", "Sin publicidad"],
      offersPerWeek: "ofertas/semana",
      totalOffers: "500+ ofertas",
      updatedWeekly: "actualizado cada semana",
    },
    stats: {
      storesLabel: "Mayoristas",
      offersLabel: "Ofertas por semana",
      freeValue: "Gratis",
      freeLabel: "Sin suscripción",
      langLabel: "5 idiomas",
    },
    features: {
      badge: "Funciones",
      title: "Creado para el",
      titleHighlight: "profesional de la restauración.",
      subtitle: "Sin relleno. Sin suscripción. Sin publicidad. Solo lo que realmente necesitas — cada semana, cuando llegan las nuevas ofertas.",
      items: [
        { title: "Todas las ofertas. Una app.", description: "Sin más tres apps distintas. Offerto PROFI muestra todas las ofertas semanales de Aligro, TopCC y Transgourmet en una vista clara." },
        { title: "Busca, filtra, ahorra.", description: "Filtra por categoría, distribuidor o descuento. Busca en español, alemán o francés — la app encuentra la mejor oferta." },
        { title: "No olvides nada más.", description: "Añade ofertas directamente a tu lista de compras, marca los artículos y ve en tiempo real cuánto ahorras. Completamente disponible sin conexión." },
        { title: "Folletos digitales.", description: "Hojea los folletos publicitarios originales directamente en la app. Zoom, desliza y guarda páginas interesantes — todo digital, sin papel." },
        { title: "Notificaciones.", description: "Recibe una notificación push en cuanto haya nuevas ofertas disponibles. No pierdas nunca más tu producto favorito en promoción." },
        { title: "Disponible sin conexión.", description: "Todas las ofertas se guardan localmente. Incluso sin conexión a internet tienes acceso completo — perfecto para hacer la compra en el almacén." },
      ],
    },
    screenshots: {
      badge: "Vista previa de la app",
      title: "La app",
      titleHighlight: "de un vistazo.",
      subtitle: "Diseñada para el uso diario en tu negocio — rápida, clara y completamente disponible sin conexión.",
      items: [
        { label: "Vista de ofertas", description: "Todas las ofertas actuales de todos los distribuidores de un vistazo" },
        { label: "Búsqueda y filtros", description: "Filtra por producto, categoría, distribuidor o nivel de descuento" },
        { label: "Lista de compras", description: "Añade ofertas directamente, ve el ahorro en tiempo real" },
        { label: "Folletos digitales", description: "Hojea los materiales publicitarios originales directamente en la app" },
      ],
    },
    stores: {
      badge: "Distribuidores",
      title: "Tres mayoristas.",
      titleHighlight: "Cientos de ofertas.",
      subtitle: "Offerto PROFI agrega las ofertas semanales de los tres principales mayoristas Cash & Carry de Suiza — completo, actualizado semanalmente.",
      items: [
        { name: "Aligro", description: "El principal mayorista Cash & Carry de Suiza. Productos frescos, carne, bebidas y no alimentario para establecimientos de restauración." },
        { name: "TopCC", description: "Mayorista con amplio surtido para restaurantes, comedores y hostelería. Fuertes promociones cada semana." },
        { name: "Transgourmet", description: "Especialista en foodservice con entrega y Cash & Carry. Surtido premium para establecimientos de restauración exigentes." },
      ],
      thankYou: "Offerto PROFI agradece a Aligro, TopCC y Transgourmet por facilitar sus datos de ofertas semanales.",
    },
    categories: {
      badge: "Categorías",
      title: "Ofertas en",
      titleHighlight: "cada categoría.",
      subtitle: "Desde productos frescos hasta bebidas — encuentra cada semana las mejores promociones para tu negocio.",
      items: ["Frutas y Verduras", "Carne y Embutidos", "Pescado y Marisco", "Leche y Queso", "Bebidas", "Panadería"],
    },
    howItWorks: {
      badge: "Cómo funciona",
      title: "En 3",
      titleHighlight: "sencillos pasos.",
      subtitle: "Desde la búsqueda hasta la compra — todo en una sola app.",
      steps: [
        { title: "Explora las ofertas", description: "Desplázate por cientos de ofertas actuales de Aligro, TopCC y Transgourmet. Filtra por categoría, distribuidor o nivel de descuento — en español, alemán o francés." },
        { title: "Añade a la lista de compras", description: "Añade las ofertas interesantes a tu lista personal con un solo toque. Ve inmediatamente cuánto ahorrarás esta semana." },
        { title: "Compra en el almacén", description: "Abre tu lista de compras mientras haces las compras — incluso completamente sin conexión a internet. Marca los artículos completados y mantén el control en todo momento." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Preguntas",
      titleHighlight: "frecuentes.",
      subtitle: "Todo lo que necesitas saber sobre Offerto PROFI.",
      items: [
        { question: "¿La app es realmente gratuita?", answer: "Sí, Offerto PROFI es completamente gratuito. Sin suscripción, sin costes ocultos, sin publicidad." },
        { question: "¿Qué mayoristas están disponibles?", answer: "Offerto PROFI agrega actualmente las ofertas semanales de Aligro, TopCC y Transgourmet — los tres principales mayoristas Cash & Carry de Suiza." },
        { question: "¿Con qué frecuencia se actualizan las ofertas?", answer: "Las ofertas se actualizan automáticamente cada semana en cuanto las nuevas promociones de los distribuidores están disponibles. Recibes una notificación push cuando aparecen nuevas ofertas." },
        { question: "¿La app funciona sin internet?", answer: "Sí. Todas las ofertas se guardan localmente en tu dispositivo. Puedes usar la app y tu lista de compras completamente sin conexión — ideal para hacer la compra en el almacén." },
        { question: "¿En qué idiomas está disponible la app?", answer: "Offerto PROFI está completamente disponible en alemán, francés, italiano, inglés y español." },
        { question: "¿Hay una versión para Android?", answer: "La app está actualmente disponible para iOS. Una versión Android está en desarrollo y pronto estará disponible en Google Play Store." },
      ],
    },
    cta: {
      title: "¿Listo para ahorrar",
      titleHighlight: "tiempo y dinero?",
      subtitle: "Todas las ofertas semanales de Aligro, TopCC y Transgourmet — siempre actualizadas, siempre contigo.",
      benefits: ["Gratis", "Sin suscripción", "Sin publicidad", "Actualizaciones de por vida", "Disponible sin conexión"],
    },
    footer: {
      copyright: "Todos los derechos reservados.",
      datenschutz: "Privacidad",
      impressum: "Aviso legal",
      kontakt: "Contacto",
      praesentation: "Presentación",
      langModal: "Idioma",
    },
  },

  de: {
    nav: {
      features: "Features",
      app: "App",
      stores: "Händler",
      categories: "Kategorien",
      howItWorks: "So geht's",
      cta: "App holen — Kostenlos",
      langModal: "Sprache wählen",
    },
    hero: {
      title1: "Alle Angebote.",
      title2: "Eine App.",
      subtitle: "Spare Zeit und Geld — alle Wochenangebote von Aligro, TopCC und Transgourmet auf einen Blick. Nie wieder Prospekte wälzen.",
      chips: ["Kostenlos", "Kein Abo", "Keine Werbung"],
      offersPerWeek: "Angebote/Woche",
      totalOffers: "500+ Angebote",
      updatedWeekly: "jede Woche aktualisiert",
    },
    stats: {
      storesLabel: "Grosshändler",
      offersLabel: "Angebote pro Woche",
      freeValue: "Kostenlos",
      freeLabel: "Kein Abo",
      langLabel: "5 Sprachen",
    },
    features: {
      badge: "Features",
      title: "Gebaut für den",
      titleHighlight: "Gastronomie-Profi.",
      subtitle: "Kein Bloat. Kein Abo. Keine Werbung. Nur das, was du wirklich brauchst — jede Woche, wenn die neuen Angebote kommen.",
      items: [
        { title: "Alle Angebote. Eine App.", description: "Keine drei verschiedenen Apps mehr. Offerto PROFI zeigt alle Wochenangebote von Aligro, TopCC und Transgourmet in einer übersichtlichen Ansicht." },
        { title: "Suchen, filtern, sparen.", description: "Filtere nach Kategorie, Händler oder Rabatt. Suche auf Deutsch, Französisch oder Italienisch — die App findet das günstigste Angebot." },
        { title: "Nie wieder etwas vergessen.", description: "Füge Angebote direkt zur Einkaufsliste hinzu, hake Artikel ab und sieh in Echtzeit wie viel du sparst. Vollständig offline verfügbar." },
        { title: "Digitale Prospekte.", description: "Blättere in den originalen Werbeprospekten direkt in der App. Zoom, swipe und speichere interessante Seiten — alles digital, kein Papier." },
        { title: "Benachrichtigungen.", description: "Erhalte eine Push-Benachrichtigung, sobald neue Angebote verfügbar sind. Nie mehr verpassen, wenn dein Lieblingsprodukt im Angebot ist." },
        { title: "Offline verfügbar.", description: "Alle Angebote werden lokal gespeichert. Auch ohne Internetverbindung hast du vollen Zugriff — perfekt für den Einkauf im Lager." },
      ],
    },
    screenshots: {
      badge: "App-Vorschau",
      title: "Die App",
      titleHighlight: "im Überblick.",
      subtitle: "Designed für den täglichen Einsatz im Betrieb — schnell, übersichtlich und vollständig offline verfügbar.",
      items: [
        { label: "Angebots-Übersicht", description: "Alle aktuellen Aktionen aller Händler auf einen Blick" },
        { label: "Suche & Filter", description: "Nach Produkt, Kategorie, Händler oder Rabattstufe filtern" },
        { label: "Einkaufsliste", description: "Angebote direkt hinzufügen, Ersparnis in Echtzeit sehen" },
        { label: "Digitale Prospekte", description: "Originale Werbematerialien direkt in der App durchblättern" },
      ],
    },
    stores: {
      badge: "Händler",
      title: "Drei Grosshändler.",
      titleHighlight: "Hunderte Angebote.",
      subtitle: "Offerto PROFI aggregiert die Wochenangebote der drei führenden Cash-&-Carry-Händler der Schweiz — vollständig, wöchentlich aktualisiert.",
      items: [
        { name: "Aligro", description: "Der führende Cash-&-Carry-Händler der Schweiz. Frischprodukte, Fleisch, Getränke und Non-Food für Gastronomiebetriebe." },
        { name: "TopCC", description: "Grosshandel mit breitem Sortiment für Restaurants, Kantinen und Hotellerie. Starke Aktionen jede Woche." },
        { name: "Transgourmet", description: "Foodservice-Spezialist mit Lieferdienst und Cash-&-Carry. Premium-Sortiment für anspruchsvolle Gastronomiebetriebe." },
      ],
      thankYou: "Offerto PROFI dankt Aligro, TopCC und Transgourmet für die Bereitstellung ihrer wöchentlichen Angebotsdaten.",
    },
    categories: {
      badge: "Kategorien",
      title: "Angebote in",
      titleHighlight: "jeder Kategorie.",
      subtitle: "Von Frischprodukten bis Getränke — finde jede Woche die besten Aktionen für deinen Betrieb.",
      items: ["Früchte & Gemüse", "Fleisch & Wurst", "Fisch & Meeresfrüchte", "Milch & Käse", "Getränke", "Bäckerei"],
    },
    howItWorks: {
      badge: "So funktioniert's",
      title: "In 3",
      titleHighlight: "einfachen Schritten.",
      subtitle: "Von der Suche bis zum Einkauf — alles in einer App.",
      steps: [
        { title: "Angebote durchstöbern", description: "Scrolle durch hunderte aktuelle Angebote von Aligro, TopCC und Transgourmet. Filtere nach Kategorie, Händler oder Rabattstufe — auf Deutsch, Französisch oder Italienisch." },
        { title: "Zur Einkaufsliste hinzufügen", description: "Füge interessante Angebote mit einem einzigen Tippen zur persönlichen Einkaufsliste hinzu. Sieh sofort, wie viel du in dieser Woche sparst." },
        { title: "Im Lager einkaufen", description: "Öffne deine Einkaufsliste beim Einkaufen — auch komplett ohne Internetverbindung. Hake erledigte Artikel ab und behalte jederzeit den Überblick." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Häufig gestellte",
      titleHighlight: "Fragen.",
      subtitle: "Alles, was du über Offerto PROFI wissen musst.",
      items: [
        { question: "Ist die App wirklich kostenlos?", answer: "Ja, Offerto PROFI ist vollständig kostenlos. Kein Abo, keine versteckten Kosten, keine Werbung." },
        { question: "Welche Grosshändler sind verfügbar?", answer: "Aktuell aggregiert Offerto PROFI die Wochenangebote von Aligro, TopCC und Transgourmet — den drei führenden Cash-&-Carry-Händlern der Schweiz." },
        { question: "Wie oft werden die Angebote aktualisiert?", answer: "Die Angebote werden jede Woche automatisch aktualisiert, sobald die neuen Aktionen der Händler verfügbar sind. Du erhältst eine Push-Benachrichtigung, wenn neue Angebote erscheinen." },
        { question: "Funktioniert die App auch ohne Internet?", answer: "Ja. Alle Angebote werden lokal auf deinem Gerät gespeichert. Du kannst die App und deine Einkaufsliste vollständig offline nutzen — ideal für den Einkauf im Lager." },
        { question: "In welchen Sprachen ist die App verfügbar?", answer: "Offerto PROFI ist vollständig auf Deutsch, Französisch, Italienisch, Englisch und Spanisch verfügbar." },
        { question: "Gibt es eine Android-Version?", answer: "Die App ist aktuell für iOS verfügbar. Eine Android-Version ist in Entwicklung und wird bald im Google Play Store erhältlich sein." },
      ],
    },
    cta: {
      title: "Bereit, Zeit und",
      titleHighlight: "Geld zu sparen?",
      subtitle: "Alle Wochenangebote von Aligro, TopCC und Transgourmet — immer aktuell, immer dabei.",
      benefits: ["Kostenlos", "Kein Abo", "Keine Werbung", "Lebenslange Updates", "Offline verfügbar"],
    },
    footer: {
      copyright: "Alle Rechte vorbehalten.",
      datenschutz: "Datenschutz",
      impressum: "Impressum",
      kontakt: "Kontakt",
      praesentation: "Präsentation",
      langModal: "Sprache",
    },
  },

  fr: {
    nav: {
      features: "Fonctionnalités",
      app: "App",
      stores: "Distributeurs",
      categories: "Catégories",
      howItWorks: "Comment ça marche",
      cta: "Obtenir l'app — Gratuit",
      langModal: "Choisir la langue",
    },
    hero: {
      title1: "Toutes les offres.",
      title2: "Une App.",
      subtitle: "Économisez temps et argent — toutes les offres hebdomadaires d'Aligro, TopCC et Transgourmet en un coup d'œil. Fini de feuilleter les prospectus.",
      chips: ["Gratuit", "Sans abonnement", "Sans publicité"],
      offersPerWeek: "offres/semaine",
      totalOffers: "500+ offres",
      updatedWeekly: "mis à jour chaque semaine",
    },
    stats: {
      storesLabel: "Grossistes",
      offersLabel: "Offres par semaine",
      freeValue: "Gratuit",
      freeLabel: "Sans abonnement",
      langLabel: "5 langues",
    },
    features: {
      badge: "Fonctionnalités",
      title: "Conçu pour le",
      titleHighlight: "professionnel de la restauration.",
      subtitle: "Pas de superflu. Pas d'abonnement. Pas de pub. Uniquement ce dont vous avez besoin — chaque semaine, quand les nouvelles offres arrivent.",
      items: [
        { title: "Toutes les offres. Une app.", description: "Fini les trois apps différentes. Offerto PROFI affiche toutes les offres hebdomadaires d'Aligro, TopCC et Transgourmet dans une vue claire." },
        { title: "Chercher, filtrer, économiser.", description: "Filtrez par catégorie, distributeur ou remise. Recherchez en français, allemand ou italien — l'app trouve la meilleure offre." },
        { title: "Ne plus jamais rien oublier.", description: "Ajoutez des offres directement à votre liste de courses, cochez les articles et voyez en temps réel combien vous économisez. Entièrement disponible hors ligne." },
        { title: "Prospectus numériques.", description: "Feuilletez les prospectus publicitaires originaux directement dans l'app. Zoomez, faites glisser et sauvegardez les pages intéressantes — tout numérique, sans papier." },
        { title: "Notifications.", description: "Recevez une notification push dès que de nouvelles offres sont disponibles. Ne manquez plus jamais votre produit préféré en promotion." },
        { title: "Disponible hors ligne.", description: "Toutes les offres sont sauvegardées localement. Même sans connexion internet, vous avez un accès complet — parfait pour faire ses courses en entrepôt." },
      ],
    },
    screenshots: {
      badge: "Aperçu de l'app",
      title: "L'app",
      titleHighlight: "en un coup d'œil.",
      subtitle: "Conçue pour une utilisation quotidienne en entreprise — rapide, claire et entièrement disponible hors ligne.",
      items: [
        { label: "Vue des offres", description: "Toutes les offres actuelles de tous les distributeurs en un coup d'œil" },
        { label: "Recherche & Filtres", description: "Filtrer par produit, catégorie, distributeur ou niveau de remise" },
        { label: "Liste de courses", description: "Ajouter des offres directement, voir les économies en temps réel" },
        { label: "Prospectus numériques", description: "Feuilleter les supports publicitaires originaux directement dans l'app" },
      ],
    },
    stores: {
      badge: "Distributeurs",
      title: "Trois grossistes.",
      titleHighlight: "Des centaines d'offres.",
      subtitle: "Offerto PROFI agrège les offres hebdomadaires des trois principaux grossistes Cash & Carry de Suisse — complet, mis à jour chaque semaine.",
      items: [
        { name: "Aligro", description: "Le principal grossiste Cash & Carry de Suisse. Produits frais, viande, boissons et non-alimentaire pour les établissements de restauration." },
        { name: "TopCC", description: "Grossiste avec un large assortiment pour les restaurants, cantines et hôtellerie. De fortes promotions chaque semaine." },
        { name: "Transgourmet", description: "Spécialiste foodservice avec livraison et Cash & Carry. Assortiment premium pour les établissements de restauration exigeants." },
      ],
      thankYou: "Offerto PROFI remercie Aligro, TopCC et Transgourmet pour la mise à disposition de leurs données d'offres hebdomadaires.",
    },
    categories: {
      badge: "Catégories",
      title: "Des offres dans",
      titleHighlight: "chaque catégorie.",
      subtitle: "Des produits frais aux boissons — trouvez chaque semaine les meilleures promotions pour votre établissement.",
      items: ["Fruits & Légumes", "Viande & Charcuterie", "Poisson & Fruits de mer", "Lait & Fromage", "Boissons", "Boulangerie"],
    },
    howItWorks: {
      badge: "Comment ça marche",
      title: "En 3",
      titleHighlight: "étapes simples.",
      subtitle: "De la recherche à l'achat — tout dans une seule app.",
      steps: [
        { title: "Parcourir les offres", description: "Faites défiler des centaines d'offres actuelles d'Aligro, TopCC et Transgourmet. Filtrez par catégorie, distributeur ou niveau de remise — en français, allemand ou italien." },
        { title: "Ajouter à la liste de courses", description: "Ajoutez des offres intéressantes à votre liste personnelle d'un seul tap. Voyez immédiatement combien vous économisez cette semaine." },
        { title: "Faire ses courses en entrepôt", description: "Ouvrez votre liste de courses en faisant vos achats — même sans connexion internet. Cochez les articles faits et gardez une vue d'ensemble à tout moment." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Questions",
      titleHighlight: "fréquentes.",
      subtitle: "Tout ce que vous devez savoir sur Offerto PROFI.",
      items: [
        { question: "L'app est-elle vraiment gratuite?", answer: "Oui, Offerto PROFI est entièrement gratuit. Pas d'abonnement, pas de coûts cachés, pas de publicité." },
        { question: "Quels grossistes sont disponibles?", answer: "Offerto PROFI agrège actuellement les offres hebdomadaires d'Aligro, TopCC et Transgourmet — les trois principaux grossistes Cash & Carry de Suisse." },
        { question: "À quelle fréquence les offres sont-elles mises à jour?", answer: "Les offres sont mises à jour automatiquement chaque semaine dès que les nouvelles promotions des distributeurs sont disponibles. Vous recevez une notification push lors de l'apparition de nouvelles offres." },
        { question: "L'app fonctionne-t-elle sans internet?", answer: "Oui. Toutes les offres sont sauvegardées localement sur votre appareil. Vous pouvez utiliser l'app et votre liste de courses entièrement hors ligne — idéal pour faire ses courses en entrepôt." },
        { question: "Dans quelles langues l'app est-elle disponible?", answer: "Offerto PROFI est entièrement disponible en allemand, français, italien, anglais et espagnol." },
        { question: "Existe-t-il une version Android?", answer: "L'app est actuellement disponible pour iOS. Une version Android est en cours de développement et sera bientôt disponible sur le Google Play Store." },
      ],
    },
    cta: {
      title: "Prêt à économiser",
      titleHighlight: "temps et argent?",
      subtitle: "Toutes les offres hebdomadaires d'Aligro, TopCC et Transgourmet — toujours à jour, toujours avec vous.",
      benefits: ["Gratuit", "Sans abonnement", "Sans publicité", "Mises à jour à vie", "Disponible hors ligne"],
    },
    footer: {
      copyright: "Tous droits réservés.",
      datenschutz: "Confidentialité",
      impressum: "Mentions légales",
      kontakt: "Contact",
      praesentation: "Présentation",
      langModal: "Langue",
    },
  },

  it: {
    nav: {
      features: "Funzionalità",
      app: "App",
      stores: "Distributori",
      categories: "Categorie",
      howItWorks: "Come funziona",
      cta: "Scarica l'app — Gratis",
      langModal: "Scegli la lingua",
    },
    hero: {
      title1: "Tutte le offerte.",
      title2: "Un'App.",
      subtitle: "Risparmiate tempo e denaro — tutte le offerte settimanali di Aligro, TopCC e Transgourmet in un colpo d'occhio. Basta sfogliare volantini.",
      chips: ["Gratuito", "Nessun abbonamento", "Nessuna pubblicità"],
      offersPerWeek: "offerte/settimana",
      totalOffers: "500+ offerte",
      updatedWeekly: "aggiornato ogni settimana",
    },
    stats: {
      storesLabel: "Grossisti",
      offersLabel: "Offerte a settimana",
      freeValue: "Gratuito",
      freeLabel: "Nessun abbonamento",
      langLabel: "5 lingue",
    },
    features: {
      badge: "Funzionalità",
      title: "Creato per il",
      titleHighlight: "professionista della ristorazione.",
      subtitle: "Niente di superfluo. Nessun abbonamento. Nessuna pubblicità. Solo ciò di cui hai davvero bisogno — ogni settimana, quando arrivano le nuove offerte.",
      items: [
        { title: "Tutte le offerte. Un'app.", description: "Niente più tre app diverse. Offerto PROFI mostra tutte le offerte settimanali di Aligro, TopCC e Transgourmet in una vista chiara." },
        { title: "Cerca, filtra, risparmia.", description: "Filtra per categoria, distributore o sconto. Cerca in italiano, tedesco o francese — l'app trova l'offerta migliore." },
        { title: "Non dimenticare più nulla.", description: "Aggiungi le offerte direttamente alla lista della spesa, spunta gli articoli e vedi in tempo reale quanto risparmi. Completamente disponibile offline." },
        { title: "Volantini digitali.", description: "Sfoglia i volantini pubblicitari originali direttamente nell'app. Zoom, scorri e salva le pagine interessanti — tutto digitale, niente carta." },
        { title: "Notifiche.", description: "Ricevi una notifica push non appena sono disponibili nuove offerte. Non perdere mai più il tuo prodotto preferito in promozione." },
        { title: "Disponibile offline.", description: "Tutte le offerte vengono salvate localmente. Anche senza connessione internet hai accesso completo — perfetto per fare la spesa al magazzino." },
      ],
    },
    screenshots: {
      badge: "Anteprima app",
      title: "L'app",
      titleHighlight: "in sintesi.",
      subtitle: "Progettata per l'uso quotidiano in azienda — veloce, chiara e completamente disponibile offline.",
      items: [
        { label: "Panoramica offerte", description: "Tutte le offerte attuali di tutti i distributori in un colpo d'occhio" },
        { label: "Ricerca & Filtri", description: "Filtra per prodotto, categoria, distributore o livello di sconto" },
        { label: "Lista della spesa", description: "Aggiungi offerte direttamente, vedi il risparmio in tempo reale" },
        { label: "Volantini digitali", description: "Sfoglia i materiali pubblicitari originali direttamente nell'app" },
      ],
    },
    stores: {
      badge: "Distributori",
      title: "Tre grossisti.",
      titleHighlight: "Centinaia di offerte.",
      subtitle: "Offerto PROFI aggrega le offerte settimanali dei tre principali grossisti Cash & Carry della Svizzera — completo, aggiornato ogni settimana.",
      items: [
        { name: "Aligro", description: "Il principale grossista Cash & Carry della Svizzera. Prodotti freschi, carne, bevande e non-food per le aziende di ristorazione." },
        { name: "TopCC", description: "Grossista con ampio assortimento per ristoranti, mense e alberghi. Forti promozioni ogni settimana." },
        { name: "Transgourmet", description: "Specialista foodservice con servizio di consegna e Cash & Carry. Assortimento premium per aziende di ristorazione esigenti." },
      ],
      thankYou: "Offerto PROFI ringrazia Aligro, TopCC e Transgourmet per la messa a disposizione dei loro dati di offerta settimanali.",
    },
    categories: {
      badge: "Categorie",
      title: "Offerte in",
      titleHighlight: "ogni categoria.",
      subtitle: "Dai prodotti freschi alle bevande — trova ogni settimana le migliori promozioni per la tua azienda.",
      items: ["Frutta & Verdura", "Carne & Salumi", "Pesce & Frutti di mare", "Latte & Formaggi", "Bevande", "Panetteria"],
    },
    howItWorks: {
      badge: "Come funziona",
      title: "In 3",
      titleHighlight: "semplici passi.",
      subtitle: "Dalla ricerca all'acquisto — tutto in un'unica app.",
      steps: [
        { title: "Sfoglia le offerte", description: "Scorri centinaia di offerte attuali di Aligro, TopCC e Transgourmet. Filtra per categoria, distributore o livello di sconto — in italiano, tedesco o francese." },
        { title: "Aggiungi alla lista della spesa", description: "Aggiungi le offerte interessanti alla tua lista personale con un solo tocco. Vedi subito quanto risparmierai questa settimana." },
        { title: "Fai la spesa al magazzino", description: "Apri la tua lista della spesa mentre fai gli acquisti — anche completamente senza connessione internet. Spunta gli articoli completati e mantieni sempre il controllo." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Domande",
      titleHighlight: "frequenti.",
      subtitle: "Tutto ciò che devi sapere su Offerto PROFI.",
      items: [
        { question: "L'app è davvero gratuita?", answer: "Sì, Offerto PROFI è completamente gratuito. Nessun abbonamento, nessun costo nascosto, nessuna pubblicità." },
        { question: "Quali grossisti sono disponibili?", answer: "Offerto PROFI aggrega attualmente le offerte settimanali di Aligro, TopCC e Transgourmet — i tre principali grossisti Cash & Carry della Svizzera." },
        { question: "Con quale frequenza vengono aggiornate le offerte?", answer: "Le offerte vengono aggiornate automaticamente ogni settimana non appena le nuove promozioni dei distributori sono disponibili. Ricevi una notifica push quando appaiono nuove offerte." },
        { question: "L'app funziona anche senza internet?", answer: "Sì. Tutte le offerte vengono salvate localmente sul tuo dispositivo. Puoi usare l'app e la tua lista della spesa completamente offline — ideale per fare la spesa al magazzino." },
        { question: "In quali lingue è disponibile l'app?", answer: "Offerto PROFI è completamente disponibile in tedesco, francese, italiano, inglese e spagnolo." },
        { question: "Esiste una versione Android?", answer: "L'app è attualmente disponibile per iOS. Una versione Android è in sviluppo e sarà presto disponibile sul Google Play Store." },
      ],
    },
    cta: {
      title: "Pronto a risparmiare",
      titleHighlight: "tempo e denaro?",
      subtitle: "Tutte le offerte settimanali di Aligro, TopCC e Transgourmet — sempre aggiornate, sempre con te.",
      benefits: ["Gratuito", "Nessun abbonamento", "Nessuna pubblicità", "Aggiornamenti a vita", "Disponibile offline"],
    },
    footer: {
      copyright: "Tutti i diritti riservati.",
      datenschutz: "Privacy",
      impressum: "Note legali",
      kontakt: "Contatto",
      praesentation: "Presentazione",
      langModal: "Lingua",
    },
  },

  en: {
    nav: {
      features: "Features",
      app: "App",
      stores: "Stores",
      categories: "Categories",
      howItWorks: "How it works",
      cta: "Get the App — Free",
      langModal: "Choose language",
    },
    hero: {
      title1: "All Offers.",
      title2: "One App.",
      subtitle: "Save time and money — all weekly deals from Aligro, TopCC and Transgourmet at a glance. No more flipping through brochures.",
      chips: ["Free", "No subscription", "No ads"],
      offersPerWeek: "offers/week",
      totalOffers: "500+ offers",
      updatedWeekly: "updated every week",
    },
    stats: {
      storesLabel: "Wholesalers",
      offersLabel: "Offers per week",
      freeValue: "Free",
      freeLabel: "No subscription",
      langLabel: "5 languages",
    },
    features: {
      badge: "Features",
      title: "Built for the",
      titleHighlight: "gastronomy professional.",
      subtitle: "No bloat. No subscription. No ads. Only what you really need — every week, when the new deals arrive.",
      items: [
        { title: "All offers. One app.", description: "No more three different apps. Offerto PROFI shows all weekly deals from Aligro, TopCC and Transgourmet in one clear view." },
        { title: "Search, filter, save.", description: "Filter by category, store or discount. Search in English, German or French — the app finds the best deal." },
        { title: "Never forget anything again.", description: "Add deals directly to your shopping list, check off items and see in real time how much you save. Fully available offline." },
        { title: "Digital brochures.", description: "Browse the original promotional brochures directly in the app. Zoom, swipe and save interesting pages — all digital, no paper." },
        { title: "Notifications.", description: "Receive a push notification as soon as new offers are available. Never miss your favourite product on sale again." },
        { title: "Available offline.", description: "All offers are stored locally. Even without an internet connection you have full access — perfect for shopping at the warehouse." },
      ],
    },
    screenshots: {
      badge: "App Preview",
      title: "The app",
      titleHighlight: "at a glance.",
      subtitle: "Designed for daily use in your business — fast, clear and fully available offline.",
      items: [
        { label: "Offers Overview", description: "All current deals from all stores at a glance" },
        { label: "Search & Filter", description: "Filter by product, category, store or discount level" },
        { label: "Shopping List", description: "Add deals directly, see savings in real time" },
        { label: "Digital Brochures", description: "Browse original promotional materials directly in the app" },
      ],
    },
    stores: {
      badge: "Stores",
      title: "Three wholesalers.",
      titleHighlight: "Hundreds of deals.",
      subtitle: "Offerto PROFI aggregates the weekly offers from Switzerland's three leading Cash & Carry wholesalers — complete, updated weekly.",
      items: [
        { name: "Aligro", description: "Switzerland's leading Cash & Carry wholesaler. Fresh produce, meat, beverages and non-food for hospitality businesses." },
        { name: "TopCC", description: "Wholesaler with a broad assortment for restaurants, canteens and hotels. Strong promotions every week." },
        { name: "Transgourmet", description: "Foodservice specialist with delivery and Cash & Carry. Premium assortment for demanding hospitality businesses." },
      ],
      thankYou: "Offerto PROFI thanks Aligro, TopCC and Transgourmet for providing their weekly offer data.",
    },
    categories: {
      badge: "Categories",
      title: "Deals in",
      titleHighlight: "every category.",
      subtitle: "From fresh produce to beverages — find the best deals for your business every week.",
      items: ["Fruits & Vegetables", "Meat & Deli", "Fish & Seafood", "Milk & Cheese", "Beverages", "Bakery"],
    },
    howItWorks: {
      badge: "How it works",
      title: "In 3",
      titleHighlight: "simple steps.",
      subtitle: "From browsing to shopping — all in one app.",
      steps: [
        { title: "Browse offers", description: "Scroll through hundreds of current offers from Aligro, TopCC and Transgourmet. Filter by category, store or discount level — in English, German or French." },
        { title: "Add to shopping list", description: "Add interesting offers to your personal shopping list with a single tap. See immediately how much you save this week." },
        { title: "Shop at the warehouse", description: "Open your shopping list while shopping — even completely without an internet connection. Check off completed items and stay on top of things at any time." },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Frequently asked",
      titleHighlight: "questions.",
      subtitle: "Everything you need to know about Offerto PROFI.",
      items: [
        { question: "Is the app really free?", answer: "Yes, Offerto PROFI is completely free. No subscription, no hidden costs, no ads." },
        { question: "Which wholesalers are available?", answer: "Offerto PROFI currently aggregates the weekly offers from Aligro, TopCC and Transgourmet — Switzerland's three leading Cash & Carry wholesalers." },
        { question: "How often are the offers updated?", answer: "Offers are updated automatically every week as soon as the new promotions from the stores are available. You receive a push notification when new offers appear." },
        { question: "Does the app work without internet?", answer: "Yes. All offers are stored locally on your device. You can use the app and your shopping list fully offline — ideal for shopping at the warehouse." },
        { question: "In which languages is the app available?", answer: "Offerto PROFI is fully available in German, French, Italian, English and Spanish." },
        { question: "Is there an Android version?", answer: "The app is currently available for iOS. An Android version is in development and will soon be available on the Google Play Store." },
      ],
    },
    cta: {
      title: "Ready to save",
      titleHighlight: "time and money?",
      subtitle: "All weekly deals from Aligro, TopCC and Transgourmet — always up to date, always with you.",
      benefits: ["Free", "No subscription", "No ads", "Lifetime updates", "Available offline"],
    },
    footer: {
      copyright: "All rights reserved.",
      datenschutz: "Privacy",
      impressum: "Legal notice",
      kontakt: "Contact",
      praesentation: "Presentation",
      langModal: "Language",
    },
  },
}

export type LandingT = {
  nav: {
    features: string
    app: string
    stores: string
    categories: string
    howItWorks: string
    cta: string
    langModal: string
  }
  hero: {
    title1: string
    title2: string
    subtitle: string
    chips: string[]
    offersPerWeek: string
    totalOffers: string
    updatedWeekly: string
  }
  stats: {
    storesLabel: string
    offersLabel: string
    freeValue: string
    freeLabel: string
    langLabel: string
  }
  features: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: { title: string; description: string }[]
  }
  screenshots: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: { label: string; description: string }[]
  }
  stores: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: { name: string; description: string }[]
    thankYou: string
  }
  categories: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: string[]
  }
  howItWorks: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    steps: { title: string; description: string }[]
  }
  faq: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    items: { question: string; answer: string }[]
  }
  cta: {
    title: string
    titleHighlight: string
    subtitle: string
    benefits: string[]
  }
  footer: {
    copyright: string
    datenschutz: string
    impressum: string
    kontakt: string
    praesentation: string
    langModal: string
  }
}
