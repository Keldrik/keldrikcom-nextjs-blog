---
title: "Unity - Collision Detection"
date: "2016-01-22"
tags: "c#, collision"
categories: "unity"
---

Wenn man einmal verstanden wie man Objekte anzeigt und in Bewegung setzt, wird man sich beim lernen mit dem Umgang der Unity Engine irgendwann eine Frage stellen: "Wie finde ich heraus, ob ein Objekt das Andere berührt hat?". Hat man zum Beispiel einen vom Spieler steuerbaren Charakter im Spiel und man möchte wissen wann dieser die bösen Monster berührt. Oder in einen Shooter, da muss man überprüfen ob die Schüsse einen Gegner oder den Spieler selber getroffen haben. Vielleicht möchte man auch einfach nur ein interaktives UI kreieren, dass auf den Maus-Zeiger entsprechend reagiert.

---

Für all diese Anforderungen gibt es eine relativ simple und einfach umzusetzende Antwort, die in der Unity Physics Engine integriert ist: Collision Detection.

Nicht alle GameObjects, die im Spiel grafisch dargestellt auf den Bildschirm angezeigt werden, können von der Physics Engine für die Berechnung der Kollisionen berücksichtigt werden. Die Kalkulationen nehmen Rechenzeit in Anspruch und sind deshalb standardmäßig nicht aktiviert. Erst wenn man dem GameObject eine Collider Komponente hinzufügt, werden Berührungen mit anderen Collidern registriert. Vereinfacht ausgedrückt kann man sich die Physics Engine wie eine unsichtbare Welt im Hintergrund vorstellen, in der nur Objekte vorkommen, die mit entsprechenden Komponenten ausgerüstet sind. Die Engine führt komplizierte mathematische Berechnungen aus, mit denen eine Physikalische Wirklichkeit simuliert werden soll, und gibt die daraus folgenden Ergebnisse wieder mit Positions-Daten der Objekte und Events für Berührungen zurück.

Ich werde in diesem Post die Nutzung von Collidern in 2D erklären. Grundsätzlich funktioniert das, was ich hier in Beispielen zeige fast genauso auch in 3D. Ein Unterschied ist unter anderem, dass man bei der Wahl der richtigen Collider Komponente zwischen der Kategorie "Physics" und "Physics 2D" wählen muss.

Möchte man einen GameObject einen Collider hinzufügen und sucht dafür in der Liste nach der richtigen Komponente, dann sieht man, dass es verschiedene davon gibt. Der einfachste ist der Box Collider 2D. Nachdem dieser hinzugefügt wurde, hat er eine rechteckige Form, die mit einer grünen Linie im Editor dargestellt wird. Der Box Collider ist erstmal genauso breit und hoch wie das GameObject, kann aber auch in der Größe und Position mit den Werten Offset und Size im Inspector angepasst werden, falls das notwendig sein sollte.

<img src="/img/unity-collision-detection-0.jpg" alt="Unity Collision Rectangle Object" class="w-full h-auto py-2"/>

Der Circle Collider verhält sich Grundsätzlich genauso wie sein rechteckiger Kollege, der einzige Unterschied ist die Form. Auch er wird als grüne Outline im Unity Editor angezeigt und kann in der Größe angepasst werden. Ein bisschen anders verhalten sich der Edge und Polygon Collider, die hilfreich sein können, wenn man eine genauere, der Form eines Objektes angepasst Collision Detection erreichen will. Bedenken sollte man bei der Nutzung, dass diese aufgrund ihrer Form zu komplizierteren mathematischen Kalkulationen führen und deshalb mehr Rechenleistung in Anspruch nehmen können. Hat man sehr viele Objekte mit Collidern in einer Szene und ist es nicht nötig einer komplizierten Form genau zu folgen, dann ist der Box Collider aus diesem Grund vorzuziehen.

Ist ein GameObject mit einen Collider in der entsprechenden Form und Größe ausgestattet, dann ist dieses im Prinzip bereit die Berührungen von anderen Objekten zu registrieren und die passenden Events im Code auszulösen. Eine wichtige Sache gibt es aber noch zu beachten, bevor man damit los legt, dies in einem Spiel zu nutzen. GameObjects mit einem Collider, die nicht nur an einer Position von Anfang bis zum Ende verharren, sondern sich auch in Bewegung setzen, sollten immer zusätzlich auch eine Rigidbody Komponente haben. Diese hilft Unity bei der Optimierung der Performance von Collidern und ist grundsätzlich auch Voraussetzung um eine Kollision aus der Bewegung heraus auszulösen. Wenn zwei Objekt aufeinander treffen muss also mindestens eines der beiden einen Rigidbody haben, damit die Events im Code ausgelöst werden.

<img src="/img/unity-collision-detection-1.jpg" alt="Unity Collision Rectangle Object" class="w-3/4 md:w-1/2 lg:w-5/12 h-auto py-2 md:pr-4 mx-auto md:float-left"/>

Die Rigidbody Komponente ist für die eigentlich Physik zuständig. Sie berechnet die in Bewegung resultierende Reaktionen aus den ausgelösten Kollisionen. Außerdem ist sie auch für andere physikalische Simulationen verantwortlich, wie zum Beispiel die Gravitation. Wer zum ersten mal einen Rigidbody zu einem Objekt hinzufügt und dann nach einem Start der Szene das Resultat beobachtet, wird feststellen, dass dieses Objekt nach unten fällt und schnell aus dem Blickfeld der Kamera verschwindet. Der Fall wird mit der Gravitation bewirkt, die standardmäßig aktiviert ist. Hat man kein Interesse daran, das Objekt den physikalischen Gesetzen folgen zu lassen, dann kann man diese auch mit der "Is Kinematic" Option der Komponente deaktivieren.

Hat man die GameObjects, die für Kollisionen berücksichtigt werden sollen, mit einen Collider ausgestattet und allen sich bewegenden Objekten einen Rigidbody hinzugefügt, dann kann man auf die durch Berührung ausgelösten Events im Script Code geschriebene Funktionalität folgen lasse. Das geht sehr einfach und ist im Gegensatz zu der langen Einleitung dieses Artikels schnell erklärt.

Drei unterschiedliche Events können abhängig vom Ablauf der Kollision ausgelöst werden. In einem Script, das dem mit Collider ausgestatteten GameObject als Komponente hinzugefügt wurde, werden diese nutzbar gemacht.

```clike
void OnCollisionEnter2D(Collision2D coll)
{
  // Hier kann man den Code einsetzen, der Bei einer Berührung
  // ausgeführt werden soll.
}

void OnCollisionStay2D(Collision2D coll)
{
  // Dieser Code wird so lange sich die beiden Objekte berühren
  // mit jeden Frame ein mal ausgeführt.
}

void OnCollisionExit2D(Collision2D coll)
{
  // Wenn die beiden Objekte die Berührung verlassen
  // wird diese Methode ausgeführt.
}
```

Der Collision2D Parameter der OnCollision Event Methoden kann dazu genutzt werden mehr über die Kollision und das andere Objekt zu erfahren. Das kann hilfreich sein, wenn man herausfinden will, ob das andere GameObject einen bestimmten Namen hat, einen gesuchten Tag besitzt oder mit einer speziellen Komponente ausgerüstet ist.

```clike
// Beispiel 1 mit Name
void OnCollisionEnter2D(Collision collision)
{
    if (collision.gameObject.name == "Spieler")
    {
        // Wenn das kollidierende Objekt den Namen "Spieler" hat,
        // wird dieser Code ausgeführt.
    }
}

// Beispiel 2 mit Tag
void OnCollisionEnter2D(Collision collision)
{
    if (collision.gameObject.tag == "Monster")
    {
        // Wenn das Objekt den Tag "Monster" besitzt,
        // dann passiert hier etwas.
    }
}

// Beispiel 3 Suche nach Komponente
void OnCollisionEnter2D(Collision2D collision)
{
    if (collision.gameObject.GetComponent<playerController>() != null)
    {
        // Wenn das andere Objekt eine playerController Komponente hat,
        // geht es hier weiter.
    }
}
```

Dieser Artikel ist länger geworden als ich es ursprünglich geplant hatte. Trotzdem ist es erstmal nur eine kleine Einführung und natürlich gibt es noch viel mehr, was ich dazu schreiben könnte. Ich werde deshalb versuchen in naher Zukunft einen weiteren Artikel über Collision Detection in Unity schreiben und mit mehr Code und praktischen Beispielen hoffentlich hilfreiche Informationen bereitzustellen.
