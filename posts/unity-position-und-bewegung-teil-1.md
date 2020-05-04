---
title: "Unity - Position und Bewegung Teil 1"
date: "2014-07-01"
tags: "c#, transform"
categories: "unity"
---

Dies ist mein erster Artikel zum Thema Scripting in Unity. Ich habe hier in meinem Blog bis zuletzt nur über Spiele berichtet, aber nie über Programmierung und / oder die Entwicklung von Spielen. Das möchte ich zukünftig ändern und starte deshalb heute mit meinem ersten Beitrag über die Transform Komponente und das Verändern der Postition von GameObjects.

---

Die Script-Sprache meiner Wahl ist C#, aber ich denke, das Meiste lässt sich leicht nach JavaScript übertragen. Ich kann hier keinen Einführungskurs für die Programmiersprache C# schreiben, dafür fehlt mir leider die Zeit. Deshalb setze für das Verständnis Grundkenntnisse voraus. Für alle die schon etwas Erfahrung mit Unity haben, wird der nachfolgende Text wahrscheinlich nicht viel neue Erkenntnisse enthalten, aber man muss ja mal irgendwo anfangen.

### Worum geht es?

In den meisten Spielen gibt es Objekte, die bewegt werden müssen. Ob es sich dabei um einen Weltraum Shooter handelt, in dem der Spieler ein Raumschiff durch den Raum manövriert, oder ein Jump and Run, bei dem man von einer Plattform zu nächsten springt. Bewegung und die Bestimmung der Position ist für Spiele essentiell. Wer anfängt sich mit Unity auseinanderzusetzen und die ersten Scripts schreiben will, muss sich deshalb auch meistens gleich zu Beginn die Frage stellen, wie man die Position eines GameObject finden und modifizieren kann.

### GameObject.Transform

Jedes GameObject besitzt eine Transform Komponente. Egal, ob das Objekt in der Welt sichtbar ist oder nicht, einfach nur ein Container für Skripte, oder komplett leer ist und keine Funktion hat. Es besitzt immer eine Transform, die die Position, Rotation und Größe des GameObject bestimmt. Weil das so ist, können wir auf Transform auch direkt zugreifen, ohne es vorher mit GetComponent<ComponentType> lokal zuweisen zu müssen.

### Vector3 position

Die position Property der Transform Komponente ist ein Vector3. Ein Vector3 hat, neben einigen nützlichen Methoden und Propertys, die Member x, y und z, die die Position des GameObject als Koordinaten in der Welt bestimmen.

### Position verändern

Wir können die Member für die Koordinaten x, y und z nicht direkt verändern und müssen deshalb die Set Methode verwenden oder der position Property einen neuen Vector3 zuweisen. Damit können wir ein Objekt an eine beliebige Position setzen.

```clike
// Setzt die Position des script ausführenden GameObjects
// auf x:1, y:0, z:5
this.transform.position.Set(1f, 0f, 5f);

// Hat den selben Effekt, nur weisen wir hier einen
// neuen Vector3 zu
this.transform.position = new Vector3(1f, 0f, 5f);

// Setzt das script ausführende GameObject auf die
// selbe Position wie anderesGameObject
this.transform.position = anderesGameObject.transform.position;
```

### Objekt bewegen

Für eine Bewegung nutzen wir die Update Methode als Ausgangspunkt, die genauso wie die Start Methode in jedem neuem Script vorhanden ist. Die Update Methoden von allen aktiven Scripts werden mit jedem Frame einmal aufgerufen, der zeitliche Abstand zwischen den Aufrufen kann dabei je nach Leistung des Spiel ausführenden Gerätes variieren. Aus diesem Grund sollte man grundsätzlich alle Bewegungen mit Time.deltaTime multiplizieren. Time.deltaTime ist ein float, der die seit dem letzten Frame vergangene Zeit in Sekunden liefert. Damit stellen wir sicher, dass die Bewegungsgeschwindigkeit unabhängig von der Framerate immer gleich ist.

Neben der Zeit als Multiplikator brauchen wir natürlich auch noch die Richtung und Geschwindigkeit der Bewegung. Die gewünschte Richtung drücken wir mit einem Vector3 aus, dessen Werte für die Achsen x, y und z normalerweise zwischen 0 und 1 liegen. Die Geschwindigkeit ist einfach ein float, der als Multiplikator zusammen mit der Zeit vorgibt, wie schnell sich ein Objekt bewegen soll.

```clike
// Objekt bewegt sich mit einer Geschwindigkeit von 10 nach rechts
var Geschwindigkeit = 10f;
var Richtung = new Vector3(1f, 0f, 0f);
this.transform.position += Richtung * Geschwindigkeit * Time.deltaTime;

// Objekt bewegt sich mit einer Geschwindigkeit von 5 nach oben
// und mit 10 nach hinten
var Geschwindigkeit = 10f;
var Richtung = new Vector3(0f, 0.5f, -1f);
this.transform.position += Richtung * Geschwindigkeit * Time.deltaTime;
```

### Beschleunigung

Mit einer Beschleunigung kann man den Eindruck erwecken, dass ein sich bewegendes Objekt Gewicht hat und Zeit braucht, um die maximale Geschwindigkeit zu erreichen. Je nachdem, was das Objekt darstellen soll, kann damit die Bewegung natürlicher wirken.

Das ganze ist relativ leicht umzusetzen. Man braucht einen Wert für die maximale Geschwindigkeit und einen Multiplikator für die gewünschte Beschleunigung. Wenn eine Bewegung stattfindet, dann wird die aktuelle Geschwindigkeit mit der Beschleunigung erhöht, bis das Maximum erreicht ist. Wenn keine Bewegung stattfindet, dann wird die aktuelle Geschwindigkeit wieder auf 0 gesetzt.

### Beispiel: Script - Objekt mit Pfeiltasten bewegen

```clike
using UnityEngine;
using System.Collections;

public class Bewegen : MonoBehaviour
{
    // public member eines Scripts können bequem im Unity Editor gesetzt
    // und auch während das Spiel getestet wird verändert werden.
    public float Geschwindigkeit;
    public float Beschleunigung;

    float aktuelleGeschwindigkeit = 0;
    Vector3 richtung = Vector3.zero;

    void Start()
    {
    }

    void Update()
    {
        if (EingabeÜberprüfen())
        {
            if (aktuelleGeschwindigkeit < Geschwindigkeit)
            {
                aktuelleGeschwindigkeit += Beschleunigung * Time.deltaTime;
            }
            this.transform.position += richtung * aktuelleGeschwindigkeit * Time.deltaTime;
        }
        else
        {
            aktuelleGeschwindigkeit = 0f;
        }
    }

    private bool EingabeÜberprüfen()
    {
        bool eingabe = false;
        float x = 0f;
        float z = 0f;

        // Input.GetKey gibt true zurück wenn die gefragte Taste gedrückt ist
        if (Input.GetKey(KeyCode.RightArrow))
        {
            x++;
            eingabe = true;
        }
        if (Input.GetKey(KeyCode.LeftArrow))
        {
            x--;
            eingabe = true;
        }
        if (Input.GetKey(KeyCode.UpArrow))
        {
            z++;
            eingabe = true;
        }
        if (Input.GetKey(KeyCode.DownArrow))
        {
            z--;
            eingabe = true;
        }
        richtung = new Vector3(x, 0f, z);
        return eingabe;
    }
}
```

### Wie geht es weiter?

Ich habe ein Beispiel Projekt auf Github, dass die Konzepte aus diesem Artikel noch einmal veranschaulicht. Natürlich war dieser Beitrag erst der Anfang und, wenn ich die Zeit finde, werden hoffentlich noch einige folgen. Beim nächsten mal werde ich weiter auf Bewegung eingehen und einige nützliche Methoden der Vector3 Klasse beschreiben.
