// Pages réservées à l'offre Plus, ou gratuites avec un plafond levé par Plus.
// Lu par la barre latérale (couronne) et par PageTitle (bandeau sous le titre).
// Source : FREE_MODULES dans ../Kotbo/packages/contracts/src/types/plans.ts.
export const PLUS_PAGES = new Set([
  'dashboard/moderation/aegis',
  'dashboard/moderation/appels-ban',
  'dashboard/xp/prestige',
  'dashboard/xp/saisons',
  'dashboard/xp/reputation',
  'dashboard/xp/clans',
  'dashboard/xp/drops',
  'dashboard/economie/configuration-rapide',
  'dashboard/economie/economie',
  'dashboard/economie/rpg',
  'dashboard/economie/marche',
  'dashboard/economie/quetes',
  'dashboard/communaute/campagnes',
  'dashboard/communaute/declencheurs',
  'dashboard/communaute/site',
  'dashboard/staff/hierarchie',
  'dashboard/staff/tutorat',
  'dashboard/staff/planning',
  'dashboard/staff/listes-suivi',
  'dashboard/staff/sondages',
  'dashboard/staff/discipline',
  'dashboard/configuration/sante-salons',
  'dashboard/configuration/custom-bot',
  'dashboard/communaute/liens-salons',
  'dashboard/cross-serveur/serveurs-staff',
  'aide/mcp',
  'discord/communaute/liens-salons',
  'discord/communaute/clans',
  'discord/economie/rpg',
  'discord/economie/economie',
]);

export const FREEMIUM_PAGES = new Set(['dashboard/general/analytics']);

/** 'plus' | 'freemium' | null, pour un slug avec ou sans préfixe `en/`. */
export function planOf(slug) {
  const key = slug.replace(/^en\//, '').replace(/\/$/, '');
  if (PLUS_PAGES.has(key)) return 'plus';
  if (FREEMIUM_PAGES.has(key)) return 'freemium';
  return null;
}
