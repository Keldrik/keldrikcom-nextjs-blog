---
title: "Next.js 9 - Dynamic Routing"
date: "2019-07-25"
tags: "nextjs"
categories: "react"
description: "Was mir besonders gut an Version 9 gefällt ist, wie einfach man zukünftig dynamisches Routing mit einer Next.js Webseite umsetzen kann."
---

Anfang des Monats wurde Version 9 des SSR React Frameworks Next.js veröffentlicht. Die Entwickler waren sehr fleißig. Mit dem Release wurden einige tolle neue Features hinzugefügt und vieles verbessert. Was mir besonders gut gefällt ist, wie man zukünftig dynamisches Routing mit einer Next.js Webseite umsetzen kann.

---

In der Vergangenheit war es etwas schwieriger, wenn man SEO freundliche URLs mit Queries haben wollte. Beispielsweise für einen Blog mit einer URL Struktur wie diese: /Blog/Datum/Slug. Dafür musste man entweder einen Express Server als serverseitigen Router einsetzen oder sonst irgendwie mit z. B. Redirects den Webseiten Besucher zur richtigen Seite leiten.

<img src="/img/nextjs-9-dynamic-routing-0.jpg" alt="Next.js Projekt Verzeichnisse" class="w-full md:w-2/3 lg:w-1/2 h-auto py-2 lg:pr-4 mx-auto lg:float-left"/>

Das ist jetzt alles viel besser und einfacher. Mit Next.js 9 werden dynamische URLs jetzt ganz simpel mit Query Parametern in den Page Dateinamen und den Verzeichnis-Namen umgesetzt. Für das oben genannte Beispiel mit einem Blog sähe, das dann wie folgt aus: Wir erstellen ein Verzeichnis im Pages Ordner und nennen es Blog. Im Blog Verzeichnis erstellen wir einen weiteren Ordner und nennen ihn [datum]. Im [datum] Ordner erstellen wir dann eine Datei mit dem Namen [slug].js.

Für alle Requests mit der Struktur /Blog/String/String wird die Seite [slug].js gerendert. Die Query Parameter können aus dem Query Objekt in der getInitialProps Method extrahiert werden.

```javascript
// Beispiel URL Aufruf /Blog/2019-10-5/testpost
static async getInitialProps({ query }) {
  // datum = '2019-10-5'
  // slug = 'testpost'
  const { datum, slug } = query
}
```

So einfach ist das in Zukunft mit Next.js dynamisches Routing zu praktizieren. Keine Komplizierten Redirects mehr und es ist auch nicht mehr nötig ein Express Server zu bemühen. Das ist auch besonders interessant, wenn man Serverless als Build Target für die Webseite gewählt hat und diese mit Zeit Now hosten will.

Wer mehr über alle Neuigkeiten und Features von Next.js 9 erfahren will, den kann ich diesen Blog Post auf der offiziellen Webseite empfehlen.
