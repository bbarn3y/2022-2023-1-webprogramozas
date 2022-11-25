# Webprogramozás 2022-2023-1 ZH 2

Az eredményeket küldjétek a babuafi@inf.elte.hu e-mail címre.

## A feladat

Adott két fájl könyvek adataival:
`books.json` és `books.csv`

A fájlok könyvek adatait tartalmazzák, minden könyvről a következőket:
- **title**: A könyv címe.
- **author**: A könyv szerzője.
- **release**: A könyv megjelenésének éve.

1.1 **Olvasd be a `books.json` fájl tartalmát, egy asszociatív tömbbe.** (1 pont)

1.2 **Olvasd be a `books.csv` fájlban található könyvek adatait egy asszociatív tömbbe.
Használd a CSV fájl fejlécét a mezőnevek megszerzéséhez!** (1 pont)

1.3 **Hozz létre egy tömböt, mely azokat a könyveket tartalmazza, amelyek mindkét fájlban szerepelnek.
Két könyv akkor tekinthető egyenlőnek, ha minden adatuk megegyezik.** (2 pont)

1.4 **Jelenítsd meg táblázatos (`<table>`) formátumban az 1.3-as feladat során összegyűjtött könyvek
minden mezőjét.** (1 pont)

1.5 **Jelenítsd meg listás (`<ul>`, `<li>`) formában az 1.3-as feladat során összegyűjtött könyvek
címe közül CSAK azokat, amelyek az utóbbi 10 évben, azaz 2012-ben vagy az után jelentek meg.** (1 pont)

1.6 **Hozz létre könyv felvételéhez egy űrlapot (`<form>`) a három szükséges mezővel: `title`, `author`, `release`.**
**Az űrlap segítéségével beküldött könyv adatait mentsd le egy `m_books.tsv` fájlba TSV
(Tab Seperated Values) formátumban,
a következő módon:**
- **Ha a fájl még nem létezik, hozd létre.**
- **Ha a fájl már létezik, az új személy adatai a fájl végére (utolsó sorába) kerüljenek.**
- **A fájl első sorába nem kötelező beszúrni a mezőneveket tartalmazó fejlécet (de be lehet).**

**Az űrlap beküldéséhez használható GET illetve POST method is.**

**Az oldal ne dobjon hibát akkor sem, ha a személy adatai nem kerülnek átadásra!
(Tehát amikor csak ráfrissítünk az oldalra.)**

(3 pont)

_Segítség_: TSV formátumban a mezők "\t" karakterrel vannak elválasztva, nem vesszővel (",")!

1.7 **Validáció: Az űrlap minden mezőjét legyen kötelező megadni.
A validáció PHP-ben történjen, NE a HTML5-ös helperek használatával.
Hiányzó mezők esetén a felhasználó kapjon üzeneteket piros betűvel kiírt üzenetben értesüljön a hibá(k)ról.
(Tartozhat külön üzenet minden hibához.)**

**Az 1.6-os feladatban szereplő fájl módosítása csak akkor történjen meg, ha minden mező beküldésre került!**
(2 pont)

1.8 **Validáció: Az űrlap alá pirossal írj ki egy hibaüzenetet, amennyiben a könyv címe nem
`M` betűvel kezdődik.** (1 pont)

_Segítség_: Az ellenőrzés megoldható például a `preg_match` parancs használatával.
A parancs leírása és példáuk: https://www.php.net/manual/en/function.preg-match.php

A `preg_match` parancs regex kifejezés alapján ellenőriz.
Regexben a `^` karakter használható annak ellenőrzésére, hogy egy karakter a sztring elenjén
van-e.

1.9 **Számítsd ki az 1.3-as feladatban összerakott közös könyvek megjelenési dátumának mediánját.
A mediánszámító függvény működjön páros és páratlan számú elem esetére is!** (2 pont)

_Segítség_: Páratlan elemszámú tömb esetén a medián a középső elem.
Páros elemszám esetén pedig a két középső elem átlaga.

Tömb átalakítására az `array_map` függvény használható: https://www.php.net/manual/en/function.array-map.php

Tömb rendezése: https://www.php.net/manual/en/function.sort.php

---

Összesen elérhető pontszám: **10 + 4**

