---
title: Questions fréquentes
description: Résoudre les problèmes courants lors de l’utilisation du dashboard Kotbo.
---

## Pourquoi une page n’apparaît-elle pas dans la barre latérale ?

La page dépend de votre niveau d’accès, d’un module désactivé, ou de l’offre du serveur. Demandez à un administrateur de vérifier **Réglages → Modules**, la matrice **Accès par rôle** du [Centre de gestion](/dashboard/configuration/centre-gestion/), et l’offre en cours sur la page [Facturation](/dashboard/configuration/facturation/).

## Le bot est là mais ne répond à rien

Un serveur sans abonnement est en offre **Gratuit**, qui n’ouvre aucun module : le bot est présent mais inerte. Souscrivez depuis la page [Offres & facturation](/dashboard/configuration/facturation/) pour ouvrir le catalogue.

## Le dashboard ne s’ouvre pas, je suis renvoyé sur un parcours d’écrans

C’est normal sur un serveur qui vient d’installer Kotbo : tant que rien n’est monté, toutes les adresses mènent au [parcours de configuration](/premiers-pas/parcours/). Le dashboard s’ouvre à la mise en service.

## Pourquoi je ne vois pas mon serveur ?

Vérifiez ces trois points :

1. vous utilisez le bon compte Discord ;
2. Kotbo est installé sur le serveur ;
3. votre rôle dispose d’un accès au dashboard.

Quand aucun serveur ne répond à ces trois points, Kotbo affiche **Aucun serveur accessible** : *votre compte Discord n’a de droits sur aucun serveur où Kotbo est installé*. Demandez un rôle à un administrateur, ou invitez le bot sur votre propre serveur depuis **Mes serveurs**.

Sur une page précise, le message est **Page non accessible** : *votre rôle sur ce serveur ne donne pas accès à cette page*.

Reconnectez-vous après une modification de rôle afin de rafraîchir votre session.

## Mes réglages n’ont pas été appliqués

Assurez-vous d’avoir cliqué sur **Enregistrer** dans la barre située en bas de l’écran. Si une erreur apparaît, ne rechargez pas immédiatement la page : lisez le message, corrigez le champ indiqué puis réessayez.

## Un bandeau « Serveur injoignable » s’affiche en haut du dashboard

Kotbo a perdu le contact avec son service : soit votre navigateur n’a plus de connexion internet, soit le serveur ne répond plus, soit la base de données ou le bot sont injoignables. Le bandeau précise lequel des trois.

Dans tous les cas, **les données affichées peuvent être obsolètes et les modifications sont bloquées** : c’est volontaire, pour qu’un enregistrement ne parte pas dans le vide. Le bouton **Réessayer** relance la connexion, et le bandeau disparaît dès que le service répond de nouveau.

## Pourquoi un salon ou un rôle est absent d’une liste ?

Le dashboard reflète les éléments accessibles au bot. Vérifiez dans Discord que le rôle Kotbo est suffisamment haut dans la hiérarchie et qu’il peut voir le salon concerné.

## Comment relancer le tutoriel ?

Ouvrez votre profil en haut à droite, puis cliquez sur **Tutoriel**.

## Comment signaler un problème ?

Ouvrez votre profil puis choisissez **Retour / Suggestion**. Sur une page marquée **Bêta**, le lien de signalement est aussi disponible dans la bannière en haut de page.
