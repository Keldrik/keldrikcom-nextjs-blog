---
title: "Next.js 9 - API Backend"
date: "2019-07-26"
tags: "api, nextjs"
categories: "react"
---

Vor kurzem haben die fleißigen Entwickler von Next.js Version 9 veröffentlicht und diese ist vollgepackt mit neuen tollen Features und Verbesserungen. Ich habe in diesem Blog bereits über dynamisches Routing geschrieben. Heute möchte ich euch das neue API Feature näher bringen.

---

Wenn man nicht grade eine einfache Landingpage oder andere simple Webseiten macht, braucht man normalerweise fast immer ein Backend, das die Daten liefert. Entweder würde man dafür auf eine bereits existierende API zugreifen oder man würde selber etwas basteln z. B. mit Express oder etwas moderner mit Serverless Functions oder ähnliches. Das ist jetzt nicht mehr unbedingt nötig, da man in Zukunft das Backend direkt in einem Next.js Projekt entwickeln kann.

Wie vieles mit Next.js ist auch das Entwickeln eines Backends sehr einfach. Möchten wir eine neue API Route erstellen, müssen wir dafür einfach Javascript Dateien in den pages/api Verzeichnis platzieren, die eine Funktion exportieren. Jede Javascript Datei in diesen Ordner ist eine Route auf die mit api/Dateiname zugegriffen werden kann. Der Code für den Handler ist eine Funktion mit einem Request und Response Objekt als Parameter.

```javascript
export default function handle(req, res) {
  res.end('Hallo! Ich bin API!')
}
```

Wir können auch einfach Objekte als Json senden.

```javascript
export default function handle(req, res) {
  const meinObjekt = {
    name: 'TEST',
    value: 123
  }
  res.json(meinObjekt)
}
```

Genau wie bei den dynamischen Routing Feature für Pages, über das ich hier bereits geschrieben habe, funktioniert das auch bei API Routes. Man kann Query Paramter mit in eckige Klammern gesetzte Platzhalter in Dateinamen und Verzeichnisnamen definieren. So kann zb der Handler /pages/api/getnumber/[number].js mit der URL /api/getnumber/99 aufgerufen werden. Der Query Parameter kann dann vom Query Objekt extrahiert werden.

```javascript
export default function handle(req, res) {
  const {number} = req.query;
  res.end(`Meine Nummer ist ${number}!`)
}
```

Mehr Informationen über Next.js 9 und alle neuen Features und Verbesserungen könnt ihr im offiziellen Blog finden. Ich werde hier wahrscheinlich auch öfter darüber schreiben, denn es gibt da noch einige interessante Dinge, über die es sich lohnt zu berichten.
