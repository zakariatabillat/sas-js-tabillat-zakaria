/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
'use strict';

const candidats = [
    { nom: "Sara", score: 85 },
    { nom: "Ali", score: 92 },
    { nom: "Yassine", score: 78 }
];

function meilleurCandidat(candidats) {
    let bestScore = candidats[0].score;
    let bestName = candidats[0].nom;

    for (let i = 1; i < candidats.length; i++) {
        if (candidats[i].score > bestScore) {
            bestScore = candidats[i].score;
            bestName = candidats[i].nom;
        }
    }

    return bestName +" "+ bestScore;
}

console.log(meilleurCandidat(candidats));