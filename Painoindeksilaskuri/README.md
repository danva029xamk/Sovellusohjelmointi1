Tehtävänäsi on toteuttaa painoindeksilaskuri React-tekniikoin. Painoindeksin laskukaavan ja kuvaustekstit löydät verkosta, esim. http://fi.wikipedia.org/wiki/Painoindeksi

Toteuta sovelluksesi tähän GitHub-repositorioon ja palauta määräaikaan mennessä esimerkin mukainen tehtäväraportti pdf-muodossa.

Sovelluksen perusvaatimukset (2 pistettä):

Käyttäjältä kysytään pituus senttimetreissä (huom!) ja paino kilogrammoina kahdella allekkaisella tekstikentällä. Huomaathan, että tekstikentistä poimittu data on aina string-tyyppistä. Muunna stringit number-tyyppiin ennen laskentaa.
Näiden alapuolella on painonappi "Laske painoindeksi". Napin painaminen suorittaa laskutoimituksen ja tulostaa tuloksen samalle sivulle muodossa "Painoindeksi on: xx.xx". Huomaa pyöristys kahteen desimaaliin.
Riippuen laskutuloksesta, ohjelma tulostaa myös painoindeksiä vastaavan kuvaustekstin (esim. "normaali paino", "lievä ylipaino")
Lisävaatimuksia sovellukselle (1 lisäpiste):

Laskettu tulos ja painoindeksiä vastaava kuvausteksti sijaitsee div-elementissä, jonka tyyli on määritelty erillisessä css-tiedostossa. Elementin väri/tyyli vaihtuu painoindeksin mukaan. Esimerkiksi vaikea yli- tai alipaino on tyyliltään punainen, merkittävä yli-/alipaino on keltainen ja normaali paino vihreä. Voit valita tyyliratkaisut vapaasti, mutta vähintään tekstin värin ja elementin taustavärin tulee muuttua lasketun painoindeksin mukaisesti.

Maksimipisteet: 3 p. Osittain perusvaatimuksiin vastaavasta toteutuksesta on mahdollista saada 1 piste, mikäli ongelmakohtia on käsitelty raportissa.
