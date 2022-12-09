# Webprogramozás 2022-2023-1 ZH 2 Pót

Az eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre zipelve.

## A feladat

Adott három fájl emberek és könyvek adataival:
`persons.json`, `books.json` és `books.csv`

Mindhárom fájl elemei tartalmazzák a `name` mezőt, a többi mező emberek illetve könyvek esetén eltérő.

A feladat célja, hogy a felhasználó meg tudjon adni egy fájlnevet és opcionálisan egy szűrőt,
ami alapján az oldal újratöltése nélkül (tehát AJAX használatával) kiíratjátok a leszűrt elemeket
táblázatos formátumban.

1.0 **`README.hun.md` fájl elolvasása, név és Neptun kód kitöltése.
A kitöltött fájl legyen az eredményként beküldött zip fájl része!**

**Enélkül nem elfogadható a ZH!** (0 pont)

1.1 **A `zh2b.html` fájlban hozz létre egy űrlapot a következő két mezővel
és egy submit gombbal:** (1 pont)

- filename (típusa: text)
- filter (típusa: text)

1.2 **A submit gombra kattintva NE töltődjön újra az oldal, tehát ne a form submit alap
működése hajtódjon végre.** (1 pont)

1.3 **A submit gombra kattintva a `zh2b.js` indítson egy HTTP kérést a `zh2b.php` fájl felé.
A HTTP kérés tartalmazza az űrlap két mezőjét.
A HTTP kérés (GET/POST) illetve az adatok átadásának módja (FormData, JSON, text)
szabadon választható.** (2 pont)

1.4 **A `zh2b.php` fájl dolgozza fel a felhasználó által beküldött kérést.
Amennyiben a felhasználó által megadott fájlnév nem található, a szerver dobjon vissza egy hibaüzenetet
HTML formátumban (például: `<div style="color: red">The file could not be found.</div>`).** (1 pont)

_Segítség_:

- A `file_exists` paranccsal egyszerűen ellenőrizhető, hogy egy fájl létezik-e:
https://www.php.net/manual/en/function.file-exists.php
- A PHP file futtatása az `exit` parancs használatával megszakítható:
https://www.php.net/manual/en/function.exit.php

1.5 **Amennyiben a megadott fájlnévvel létezik fájl, olvasd ki annak tartalmát.
A kiolvasásnak 2 fájlformátumot kell tudnia kezelni: CSV és JSON.
A kiolvasás eredménye minden esetben egy asszociatív tömb legyen.
A függvény általánosan működjön, tehát a kulcsokhoz használjátok fel a fejlécek valamint a mezőnevek tartalmát.**
(3 pont)

_Segítség_: Fájlok kiterjesztéve lekérhető a `pathinfo` parancs használatával, például a következő módon:
`pathinfo($_POST["filename"])["extension"];`
https://www.php.net/manual/en/function.pathinfo.php

1.6 **Amennyiben a felhasználó kitöltötte a `filter` mezőt is az űrlapon (tehát az értéke nem üres,
azaz a hossza nagyobb mint 0), az előző feladatban létrehozott asszociatív tömböt szűrd le `name`
alapján, csak azok az elemek maradjanak meg, amelyek `name` mezőjében szerepel a beküldött `filter` értéke.**

A `name` mező mindhárom fájl (`books.csv`, `books.json` és `persons.json`) elemeiben megtalálható,
így ezzel nem kell foglalkozni.

(2 pont)

_Segítség_: Az `str_contains` paranccsal ellenőrizhető, hogy egy szöveg szerepel-e egy másik szövegben.
https://www.php.net/manual/en/function.str-contains.php

1.7 **Amennyiben a fájl létezik, azonban a filterezés után egy visszaadható elem sem maradt, a szerver
szintén dobjon egy hibaüzenetet a problémáról,
pl.: `<div style="color: red">No records matching the provided filter!</div>`.**
(1 pont)

1.8 **Amennyiben a fájl létezik és a filterezés után is maradtak elemek a tömbben, PHP oldalon készüljön
ebből egy HTML táblázatos formátumban (`table`, `thead`, `tbody` tag-ek használatával), amiben a fejléc
után minden sor egy tömbbeli elemnek felel meg.**

Ezt a HTML-t adja is vissza válaszként a szerver. (2 pont)

1.9 **A szerver által visszaadott HTML tartalmakat (az 1.8-ban létrehoztott táblázat, korábbi hibák)
jelenítse meg a kliens a `queryResult` azonosítójú DOM elemben.** (1 pont)

---

Összesen elérhető pontszám: **10 + 4**

