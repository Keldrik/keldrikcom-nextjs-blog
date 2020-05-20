---
title: "Xamarin.Forms - Mobile Entwicklung mit C# und XAML"
date: "2016-01-07"
tags: "c#"
categories: "xamarin"
description: "Ich habe mich für die Realisierung meiner nächsten App für Xamarin.Forms entschieden. Da ich bereits Erfahrung mit der Entwicklung von Windows Phone Apps habe, ist mir der Einstieg mit C# und XAML sehr leicht gefallen."
---

Wer schon einmal mit Gedanken gespielt hat eine mobile Applikation zu entwickeln, der wird bei der Planung zwangsläufig mit dem Problem konfrontiert, dass es mehr als ein populäres OS für Smartphones und Tablets gibt. Android und Apple's IOS sind beide sehr beliebt und decken den Großteil des mobilen Marktes ab. Es gibt aber auch noch Windows Phone 8, Windows 8 und das relativ junge Windows 10. Für die Nutzer ist es gut, dass es Konkurrenz im mobilen Markt gibt, denn die belebt das Geschäft und fördert Innovation. Für kleine Entwickler Teams oder einzelne Programmierer, die möglicherweise nicht die Ressourcen aufbringen können native Apps für alle Plattformen zu entwickeln, kann es zu einem Problem werden.

---

Kann man es sich nicht leisten mehrere Teams für die verschiedenen Systeme zu finanzieren, dann bietet es sich an, eines der Multi-Plattform Frameworks zu nutzen. Nachdem ich zuerst etwas mit Apache Cordova experimentiert habe, habe ich mich für die Realisierung meiner nächsten App für Xamarin.Forms entschieden. Da ich bereits Erfahrung mit der Entwicklung von Windows Phone Apps habe, ist mir der Einstieg mit C# als Programmiersprache und XAML für die Gestaltung des UI sehr leicht gefallen.

### XAMARIN
Im Jahre 2011 wurde die Firma Xamarin von Teilen des ehemaligen Mono Teams mit dem Ziel gegründet, Software für mobile Geräte zu veröffentlichen. Ein Jahr später im Dezember des Jahres 2012 kam dann Xamarin.Mac als Plugin für die bereits existierende IDE MonoDevelop auf den Markt und ermöglichte es, Mit der Programmiersprache C# Programme für Apples OS X zu entwickeln. Nur kurze Zeit später folgte mit dem Release 2.0 die eigene IDE Xamarin Studio, die nun auch Entwicklungstools für Android und IOS enthält. Auch die Entwicklung mit Microsofts Visual Studio war seitdem integriert.

Mit den Komponenten Xamarin.Android und Xamarin.IOS kann man native Apps für diese Plattformen erstellen. Das funktioniert, da die SDKs von beiden System fast eins zu eins auf C# übertragen wurden. Damit ist das Code Sharing zwischen den Systemen mit der gemeinsamen Sprache in einem Projekt stark vereinfacht worden. Mithilfe von Portable Class Libraries oder Shared Projects kann UI und System unabhängiger Code geteilt werden und das spart Zeit.

### XAMARIN.FORMS
Leider muss man, wenn man ein Projekt mit Xamarin.Android und Xamarin IOS entwickelt, immer noch sehr viel Code für die einzelnen Systeme schreiben, wenn man das UI erstellt oder für all die plattformspezifischen Dinge wie: Hardware Funktionen, Sound und Musik, Notifications usw. Um dies zu vereinfachen wurde Xamarin.Forms entwickelt, das im Mai 2014 vorgestellt wurde. Damit ist es möglich das UI mit Code oder in XAML nur einmal zu schreiben und das Framework übernimmt die Übersetzung für die verschiedenen Plattformen.

Erstellt man eine neue Xamarin.Forms Solution mit dem vorgegebenen Template findet man darin Projekte für Android, IOS (in Visual Studio auch Windows Phone) und eine Portable Class Library für Xamarin.Forms. Je nachdem welche Features in der App später genutzt werden sollen, kann es sein, dass man damit keinen plattformspezifischen Code mehr schreiben muss und die ganze Arbeit in den Forms Projekt erledigt. Noch ist nicht alles möglich und deshalb kann es bei aufwendigeren Projekten nötig sein, spezielle Funktionen oder Bedienelemente für Xamarin.Android oder Xamarin.IOS zu schreiben. Für einfachere Projekte ist es eine große Zeitersparnis und auch für alle die mit durch die Entwicklung für Windows Phone und Windows Store schon Erfahrung mit XAML haben ein angenehmer Einstieg in die Welt der plattformunabhängigen App Entwicklung.

### ES GEHT WEITER
Ich habe mich die letzten Monate für ein neues Projekt mit Xamarin.Forms beschäftigt. Was ich in der Zeit gelernt habe, hat mich überzeugt es zukünftig produktiv einzusetzen. In diesem Blog möchte ich in naher Zukunft mehr über meine Erkenntnisse mit dem Framework schreiben und hoffe dabei einige hilfreiche Informationen teilen zu können. Ein Nachteil hat Xamarin.Forms nämlich doch, es gibt leider nicht so viel Dokumentation im Internet, wie für die Google und Apple eigenen SDKs. Vielleicht kann ich mit ein paar Blog Posts etwas dazu beitragen diese Situation etwas zu verbessern.
