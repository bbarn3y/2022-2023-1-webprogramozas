# Dumb Wordle (2 pont)

- Kerüljön egy text input az oldalra, amely karakter lenyomására rögzíti a már beadott karaktereket.
- Ha a betű már lenyomásra került korábban, akkor ne kerüljön be újra a listába.
- A már lenyomott betűk vizuálisan is legyenek felsorolva az oldalon, ABC rendben.
- Elég ha az input mező az angol ABC betűit kezeli, azonban más karaktert ne is fogadjon el, tehát például szám
ne tudjon bekerülni a listába.
- A betű lenyomásakor az adott karakter ne jelenjen meg az input box-ban (a text input mindig legyen üres).
- Egy tömbben definiáljunk feladványokat. Ezek az angol ABC betűiből álló szavak legyenek, legalább 5 darab.
- Induláskor a program véletlenszerűen válasszon egy feladványt az előbb megadott tömbből.
- A szó jelenjen meg az oldalon, azonban az egyes betűk helyén üres négyzetek kerüljenek alapból.
- Üres, még felfedetlen négyzetre kattintva a felhasználó kapjon egy üzenetet (például alert-el), amely közli vele,
hogy az adott négyzet alatt található betű magánhangzó vagy pedig mássalhangzó.
(A megoldáshoz próbáljatok delegációt használni.)
- Amikor a felhasználó egy olyan betűt nyom le az input mezőben, amely szerepel a szóban, akkor az adott betűt
fedjük fel a feladványban.
Ha a betű többször is szerepel a szóban akkor az összes előfordulását!
- Ha a felhasználó felfedte az összes betűt, akkor a feladvány alatt jelenjen meg egy gratuláció, valamint egy gomb,
amellyel új feladványt kérhet a felhasználó.

Segítség:
- Nem gond ha a program egyszerűen kijátszható, tehát ha például a HTML struktúrában látszanak a rejtett betűk
egy attribútumban.
- Az input mezőnél a "keydown" esemény hasznos lehet.
- A "display: none" stílus-beállítással egyszerűen elrejthetők HTML elemek.
- Random szám generálás: https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
