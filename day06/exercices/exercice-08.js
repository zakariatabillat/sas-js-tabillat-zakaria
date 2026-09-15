/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
'use strict';

// function randomnumbers(Rnd) {
//     let max = -Infinity;
//     let min = Infinity;

//     for (let i = 0; i < Rnd.length; i++) {
//         if (Rnd[i] > max) {
//             max = Rnd[i];
//         }

//         if (Rnd[i] < min) {
//             min = Rnd[i];
//         }
//     }

//     console.log("Minimum :", min);
//     console.log("Maximum :", max);
// }

// randomnumbers([10, 20, 40, 60]);

function randomnumbers(Rnd) {
    let max = Rnd[0];
    let min = Rnd[0];

    for (let i = 1; i < Rnd.length; i++) {
        if (Rnd[i] > max) {
            max = Rnd[i];
        }

        if (Rnd[i] < min) {
            min = Rnd[i];
        }
    }

    console.log("Minimum:", min);
    console.log("Maximum:", max);
}

randomnumbers([10, 20, 40, 60]);


// do this ex again