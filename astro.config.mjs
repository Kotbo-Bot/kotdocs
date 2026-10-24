import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// Une entrée de la barre latérale : libellé français, libellé anglais, page.
const page = (label, en, slug) => ({ label, translations: { en }, slug });
// Un groupe : mêmes libellés, puis ses entrées.
const group = (label, en, items) => ({ label, translations: { en }, items });

export default defineConfig({
  site: 'https://docs.kotbo.fr',
  integrations: [
    starlight({
      title: 'Kotbo Docs',
      description: 'Le guide utilisateur officiel du dashboard Kotbo.',
      logo: {
        src: './src/assets/kotbo-logo.svg',
        alt: 'Kotbo',
        replacesTitle: true,
      },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'Français',
          lang: 'fr-FR',
        },
        en: {
          label: 'English',
          lang: 'en',
        },
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Kotbo-Bot/kotbo-docs',
        },
      ],
      editLink: {
        baseUrl: 'https://github.com/Kotbo-Bot/kotbo-docs/edit/main/',
      },
      customCss: ['./src/styles/css.rooting.css'],
      // Les groupes du dashboard suivent l'ordre et les libellés de son menu.
      sidebar: [
        group('Premiers pas', 'First steps', [
          page('Connexion & serveur', 'Sign in & server', 'premiers-pas/connexion'),
          page('Le parcours de configuration', 'The setup journey', 'premiers-pas/parcours'),
          page('Prendre en main le dashboard', 'Find your way around', 'premiers-pas/interface'),
          page('Activer ses modules', 'Enable your modules', 'premiers-pas/modules'),
          page('Ordre de configuration', 'Setup order', 'premiers-pas/configuration-ordre'),
        ]),
        group('Configuration (Dashboard)', 'Configuration (Dashboard)', [
          group('Général', 'General', [
            page('Accueil', 'Home', 'dashboard/general/accueil'),
            page('Bien démarrer', 'Bien démarrer', 'dashboard/general/prise-en-main'),
            page('Santé du serveur', 'Server health', 'dashboard/general/pulse'),
            page('Notifications', 'Notifications', 'dashboard/general/notifications'),
            page('Statistiques', 'Statistics', 'dashboard/general/analytics'),
            page('Mon profil et mes préférences', 'My profile & preferences', 'dashboard/general/profil'),
          ]),
          group('Modération', 'Moderation', [
            page('Membres', 'Members', 'dashboard/moderation/membres'),
            page('Invitations', 'Invites', 'dashboard/moderation/invitations'),
            page('Journaux', 'Logs', 'dashboard/moderation/logs'),
            page('Retrouver un message', 'Find a message', 'dashboard/moderation/recherche-messages'),
            page('Actions du staff', 'Staff actions', 'dashboard/moderation/journal-activite'),
            page('Événements', 'Events', 'dashboard/communaute/evenements'),
            page('Formulaires', 'Forms', 'dashboard/communaute/formulaires'),
          ]),
          group('Protection', 'Protection', [
            page('Bilan', 'Summary', 'dashboard/moderation/vue-ensemble'),
            page('Configuration rapide', 'Quick setup', 'dashboard/moderation/configuration-rapide'),
            page('Anti-raid', 'Anti-raid', 'dashboard/moderation/anti-raid'),
            page('Filtres', 'Filters', 'dashboard/moderation/automod'),
            page('Pseudos', 'Nicknames', 'dashboard/moderation/pseudos'),
            page('Comptes suspects', 'Suspicious accounts', 'dashboard/moderation/double-comptes'),
            page('Sanctions', 'Sanctions', 'dashboard/moderation/sanctions'),
            page('Contestations de ban', 'Ban appeals', 'dashboard/moderation/appels-ban'),
          ]),
          group('Niveaux', 'Levels', [
            page('Niveaux', 'Levels', 'dashboard/xp/leveling'),
            page('Prestige', 'Prestige', 'dashboard/xp/prestige'),
            page('Saisons', 'Seasons', 'dashboard/xp/saisons'),
            page('Réputation', 'Reputation', 'dashboard/xp/reputation'),
            page('Clans', 'Clans', 'dashboard/xp/clans'),
            page('Drops', 'Drops', 'dashboard/xp/drops'),
          ]),
          group('Économie et jeux', 'Economy & games', [
            page('Configuration rapide', 'Quick setup', 'dashboard/economie/configuration-rapide'),
            page('Économie', 'Economy', 'dashboard/economie/economie'),
            page('Marché', 'Marketplace', 'dashboard/economie/marche'),
            page('Quêtes', 'Quests', 'dashboard/economie/quetes'),
          ]),
          group('Communauté', 'Community', [
            page('Giveaways', 'Giveaways', 'dashboard/communaute/giveaways'),
            page('Suggestions', 'Suggestions', 'dashboard/communaute/suggestions'),
            page('Rôles par réaction', 'Reaction roles', 'dashboard/communaute/reaction-roles'),
            page('Messages à la une', 'Highlighted messages', 'dashboard/communaute/starlight'),
            page('Salons fun', 'Fun channels', 'dashboard/communaute/salons-fun'),
            page('Déclencheurs', 'Triggers', 'dashboard/communaute/declencheurs'),
          ]),
          group('Communication', 'Communication', [
            page('Bienvenue et départs', 'Welcome & goodbye', 'dashboard/communaute/accueil-depart'),
            page('Campagnes', 'Campaigns', 'dashboard/communaute/campagnes'),
            page('Messages enrichis', 'Rich messages', 'dashboard/communaute/embeds'),
            page('Règlement', 'Rules', 'dashboard/communaute/reglement'),
            page('Actualités', 'News', 'dashboard/communaute/actualites'),
            page('Réseaux sociaux', 'Social networks', 'dashboard/communaute/reseaux-sociaux'),
          ]),
          group('Équipe', 'Team', [
            page('Membres du staff', 'Staff members', 'dashboard/staff/annuaire'),
            page('Rôles du staff', 'Staff roles', 'dashboard/staff/hierarchie'),
            page('Recrutement', 'Recruitment', 'dashboard/staff/recrutement'),
            page('Tickets', 'Tickets', 'dashboard/communaute/tickets'),
            page('Tutorat', 'Tutoring', 'dashboard/staff/tutorat'),
            page('Planning', 'Schedule', 'dashboard/staff/planning'),
            page('Sondages', 'Polls', 'dashboard/staff/sondages'),
            page('Discipline', 'Discipline', 'dashboard/staff/discipline'),
          ]),
          group('Réglages', 'Settings', [
            page('Réglages du serveur', 'Server settings', 'dashboard/configuration/centre-gestion'),
            page('Modules', 'Modules', 'dashboard/configuration/modules'),
            page('Santé des salons', 'Channel health', 'dashboard/configuration/sante-salons'),
            page('Salons', 'Channels', 'dashboard/configuration/salons'),
            page('Commandes', 'Commands', 'dashboard/configuration/commandes'),
            page('Sauvegardes', 'Backups', 'dashboard/configuration/sauvegardes'),
            page('Tâches planifiées', 'Scheduled tasks', 'dashboard/configuration/planifications'),
            page('Facturation', 'Billing', 'dashboard/configuration/facturation'),
          ]),
          group('Intégrations', 'Integrations', [
            page('Connecter une IA', 'Connect an AI', 'aide/mcp'),
            page('Bot personnalisé', 'Custom bot', 'dashboard/configuration/custom-bot'),
            page('Liens de salons', 'Channel links', 'dashboard/communaute/liens-salons'),
            page('Serveur du staff', 'Staff server', 'dashboard/cross-serveur/serveurs-staff'),
            page('Partenariats', 'Partnerships', 'dashboard/cross-serveur/partenariats'),
          ]),
        ]),
        group('Utilisation & Commandes (Discord)', 'Usage & commands (Discord)', [
          group('Modération', 'Moderation', [
            page('Modération automatique', 'Auto moderation', 'discord/moderation/automod'),
            page('Doubles comptes', 'Alt accounts', 'discord/moderation/double-comptes'),
            page('Sanctionner un membre', 'Sanctioning a member', 'discord/moderation/sanctions'),
          ]),
          group('Communauté', 'Community', [
            page('Messages d’accueil & départ', 'Welcome & leave messages', 'discord/communaute/accueil-depart'),
            page('Lier des salons', 'Channel links', 'discord/communaute/liens-salons'),
            page('Suggestions', 'Suggestions', 'discord/communaute/suggestions'),
            page('Salons fun', 'Fun channels', 'discord/communaute/salons-fun'),
            page('Tickets de support', 'Support tickets', 'discord/communaute/tickets'),
            page('Daily Algo', 'Daily Algo', 'discord/communaute/daily-algo'),
            page('Clans, saisons et paris', 'Clans, seasons and bets', 'discord/communaute/clans'),
          ]),
          group('Économie et jeux', 'Economy & games', [
            page('Jouer au RPG', 'Playing the RPG', 'discord/economie/rpg'),
            page('Monnaie, boutique et jeux', 'Currency, shop and games', 'discord/economie/economie'),
          ]),
          group('Niveaux', 'Levels', [
            page('Niveaux, classements et réputation', 'Levels, leaderboards and reputation', 'discord/xp/progression'),
          ]),
          group('Équipe', 'Team', [
            page('Commandes du staff', 'Staff commands', 'discord/staff/commandes-staff'),
          ]),
          group('Réglages', 'Settings', [
            page('Salons', 'Channels', 'discord/configuration/salons'),
            page('Accès aux commandes', 'Command access', 'discord/configuration/commandes'),
          ]),
        ]),
        group('Aide', 'Help', [
          page('Commandes utiles', 'Everyday commands', 'aide/commandes-utiles'),
          page('Questions fréquentes', 'Frequently asked questions', 'aide/questions-frequentes'),
        ]),
      ],
      components: {
        Head: './src/components/Head.astro',
        LanguageSelect: './src/components/LanguageSelect.astro',
      },
    }),
  ],
});
