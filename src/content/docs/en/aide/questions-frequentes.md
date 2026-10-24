---
title: Frequently asked questions
description: Solve the common problems people hit when using the Kotbo dashboard.
---

## Why is a page missing from the sidebar?

The page depends on your access level, on a disabled module, or on the server's plan. Ask an administrator to check **Settings → Modules**, the **Role access** matrix in the [Management center](/en/dashboard/configuration/centre-gestion/), and the current plan on the [Billing](/en/dashboard/configuration/facturation/) page.

## The bot is there but responds to nothing

A server without a subscription is on the **Free** plan, which opens no module: the bot is present but idle. Subscribe from the [Plans & billing](/en/dashboard/configuration/facturation/) page to open the catalogue.

## The dashboard won't open, I'm sent through a series of screens instead

That is normal on a server that has just installed Kotbo: while nothing is built, every address leads to the [setup journey](/en/premiers-pas/parcours/). The dashboard opens at activation.

## Why can't I see my server?

Check these three things:

1. you are using the right Discord account;
2. Kotbo is installed on the server;
3. your role has dashboard access.

When no server meets all three, Kotbo shows **No server available**: *your Discord account has no permissions on any server where Kotbo is installed*. Ask an administrator for a role, or invite the bot to your own server from **My servers**.

On a specific page, the message is **Page not available**: *your role on this server does not grant access to this page*.

Sign out and back in after a role change to refresh your session.

## My settings were not applied

Make sure you clicked **Save** in the bar at the bottom of the screen. If an error appears, do not reload the page straight away: read the message, fix the field it points to, then try again.

## A "Server unreachable" banner shows at the top of the dashboard

Kotbo has lost contact with its service: either your browser is offline, or the server stopped answering, or the database or the bot are unreachable. The banner says which of the three.

In every case, **the data shown may be stale and changes are blocked**: that is deliberate, so a save does not vanish into nothing. The **Retry** button reconnects, and the banner disappears as soon as the service answers again.

## Why is a channel or a role missing from a list?

The dashboard reflects what the bot can reach. Check in Discord that the Kotbo role sits high enough in the hierarchy and that it can see the channel in question.

## How do I replay the tutorial?

Open your profile in the top right, then click **Tutorial**.

## How do I report a problem?

Open your profile and choose **Feedback / Suggestion**. On a page marked **Beta**, the reporting link is also available in the banner at the top of the page.
