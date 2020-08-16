# Contrasenyador (Generador de contrasenyes)

Aquesta API permet **generar contrasenyes**, segons la llargada indicada i el paràmetres assignats.

---

## Llargada de la contrasenya

La llargada de la contrasenya serà, per defecte, de **10 caràcters**. No obstant, es pot triar el número de caràcters que composaran la contrasenya entre els valors numèrics **1 i 2048**.

---

## Paràmetres disponibles

Els paràmetres disponibles per a aquesta API modifiquen el conjunt de caràcters utilitzat per generar les contrasenyes:

1. **minuscules:** afegeix caràcters a-z.
2. **majuscules:** afegeix caràcters A-Z.
3. **numeros:** afegeix caràcters 0-9.
4. **caractersEspecials:** afegeix caràcters especials.
5. **evitaSimilars:** elimina caràcters que poden provocar confusions de lectura. Com a exemple, es consideren caràcters similars `1, l, I, |, o, O, 0`.
6. **tots:** substitueix la utilització de tots els paràmetres anteriors.

---

## Com realitzar peticions

Abans de realitzar peticions de contrasenyes, es pot comprovar l'estat de l'API a través de la petició:

```
http://127.0.0.1:3000/api/
```

El retorn ha de ser:

```
API funcionant correctament.
```

Una vegada verificat el correcte funcionament de l'API, es poden realitzar peticions a l'API de tres formes:

### Petició simple sense llargada ni paràmetres

Aquesta petició retornarà una contrasenya de 10 caràcters composada per minúscules, majúscules, números i caràcters especials.

```
http://127.0.0.1:3000/api/contrasenya/
```

Retorn:

```
{
    "status": "success",
    "llargada": "10",
    "parametres": [
        "tots"
    ],
    "contrasenya": "*@irKu9_=i"
}
```

### Petició especificant llargada

Aquesta petició retornarà una contrasenya del número de caràcters indicat per {llargada} composada per minúscules, majúscules, números i caràcters especials.

```
http://127.0.0.1:3000/api/contrasenya/{llargada}
```

Exemple de petició:

```
http://127.0.0.1:3000/api/contrasenya/12
```

Retorn:

```
{
    "status": "success",
    "llargada": "12",
    "parametres": [
        "tots"
    ], "contrasenya": "PUnR*A]$)zf."
}
```

### Petició especificant llargada i paràmetres

Aquesta petició retornarà una contrasenya del número de caràcters indicat per `{llargada}` composada segons els paràmetres indicats a `{parametres}`. Els paràmetres han d'estar separats per punt i coma (;) i només es tindran en compte els 5 primers paràmetres introduïts.

```
http://127.0.0.1:3000/api/contrasenya/{llargada}/p={parametres}
```

Exemple de petició:

```
http://127.0.0.1:3000/api/contrasenya/16/p=minuscules;majuscules;evitaSimilars
```

Retorn:

```
{
    "status": "success",
    "llargada": "16",
    "parametres": [
        "minuscules",
        "majuscules",
        "evitaSimilars"
    ],
    "contrasenya": "hAfYweyVeFmJNfuB"
}
```

## Desenvolupament

Per desenvolupar aquesta API s'ha utilitzat:

- [Node.js®](https://nodejs.org/ca/) - Entorn d'execució per a JavaScript
- [Express](https://expressjs.com) - Infrastructura d'aplicacions web amb utilitats HTTP i middleware
- [Validator](https://www.npmjs.com/package/validator) - Llibreria de validació d'strings
- [Body-parser](https://www.npmjs.com/package/body-parser) - Parser de sol·licitud d'entrades via middleware

## Autor

- **Cristian Pulido** - [cristianpul](https://github.com/cristianpul?tab=repositories)

## Llicència

El contingut d'aquest repositori es pot utilitzar lliurament. Llicència [MIT](https://github.com/cristianpul/contrasenyes/blob/master/LICENSE).

## Agraïments

La idea de creació de conjunts de caràcters per a realitzar aquest projecte està basada en la que es troba al canal [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw), concretament al vídeo [Build A Password Generator With JavaScript - Tutorial](https://youtu.be/iKo9pDKKHnc). Gràcies [Web Dev Simplified](https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw) per les teves aportacions!
