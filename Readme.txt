PROBLEMA:
1-Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

2-In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

3-La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

4-Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

SUPERBONUS 1: Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.
SUPERBONUS 2: Visualizzare un messaggio di vittoria se non si clicca su nessuna bomba.

1-Creo una funzione che generi numeri casuali
    1.1-I numeri casuali devono essere compresi tra 1 e la grandezza della griglia (cellsNumber) in base alla difficoltà selezionata
    1.2-Creo un array vuoto un quoi andranno i numeri già usciti
2-All'interno della funzione click creo una condizione che:
    2.1-SE premo su una bomba il tasto diventa rosso e perdo
    2.2-ALTRIMENTI continuo a premere i tasti della griglia
3-Definisco una variabile contatore per tenre traccia del numero di caselle buone cliccate