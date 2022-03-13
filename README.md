# Lab 1 - aplikacja startowa kalkulator
## Na potrzeby tego laboratorium stworzyłem prostą aplikację mobilną za pomocą Android Studio, pozwalającą na przeprowadzanie działań matematycznych (dodawanie, odejmowanie, mnożenie, potęgowanie, dzielenie) na dwóch liczbach.
* Aplikacja składa się z:
1. Dwóch pól editText służących do wprowadzania liczb: </br>
![1](Zrzuty/1.PNG)
2. Pola textView odpowiadającego za wyświetlanie wyniku działania: </br>
![2](Zrzuty/2.PNG)
3. Trzech przycisków odpowiadających za wykonanie odpowiadających im operacji: </br>
![3](Zrzuty/3.PNG)
* Przykład działania aplikacji:
1. Dodawanie: </br>
![4](Zrzuty/4.jpg)
2. Dzielenie przez zero: </br> 
![5](Zrzuty/5.jpg)
3. Ekran początkowy: </br> 
![6](Zrzuty/6.jpg)
4. Mnożenie: </br> 
![7](Zrzuty/7.jpg)
5. Odejmowanie: </br>
![8](Zrzuty/8.jpg)
* Kod odpowiadający za dzielenie dwóch liczb:</br>
![9](Zrzuty/9.PNG)</br>
Przedstawiona powyżej metoda odpowiada za dzielenie dwóch liczb oraz wyświetlenie wyniku. 
Do zmiennej 'sum' przypisywany jest wynik dzielenie dwóch liczb pobieranych z pól editText. Następnie dokonywana jest walidacja czy dokonywane działanie nie jest dzieleniem przez zero i w przypadku jeśli jest wartość pola textView zmieniana jest na 'nie dziel przez zero' w przeciwnym wypadku wartość tego pola zmieniana jest na wynik działania.
