/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 12 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * INVERSION DE MOTS DANS UNE PHRASE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Prenez la phrase "Bonjour le monde" et transformez-la en "monde le Bonjour".
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-12
 * ▶️ Commande : node day05/exercices/exercice-12.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.


let phrase="Bonjour le monde";
phrase=phrase.split(" ");
    let a=phrase[0];
    let b=phrase[2];
    let z="";
 z=a;
 a=b;
 b=z;
phrase[0] = a;
phrase[2] = b;

phrase = phrase.join(" ");
console.log(phrase);
