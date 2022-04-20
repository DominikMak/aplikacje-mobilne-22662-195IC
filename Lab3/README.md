### Laboratorium 3 - Dominik Makuch 22662
Aplikacja z renderowaniem listy danych i obsługą postępu.


### Opis kodu
#### App.js
W pliku tym wykorzystałem react-navigation do utworzenia 4 ekranów:
- strona główna

![1](/screenshots/1.PNG)

- sortowanie

![2](/screenshots/2.PNG)

- lazy loading

![2](/screenshots/3.PNG)

- step progress

![2](/screenshots/4.PNG)

#### Strona główna
Możliwość przejścia pomiędzy trzema ekranami: 
Sortowanie, lazy loading, step progress.

![2](/screenshots/5.PNG)

#### Sortowanie
Generowanie psuedolosowych liczb oraz sortowanie ich w "dół" lub w "górę".

![2](/screenshots/6.PNG)

- writeNumbers - generuje losowe liczby jedna po drugiej.

- generate() - generuje nowe liczby po wciśnięciu przycisku.

- sortDown() - sortuje tablice w dół.

- sortUp() - sortuje tablicę w górę.

#### Lazy loading
Za pomocą React.lazy() wyświetlany jest ekran ładowania podczas generowania losowych liczb zawierający tekst: "Loading..."

![2](/screenshots/12.png)

Generate.js: 

![2](/screenshots/13.png)

#### Step progress
Wykorzystany został react-native-progress-steps.

![3](/screenshots/14.png)

Następuje zmiana "kółka" ładowania przy każdym z kroków

![3](/screenshots/15.png)

![3](/screenshots/16.png)


### Działanie aplikacji


![3](/screenshots/1.jpg)
 
![3](/screenshots/2.jpg)

![3](/screenshots/3.jpg)

![3](/screenshots/4.jpg)

![3](/screenshots/8.jpg)

![3](/screenshots/9.jpg)

![3](/screenshots/10.jpg)