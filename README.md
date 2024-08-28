# Bokregister Webbapp

## Översikt
Denna webbapp är ett bokregister som gör det möjligt för användare att visa en lista över böcker, söka efter specifika böcker, och lägga till nya böcker. All data hanteras på klientsidan med hjälp av HTML, CSS och JavaScript.

## Funktioner
- **Se alla böcker**: Visa alla böcker i registret i en tabell.
- **Sök efter en bok**: Filtrera böcker baserat på titel, författare eller ISBN via ett sökfält.
- **Lägg till nya böcker**: Fyll i formulärfält för titel, författare och ISBN för att lägga till en ny bok till listan.

## Användning

### Visa alla böcker
Vid sidladdning visas alla böcker i bokregistret i en tabell under rubriken "Alla böcker". Om ingen bok finns i registret visas ett meddelande om att listan är tom.

### Sök efter en bok
Använd sökfältet över tabellen för att filtrera böcker baserat på en del av titeln, författarens namn eller ISBN. När du skriver i sökfältet uppdateras tabellen automatiskt för att visa böcker som matchar söktermen. Om sökfältet är tomt visas alla böcker i listan.

### Lägg till nya böcker
Använd formuläret för att lägga till en ny bok till registret. Fyll i fälten för titel, författare och ISBN och klicka på knappen "Lägg till bok" för att lägga till boken. Formuläret återställs efter att boken har lagts till, och den nya boken visas direkt i tabellen.

## Teknologier
- **HTML**: Används för att skapa strukturen på webbsidan.
- **CSS**: Används för att styla webbsidan och göra den visuellt tilltalande.
- **JavaScript**: Används för att hantera funktionaliteten för att lägga till, visa och söka efter böcker.
