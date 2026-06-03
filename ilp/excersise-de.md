# Individuelle Learning Phase: Mini-Post-Monitor mit `useEffect`

## Dein Ziel

Du baust Schritt für Schritt eine kleine React-19-Anwendung, in der du `useEffect` praktisch einsetzt. Du arbeitest mit einfachen Nebenwirkungen, lädst Daten aus einer API, steuerst die erneute Ausführung über Abhängigkeiten und setzt Cleanup-Funktionen für Timer und Event-Listener um.

## Das brauchst du

- Ein lauffähiges React-19-Projekt, z. B. mit Vite
- Einen Code-Editor
- Einen Browser mit DevTools
- Internetzugriff für die Test-API  
  `https://jsonplaceholder.typicode.com`
- Grundlegende Kenntnisse zu `useState`, Komponenten und JSX

## Zeitplanung

- **0–10 Min.:** Projekt starten, Grundstruktur anlegen, API kurz im Browser testen
- **10–20 Min.:** Aufgabe 1
- **20–40 Min.:** Aufgabe 2
- **40–60 Min.:** Aufgabe 3
- **60–75 Min.:** Aufgabe 4
- **75–90 Min.:** Aufgabe 5
- **90–110 Min.:** Erweiterungsaufgaben
- **110–120 Min.:** Abschlusscheck und Reflexion

## Basis-Aufgaben

### Aufgabe 1:

**Startansicht und erster Effekt**  
**Ziel:** Du setzt einen einfachen, sichtbaren Effekt um und erkennst, dass ein Effekt für Nebenwirkungen außerhalb des eigentlichen Renderns gedacht ist.  

**Arbeitsauftrag:**  
Erstelle eine Komponente `PostMonitor` mit folgendem Aufbau:

- Eine Überschrift
- Ein Texteingabefeld für einen Suchbegriff
- Einen Statusbereich mit dem aktuellen Suchbegriff
- Einen Button, mit dem du eine Zusatzansicht ein- und ausblenden kannst

Setze einen `useEffect` ein, der den Seitentitel im Browser (`document.title`) aktualisiert. Der Titel soll deinen Suchbegriff enthalten. Wenn das Suchfeld leer ist, soll ein sinnvoller Standardtitel erscheinen.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Deine Komponente wird sauber angezeigt.
- Wenn du im Suchfeld tippst, ändert sich der Seitentitel passend.
- Du hast einen ersten nachvollziehbaren Effekt in deiner React-19-Anwendung.

### Aufgabe 2:

**Posts einmalig aus einer API laden**  
**Ziel:** Du verwendest `useEffect` für einen einfachen API-Aufruf beim ersten Anzeigen der Komponente.  

**Arbeitsauftrag:**  
Erweitere `PostMonitor` so, dass beim ersten Rendern eine Liste von Posts geladen wird.

- Nutze die API:  
  `https://jsonplaceholder.typicode.com/posts?_limit=8`
- Speichere die geladenen Daten in einem State.
- Zeige die Posts als Liste an.
- Zeige während des Ladens einen kurzen Hinweis wie „Lade Daten …“.
- Zeige bei einem Fehler eine einfache Fehlermeldung an.

Achte darauf, dass der API-Aufruf nicht bei jeder Eingabe im Suchfeld erneut ausgeführt wird.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Beim Laden der Seite werden genau einmal Posts geladen.
- Du siehst eine Liste mit mehreren Einträgen.
- Ein Ladezustand und ein Fehlerzustand sind sichtbar nutzbar.
- Änderungen im Suchfeld lösen keinen neuen API-Aufruf aus.

### Aufgabe 3:

**Abhängigkeiten verstehen: Posts abhängig vom Filter neu laden**  
**Ziel:** Du steuerst mit dem Dependency Array, wann ein Effekt erneut ausgeführt wird.  

**Arbeitsauftrag:**  
Ergänze einen Filter für die Benutzer-ID.

- Baue ein Auswahlfeld oder mehrere Buttons für `Alle`, `User 1`, `User 2`, `User 3`.
- Passe den API-Aufruf so an, dass abhängig vom ausgewählten Filter unterschiedliche Daten geladen werden:
  - Alle: `https://jsonplaceholder.typicode.com/posts?_limit=8`
  - Einzelner User, z. B. User 2:  
    `https://jsonplaceholder.typicode.com/posts?userId=2&_limit=8`
- Sorge dafür, dass der Effekt erneut läuft, wenn du den Filter änderst.
- Kombiniere den API-Filter mit dem Suchfeld, indem du den Suchbegriff clientseitig auf die geladenen Posts anwendest.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Beim Wechsel des Filters wird die Liste neu geladen.
- Beim Tippen im Suchfeld wird die Liste gefiltert, ohne die API erneut aufzurufen.
- Du kannst klar beobachten, welche Änderung einen Effekt auslöst und welche nicht.

### Aufgabe 4:

**Timer mit Cleanup: Sekunden seit dem letzten Laden anzeigen**  
**Ziel:** Du setzt eine Cleanup-Funktion für einen einfachen Timer ein.  

**Arbeitsauftrag:**  
Erweitere deine Anwendung um eine Anzeige „Letztes Laden vor X Sekunden“.

- Speichere den Zeitpunkt der letzten erfolgreichen Datenladung.
- Starte mit `useEffect` ein Intervall, das die Sekundenzahl regelmäßig aktualisiert.
- Sorge mit einer Cleanup-Funktion dafür, dass das Intervall sauber beendet wird, wenn es nicht mehr gebraucht wird.
- Ergänze einen Schalter „Timer anzeigen“, mit dem du den Timer ein- und ausblenden kannst.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Nach jedem erfolgreichen Ladevorgang startet die Sekundenanzeige neu.
- Die Anzeige aktualisiert sich automatisch.
- Wenn du die Timer-Anzeige ausblendest, bleibt kein unnötiges Intervall aktiv.

### Aufgabe 5:

**Event-Listener mit Cleanup: Fensterbreite live anzeigen**  
**Ziel:** Du setzt einen Event-Listener mit sauberer Aufräumlogik um.  

**Arbeitsauftrag:**  
Baue eine optionale Infobox ein, die die aktuelle Fensterbreite anzeigt.

- Zeige die Breite mit `window.innerWidth` an.
- Registriere einen `resize`-Event-Listener in einem `useEffect`.
- Aktualisiere den angezeigten Wert bei jeder Größenänderung des Browserfensters.
- Nutze eine Cleanup-Funktion, um den Event-Listener wieder zu entfernen.
- Verwende deinen Button aus Aufgabe 1 oder einen neuen Schalter, um diese Infobox ein- und auszublenden.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Beim Vergrößern oder Verkleinern des Browserfensters ändert sich der angezeigte Wert.
- Wenn du die Infobox ausblendest, wird der Event-Listener sauber entfernt.
- Deine Anwendung bleibt übersichtlich und reagiert stabil.

## Erweiterungsaufgaben

### Erweiterungsaufgabe 1: API-Aufruf beim Komponentenwechsel sauber abbrechen

**Ziel:** Du verhinderst, dass ein veralteter Request nach einem schnellen Wechsel noch Daten in deine Ansicht schreibt.  

**Arbeitsauftrag:**  
Erweitere deinen Datenlade-Effekt um einen Abbruchmechanismus.

- Nutze `AbortController`.
- Brich den laufenden Request ab, wenn du den Benutzerfilter schnell wechselst oder die Komponente nicht mehr angezeigt wird.
- Stelle sicher, dass abgebrochene Requests keine Fehlermeldung erzeugen, die wie ein echter Fehler aussieht.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Schnelle Filterwechsel führen nicht zu fehlerhaften Zuständen.
- Veraltete Requests werden sauber beendet.
- Deine Konsole bleibt möglichst frei von unnötigen Warnungen.

### Erweiterungsaufgabe 2: Automatisches Neuladen einbauen

**Ziel:** Du kombinierst API-Aufrufe und Cleanup mit einem wiederkehrenden Effekt.  

**Arbeitsauftrag:**  
Füge eine Option „Auto-Refresh alle 30 Sekunden“ hinzu.

- Wenn die Option aktiv ist, sollen die Posts im eingestellten Intervall neu geladen werden.
- Wenn du die Option deaktivierst, muss das Intervall gestoppt werden.
- Die Anzeige „Letztes Laden vor X Sekunden“ soll weiterhin korrekt arbeiten.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Deine Daten werden bei aktiver Option automatisch neu geladen.
- Beim Deaktivieren läuft kein Intervall im Hintergrund weiter.
- Timer und Datenladung passen logisch zusammen.

### Erweiterungsaufgabe 3: Eigenen Hook für die Fensterbreite auslagern

**Ziel:** Du strukturierst wiederverwendbare Effekt-Logik sauber in einem Custom Hook.  

**Arbeitsauftrag:**  
Lagere die Logik für die Fensterbreite in einen eigenen Hook aus, z. B. `useWindowWidth`.

- Verschiebe State, `useEffect` und Cleanup in den Hook.
- Verwende den Hook anschließend in deiner Infobox.
- Achte darauf, dass sich am sichtbaren Verhalten nichts verschlechtert.

**Erwartetes Ergebnis / Soll-Zustand:**  
- Deine Komponente `PostMonitor` wird übersichtlicher.
- Die Resize-Logik ist gekapselt und wiederverwendbar.
- Der Event-Listener funktioniert weiterhin korrekt.

## Wichtige Hinweise

- Arbeite jede Aufgabe nacheinander ab.
- Teste nach jeder Änderung direkt im Browser.
- Nutze die DevTools und die Konsole, um das Verhalten deiner Effekte zu beobachten.
- Achte besonders darauf, **wann** ein Effekt läuft und **wodurch** er erneut ausgelöst wird.
- Prüfe bei Timern und Event-Listenern immer, ob deine Cleanup-Funktion tatsächlich greift.
- Halte deine Komponenten klein und benenne State und Funktionen eindeutig.

## Reflexionsfragen

- Woran erkennst du in deiner Anwendung, dass ein Effekt eine Nebenwirkung ausführt?
- In welcher Aufgabe sollte der Effekt nur einmal laufen, und wie hast du das erreicht?
- In welcher Aufgabe sollte der Effekt erneut laufen, und welche Abhängigkeit war dafür verantwortlich?
- Warum ist beim Timer eine Cleanup-Funktion wichtig?
- Warum ist beim `resize`-Event-Listener eine Cleanup-Funktion wichtig?
- Was ist in deiner Anwendung der Unterschied zwischen einem Effekt mit leerem Dependency Array und einem Effekt mit konkreten Abhängigkeiten?
- An welcher Stelle war der Einsatz von `useEffect` sinnvoll, und an welcher Stelle wäre normales Rendern ausreichend gewesen?

---