## CONTRASENYES

Aquesta API permet **generar contrasenyes**, segons la llargada indicada i el paràmetres assignats.

---

## Llargada

La llargada de la contrasenya serà, per defecte, de **10 caràcters**. No obstant, es pot triar el número de caràcters que composaran la contrasenya entre els valors numèrics **1 i 2048**.

---

## Paràmetres

Els paràmetres disponibles per a aquesta API modifiquen el conjunt de caràcters per generar les contrasenyes:

1. **minuscules:** afegeix caràcters a-z.
2. **majuscules:** afegeix caràcters A-Z.
3. **numeros:** afegeix caràcters 0-9.
4. **caractersEspecials:** afegeix caràcters especials.
5. **evitaSimilars:** elimina caràcters que poden provocar confusions de lectura.
6. **tots:** substitueix l'utilització de tots els paràmetres anteriors.

---

## Com realitzar peticions

Es poden realitzar peticions a l'API de tres formes:

`http://127.0.0.1:3001/api/contrasenya/` Aquesta petició retornarà una contrasenya de 10 caràcters composada per minúscules, majúscules, números i caràcters especials.

Exemple de petició: `http://127.0.0.1:3001/api/contrasenya/`
Retorn:
`{ "status": "success", "llargada": "10", "parametres": [ "tots" ], "contrasenya": "c46Gj$,8tY" }`

`http://127.0.0.1:3001/api/contrasenya/**{llargada}**` Aquesta petició retornarà una contrasenya del número de caràcters indicat per {llargada} composada per minúscules, majúscules, números i caràcters especials.

Exemple de petició: `http://127.0.0.1:3001/api/contrasenya/12`
Retorn:
`{ "status": "success", "llargada": "12", "parametres": [ "tots" ], "contrasenya": "PUnR*A]$)zf." }`

`http://127.0.0.1:3001/api/contrasenya/**{llargada}**/p=**{parametres}**` Aquesta petició retornarà una contrasenya del número de caràcters indicat per `{llargada}` composada segons els paràmetres indicats a `{parametres}`. Els paràmetres han d'estar separats per punt i coma (;) i només es tindran en compte els 5 primers paràmetres introduïts.

Exemple de petició: `http://127.0.0.1:3001/api/contrasenya/16/p=minuscules;majuscules;evitaSimilars`
Retorn:
`{ "status": "success", "llargada": "16", "parametres": [ "minuscules", "majuscules", "evitaSimilars" ], "contrasenya": "hAfYweyVeFmJNfuB" }`
