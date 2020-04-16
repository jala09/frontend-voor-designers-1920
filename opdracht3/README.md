# frontend voor designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht heb ik een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API] van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.


## Werkwijze
Ik schreef eerst op wat ik wilde creëren en met welke interacties ik dit json-project wilde weergeven. Voor dit project heb ik het idee uit opdracht 1 als inspiratie gehaald. ik wilde een eenvoudigere code zonder libraties. dus nadat ik een code op codepen had gevonden, begon ik daar omheen te werken om deze definitieve resultaten te creëren. Ik had in het begin veel fout meldingen en er zijn nog steeds dingen die ik heb geprobeerd op te lossen, maar ik kon niet op tijd hulp vinden om ze op te lossen. maar ik voel dat ik er bijna ben voor de volledige gewenste resultaten.


## Planning
1. Les 5: Briefing opdracht 3, API uitzoeken, tutorial doorlopen, schetsen en beginnen met coderen
2. Les 6: Eerste versie testen. Meenemen: breakdown-schets, JSON laden in de console, daarna in Javascript HTML elementen aanmaken, de data koppelen en toevoegen aan de DOM
3. Les 7: Demo presenteren
4. Les 8: Oplevering en beoordeling

## Ontwerp
Mijn ontwerp voor dit project is om de film weer te geven en de gebruiker te slepen met klick and drag of met touch en neer te zetten om de informatie voor elke film te krijgen.
De gebruiker kan duidelijk zien waar hij de films moet neerzetten en na elke film met een sluitknop terug naar huis gaan.

## feedback
ik heb feedback gekregen van Glenino
Hij houdt echt van de interacties die ik heb met het slepen en hoe dat de informatie onthult.
Mijn json-gegevens zijn correct uitgevoerd. Mijn laadscherm werkt en heeft een leuke gif.
Hover-effecten zijn mooi gedaan. Drop-activering is leuk, maar de tekst zou duidelijker moeten zeggen wat de gebruiker moet doen.
Ui states dat Hover en Drag in één keer het meest zichtbaar zijn. maar ze werken goed met de tekst die verschijnt.
Info voor film moet worden toegevoegd.

De pricipes zijn goed toegepast aleen natuurlijk het duidelijk zeggen wat moest gedaan met het afbeeliding.

## Aanpassingen na feedback
Na het ontvangen van feedback probeerde fom glenino de luchtweerstand te verhelpen omdat het erg slo beweegt, maar ik kon het repareren. Ik heb de json-informatie voor elke film geladen. Ik heb een duidelijkere uitleg toegevoegd voor de gebruiker, zodat ze weten dat ze moeten klikken en slepen of aanraken en slepen.




## wat lukte wel/niet
Na het bekijken van opdracht 1 was mijn code goed, maar het was geen code voor slepen en neerzetten die ik dacht te kunnen gebruiken. het laden van de json-bestanden toen ik vrij snel was nadat ik hulp kreeg en daarna begon ik met de structuur en het slepen en neerzetten. Dit werkte prima, maar nadat ik de json-bestanden had toegevoegd, kreeg ik een vertraging bij het slepen en dat is één ding dat ik niet kon oplossen.
Een ander eenvoudig onderdeel was de positionering van de informatie-informatie als opgemerkt werd dat de kegel telkens naar rechts beweegt als u een ander beeld selecteert. ik probeerde dit met flex en marges te herstellen maar het zou niet werken.

maar uiteindelijk heb ik het algemene idee achter deze interactie weten te krijgen en dat vind ik best goed.

een ander ding dat ik probeerde, maar niet werkte, was om de video-trailer van de film onder de omschrijving te krijgen, maar ik kon het helemaal niet laten werken, dus ik liet het weg
## Bronnen
Im kreeg mijn drag code op codepen. 
https://codepen.io/knyttneve/pen/XWrVYQB
voor de rest heb ik zelf met hulp van docent gedaan.

## Criteria
1. De uitwerking van je ontwerp moet het doen in een browser en device naar keuze.
2. De data wordt van een externe bron ingeladen met Javascript.
3. Een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) worden opgevangen en zijn vormgegeven.
4. In de demo maak je gebruik van meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) zodat gebruikers je ontwerp op verschillende manieren kunnen bedienen.
5. In de demo dien je rekening te houden met de interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/).
6. Je ontwerp is aantoonbaar getest en verbeterd. Verslaglegging en resultaat publiceren op Github


## Resources
- Gebruik verschillende [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) om de functionaliteit mee te bedienen.
- Met behulp van [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest) of [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) kan een [JSON](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) file worden geladen. Daarna kun je de HTML elementen aanmaken, de juiste content koppelen en aan de DOM toevoegen.
- Hier staat een [tutorial](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) voor het laden van JSON data en het aanmaken van HTMl elementen.
- Bij het laden van externe data kan de server verschillende [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) doorgeven, die kun je gebruiken om feedback te tonen.
