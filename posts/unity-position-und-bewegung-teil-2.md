---
title: "Unity - Position und Bewegung Teil 2"
date: "2015-02-15"
tags: "c#, transform"
categories: "unity"
---

Dies ist mein erster Artikel zum Thema Scripting in Unity. Ich habe hier in meinem Blog bis zuletzt nur über Spiele berichtet, aber nie über Programmierung und / oder die Entwicklung von Spielen. Das möchte ich zukünftig ändern und starte deshalb heute mit meinem ersten Beitrag über die Transform Komponente und das Verändern der Postition von GameObjects.

---

Im ersten Teil habe beschrieben, wie man die Position von Gameobjects verändern kann und wie eine einfache Bewegung simuliert wird. In diesem Artikel möchte ich etwas ausführlicher auf die Vector3 Klasse eingehen. Da man bei der Spiele Entwicklung ständig mit Vectoren arbeitet, ist es wichtig, die Arbeit mit ihnen zu beherrschen. Es kann einiges an Denkarbeit ersparen, wenn man weiß, dass es Methoden und Propertys gibt, die häufig vorkommende Rechnungen mit Position Koordinaten von Objekten abkürzen.

### STATISCHE VARIABLEN
Die statischen Variablen zero, one, up, down, left, right, forward und back erklären sich im Prinzip von selbst. Es sind einfach nur Kurzformen für die entsprechende Richtung auf der Koordinaten Achse. Diese könnten vielleicht manchmal nützlich sein um den Code etwas kürzer und lesbarer zu machen. Insbesondere Vector3.zero wird häufig verwendet, wenn man einen Vector für die Bewegung auf null setzen will.

```clike
// 0, 0, 0
meinVector = Vector3.zero;
// 1, 1, 1
meinVector = Vector3.one;
// -1, 0, 0
meinVector = Vector3.left;
// 1, 0, 0
meinVector = Vector3.right;
// 0, 1, 0
meinVector = Vector3.up;
// 0, -1, 0
meinVector = Vector3.down;
// 0, 0, 1
meinVector = Vector3.forward;
// 0, 0, -1
meinVector = Vector3.back;
```

### VECTOR3.MAGNITUDE
Es gibt viele Situationen, die eine Messung der Distanz zwischen zwei Objekten erforderlich machen. Dafür brauchen wir erstmal den Weg zum Ziel der sich aus der Differenz von ZielVector - StartVector ergibt und können dann die Länge des Ergebnisses berechnen. Die magnitude Property nimmt uns die Arbeit beim zweiten Schritt ab und gibt uns direkt die Länge des Vectors zurück. Bei intensiver Nutzung von magnitude empfiehlt es sich die etwas ressourcensparendere Alternative sqrMagnitude zu nutzen.

```clike
// Distanz bis zum Zielpunkt als float
float distanz = (zielVector3 - this.transform.position).magnitude;
if(distanz < 5f)
  {
    print("Distanz zum Ziel ist kleiner als 5");
  }

// Die ressourcensparende Version. Ergebnis ist Distanz * Distanz
float sqrDistanz = (zielVector3 - this.transform.position).sqrMagnitude;
if(sqrDistanz < 5f * 5f)
  {
    print("Distanz zum Ziel ist auch hier kleiner als 5");
  }
```

### VECTOR3.DISTANCE
Mit der Distance Methode können wir die Distanz Berechnung noch etwas vereinfachen. Sie entspricht (ziel - start).magnitude und ist ist dabei etwas leserlicher im Code. Wenn man nicht auf die bessere Performance von sqr.magnitude angewiesen ist, ist das der bevorzugte Weg um Entfernungen zu messen.

```clike
float distanz = Vector3.Distance(zielVector3, this.transform.position);
```

### VECTOR3.NORMALIZE
Zur Berechnung einer Richtung nutzen wir die Normalize Methode oder die normalized Property. Damit wird die maximale Länge eines Vectors auf 1 reduziert, was bei der Bewegung eine gleichbleibende Geschwindigkeit unabhängig von der Entfernung garantiert.

```clike
Vector3 wegZumZiel = zielPosition - this.transform.position;

// oder wir nutzen Normalize Methode um einen neuen Vector zu erzeugen.
Vector3 richtung = Vector3.Normalize(wegZumZiel);

// Mit der Richtung können wir dann die eigentliche Bewegung berechnen.
this.transform.position += richtung * geschwindigkeit * Time.deltaTime;
```

### VECTOR3.MOVETOWARDS
Wenn die einzelnen Achsen nicht unabhängig voneinander berechnet werden müssen, also immer wenn ein Objekt auf direkten Weg zu einem Ziel hin bewegt werden soll, können wir die Methode MoveTowards benutzen. Die nimmt uns die Berechnung der Richtung ab und garantiert, dass man nicht über das Ziel hinausschießt.

```clike
// Das Objekt bewegt sich mit der vorgegebenen Geschwindigkeit zum Ziel
this.transform.position = Vector3.MoveTowards(this.transform.position, zielPosition, geschwindigkeit * Time.deltaTime);

// Mit negativer Geschwindigkeit bewegt sich das Objekt vom Ziel weg
this.transform.position = Vector3.MoveTowards(this.transform.position, zielPosition, -geschwindigkeit * Time.deltaTime);
```

### VECTOR3.LERP
Die Lerp Methode errechnet einen Zwischenwert von zwei Vektoren. Damit kann man zum Beispiel den Punkt finden, der genau in der Mitte von zwei Objekten liegt. Es ist auch möglich damit eine Bewegung zu berechnen, die von einen bestimmten Wert wie der Zeit abhängig ist.

```clike
// Der dritte Parameter der Lerp Methode ist ein float von 0f bis 1f
// 0f ist die Position des ersten Objekts und 1f ist die Position des zweiten Objekts
// 0.5f entspricht dann also genau der Mitte zwischen den beiden
Vector3 derMittelpunkt = Vector3.Lerp(objekt1position, objekt2position, 0.5f);
```

### VECTOR3.SMOOTHDAMP
Mit der SmoothDamp Methode kann man eine Bewegung zu einem Zielpunkt mit einer Zeitvorgabe ausführen. Das heißt bei größerer Entfernung wird die Geschwindigkeit erhöht und bei kurzen Distanzen dementsprechend verlangsamt. Dabei geht die Bewegung nie über den Zielpunkt hinaus. Optional kann man noch eine maximal Geschwindigkeit festlegen, die unabhängig von der Entfernung nicht überschritten werden soll. Diese Methode eignet sich besonders gut um zum Beispiel eine Kamera mit gleichmäßigen Bewegungen einem Objekt folgen zu lassen.

```clike
public class KameraFolgen : MonoBehaviour
{
    public Transform Ziel;
    public float smoothTime = 0.3F;

    private Vector3 velocity = Vector3.zero;

    void Update()
    {
      // Position mit 10 Abstand über den Ziel
        Vector3 angepasstesZiel = Ziel.TransformPoint(new Vector3(0, 10, 0));
      // Der der fünfte Parameter ist die maximal erlaubte Geschwindigkeit und optional
        transform.position = Vector3.SmoothDamp(transform.position, angepasstesZiel, ref velocity, smoothTime, 50f);
    }
}
```

### VECTOR2
Wer ein 2D Spiel entwickelt brauch bei der Arbeit mit Vektoren nicht großartig umdenken. Alle in diesem Artikel aufgeführten Methoden funktionieren auch mit Vector2.

Es gibt noch weitere Methoden der Vector Klassen, die in einigen Fällen hilfreich sein könnten. Ich denke aber die im Text oben aufgeführten sollten für den Einstieg erstmal ausreiched sein.
