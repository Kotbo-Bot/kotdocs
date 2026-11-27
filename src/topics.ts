// Les thèmes de la doc : une couleur et une icône chacun, partagées par l'accueil et la recherche.
import { createElement, type ComponentType } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

// Fichiers pris un à un : l'index de Papicons a des imports sans extension que Node refuse.
const papicons = import.meta.glob<{ default: ComponentType<any> }>(
  '/node_modules/@getpapillon/papicons/lib/module/icons-web/{Gears,Link,List,Lock,PiggyBank,Search,Sparkles,Star,TextBubble,User}.js',
  { eager: true },
);
// Rendu au build : aucun JavaScript React n'arrive dans la page.
export const icon = (name: string) => {
  const component = papicons[`/node_modules/@getpapillon/papicons/lib/module/icons-web/${name}.js`].default;
  return renderToStaticMarkup(createElement(component, { size: 20, 'aria-hidden': true }));
};

// L'ordre compte : la recherche prend le premier thème dont `match` reconnaît l'adresse.
export const topics = [
  { id: 'start', color: 'var(--series-1)', icon: icon('Sparkles'), match: 'premiers-pas/' },
  { id: 'protection', color: 'var(--series-8)', icon: icon('Lock'), match: '(moderation)/(anti-raid|automod|aegis/|double-comptes|configuration-rapide|vue-ensemble|pseudos)' },
  { id: 'integrations', color: 'var(--series-9)', icon: icon('Link'), match: 'aide/(mcp|aegisai)|webhooks|liens-salons|cross-serveur' },
  { id: 'team', color: 'var(--series-3)', icon: icon('List'), match: 'staff/|tickets' },
  { id: 'moderation', color: 'var(--series-2)', icon: icon('User'), match: 'moderation/' },
  { id: 'community', color: 'var(--series-5)', icon: icon('TextBubble'), match: 'communaute/' },
  { id: 'levels', color: 'var(--series-4)', icon: icon('Star'), match: 'xp/' },
  { id: 'economy', color: 'var(--series-6)', icon: icon('PiggyBank'), match: 'economie/' },
  { id: 'settings', color: 'var(--series-7)', icon: icon('Gears'), match: '.' },
] as const;

export type TopicId = (typeof topics)[number]['id'];
export const topic = (id: TopicId) => topics.find((entry) => entry.id === id)!;
export const topicOf = (path: string) => topics.find((entry) => new RegExp(entry.match).test(path))!;
