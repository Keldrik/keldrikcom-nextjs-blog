---
title: "Fetch mit React Hooks"
date: "2019-07-30"
tags: "hooks, fetch, nextjs"
categories: "react"
description: "Mit React Version 16.8 wurden die sogenannten Hooks eingeführt. Das sind Funktionen, die es erlauben, mit funktionalen Components auf State Variablen zuzugreifen und auf Events zu reagieren."
---

Seit Februar gibt es mit der React Version 16.8 die sogenannten Hooks. Das sind Funktionen, die es erlauben, mit funktionalen Components auf State Variablen zuzugreifen und auf Events zu reagieren. Damit ist es möglich in Zukunft ohne Class Components zu arbeiten und eine App nur noch mit Funktionen zu bauen.

---

Ich möchte hier demonstrieren, wie man mit Hooks Daten von einer Api laden und in einer State Variable speichern kann. Dafür benötigen wir zwei von den zehn mit dem React Framework zur Verfügung gestellten Hooks. Die beiden heißen useState und useEffect.

Mit useState können wir endlich auch in einer Function Component mit State arbeiten. Die Nutzung ist relativ simpel. Erst einmal importieren wir useState von dem React Framework. Dann initialisieren wir zwei Variablen mithilfe der useState Funktion der wir den initialen Wert 0 als Parameter übergeben. Die erste Variable count ist der State und setCount ist die Funktion für die Aktualisierung.

```javascript
import React, { useState } from 'react';

const beispiel = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Du hast {count} mal geklickt!</p>
      <button onClick={() => setCount(count + 1)}>
        Klick mich!
      </button>
    </div>
  );
}
```

Das onClick event des Buttons führt die mit dem useState Hook definierte setCount Funktion aus und erhöht damit den counter um 1. Die count variable, die den State hält, wird im Paragraf darüber angezeigt und mit jeder Veränderung aktualisiert.

Der useEffect Hook ermöglicht es auf die Aktualisierung einer Component zu reagieren. Man kann diesen Hook zum Beispiel dafür nutzen Daten von einer API zu laden oder andere Funktionen als Reaktion auf eine Änderung auszuführen. Genau wie der useState Hook wird auch useEffect von dem React Framework importiert. Wir führen dann die useEffect Funktion aus und übergeben wiederum eine Funktion als ersten Parameter, die jedes Mal ausgeführt, wenn die Component gerendert wird. Als optionalen zweiten Parameter können wir ein Array übergeben, das Variablen enthält, die der Effekt beobachten soll. Nur wenn diese Variablen sich ändern, wird auch die Funktion ausgeführt. Übergibt man keinen zweiten Parameter, wird die Funktion immer mit jedem Render aufgerufen.

```javascript
import React, { useState, useEffect } from 'react';

const beispiel = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Du hast ${count} mal geklickt!`;
  });

  return (
    <div>
      <p>Du hast {count} mal geklickt!</p>
      <button onClick={() => setCount(count + 1)}>
        Klick mich!
      </button>
    </div>
  );
}
```

Wie können wir jetzt die über Hooks gewonnen Kenntnisse nutzen, um Daten von einer API zu laden? Mithilfe von useState und useEffect bauen wir uns einen neuen Hook, den wir dann immer wieder in unserer App verwenden können.

```javascript
import { useState, useEffect } from 'react';

const useDataFetch = url => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async url => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
    };
    loadData(url);
  }, [url]);
  return data;
};

export default useDataFetch;
```

Wir importieren die Hooks, die wir benötigen vom React Framework und nennen unsere eigene Hook Funktion useDataFetch. Diese Funktion erwartet als Parameter eine URL. Als erstes initialisieren wir den State, den wir hier data nennen, mit der useState Funktion. Dann übergeben wir eine Funktion, die die Daten von der gewünschten URL mit fetch lädt, an den useEffect Hook. Eine wichtige Sache gibt es hier zu beachten: Die als Parameter übergebene Funktion kann selber nicht async sein. Wir müssen innerhalb der Funktion eine asynchrone Funktion erstellen und dann ausführen. Ein Array mit der URL als zweiter Parameter sorgt dafür, dass der Effekt nur ausgeführt wird, wenn die URL sich geändert hat. Letztendlich geben wir die dann von der URL geladenen Daten mit return zurück. Wir exportieren unsere Hook Funktion und können diese dann in allen functional Components importieren und nutzen.

Ein simples Beispiel wie man den Hook dann nutzen könnte:

```javascript
import React from 'react';
import useDataFetch from './useDataFetch';

const app = () => {
  const data = useDataFetch('https://jsonplaceholder.typicode.com/posts/1');

  const postTitle = () => {
    if (data) {
		return <h2>{data.title}</h2>;
     else {
     	return <h2>Daten werden geladen...</h2>;
    }
  };

  return (
    <div>
      <h1>Fetch-Hook</h1>
      <div>{postTitle()}</div>
    </div>
  );
}

export default app;
```

So einfach und elegant kann man zukünftig in funktionalen Components State und Lifecycle Methoden ersetzen.
