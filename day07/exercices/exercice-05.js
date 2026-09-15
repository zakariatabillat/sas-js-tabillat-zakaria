/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 05 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * EXTRACTION DES CLÉS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Utilisez Object.keys() sur votre objet utilisateur pour récupérer un tableau contenant toutes ses clés, et affichez sa longueur.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-05
 * ▶️ Commande : node day07/exercices/exercice-05.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

// let arr1=[];
// for(let keys in utilisateur) return arr1+=keys;
// console.log(arr1);
const utilisateur={
    nom:"zakaria",
    age:25,
    estAdmin: true
}
const keys=(Object.keys(utilisateur));
console.log(keys,keys.length);


