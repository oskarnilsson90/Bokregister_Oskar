# Oskars Bokregister

Oskars Bokregister är en enkel webbapplikation byggd för att hantera en samling av böcker. Applikationen tillåter användaren att visa, redigera, lägga till och ta bort böcker från en lista. Varje bok har en titel, författare och ISBN-nummer.

## Funktioner

- **Visa bok**: Användaren kan se detaljerad information om varje bok, inklusive titel, författare och ISBN-nummer.
- **Redigera bok**: Möjligheten att uppdatera befintlig information om en bok, inklusive att redigera dess titel, författare och ISBN.
- **Lägg till bok**: Användaren kan lägga till nya böcker i systemet.
- **Ta bort bok**: Användaren kan permanent ta bort en bok från systemet efter bekräftelse.
- **Validering**: Inmatningsvalidering för att säkerställa att böcker har en korrekt ISBN (13 siffror) och att alla fält fylls i.

## Teknologier

Projektet är byggt med:

- **HTML**: Struktur och markup för webbgränssnittet.
- **CSS**: Stilar för att designa och formatera gränssnittet.
- **JavaScript**: Interaktivitet och API-anrop för att hantera CRUD-operationer (Create, Read, Update, Delete) via asynkrona anrop.
- **REST API**: Används för att hämta och uppdatera information om böckerna.

## API

Projektet använder ett REST API för att hantera data om böcker. Här är de viktigaste funktionerna som anropas i koden:

- `API.getBooks()`: Hämtar alla böcker från API:et.
- `API.getBook(id)`: Hämtar detaljerna för en specifik bok baserat på bok-ID.
- `API.addBook(title, author, isbn)`: Lägger till en ny bok med angiven titel, författare och ISBN.
- `API.editBook(id, title, author, isbn)`: Uppdaterar information om en specifik bok.
- `API.deleteBook(id)`: Tar bort en specifik bok.
