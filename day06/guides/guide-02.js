/**
 * JOUR 06 — GUIDE 02
 * Parcourir avec for...of
 *
 * OBJECTIF
 * Vous avez notes = [12, 15, 8, 19]. Calculez la moyenne des notes en parcourant le tableau.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

// TODO: écris ta solution ici.
// let res= notes[0]+notes[1]+notes[2]+notes[3];
// console.log(res);
// res=res/notes.length;
// console.log(res);

const notes = [12, 15, 8, 19];
let avr=0;
for(let ind of notes ){
    avr+=ind;
}
console.log(avr);
avr=avr/notes.length;
console.log(avr);

