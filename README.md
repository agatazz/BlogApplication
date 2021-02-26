# Blog Application

Aplikacja BlogApp to aplikacja umożliwiająca prowadzenie własnego bloga.Jest to aplikacja posiadająca właściwości MERN oraz CRUD. 

## Uruchomienie

Aby uruchomić aplikację należy najpierw zarówno do folderu backend jak i frontend zainstalować paczki i biblioteki wymagane przez npm

### Uruchomienie backendu 
`npm install`

`npm start`

O poprawnym działaniu backendu będzie świadczyć informacja  *DB CONNECTED*

![Alt Text](https://i.ibb.co/zxXwp2j/Screenshot-11.png)

### Uruchomienie frontendu 
`npm install`

`npm start`


## Technologie 

1. React v.17.0.1
2. Bootstrap v.v4.6.0
3. MongoDB v.3.6.3
4. NodeJS  v.14.14.22
5. Express v.4.17.1

## Przykłady wykorzystanych paczek i rozszerzeń

1. body-parser: v.1.19.0
2. cors: v.2.8.5
3. dotenv: v.8.2.0
4. express: v.4.17.1
5. express-jwt: v.6.0.0
6. jsonwebtoken: v.8.5.1
7. mongoose: v.5.11.13
8. morgan: v.1.10.0
9. nodemon: v.2.0.7
10. slugify: v.1.4.6
11. axios: v.0.21.1
12. react-quill: v.1.3.5
13. react-render-html: 0.6.0


## Funkcjonalności

1. Aplikacja umożliwia przeglądanie opublikowanych wpisów
2. Użytkownik zalogwany na konto ma możlwiość przeglądania, dodawania, edytowania oraz usuwania wpisów.
3. Aplikacja posiada edytor tekstu który umożlwia np.pogrubienie,podkreślenie,wypunktowanie tekstu,dodanie linka lub zmiane formatu na h1,h2 lub h3

## Wygląd aplikacji

### Wygląd aplikacji bez logowania
![Alt Text](https://i.ibb.co/W6xHZ3p/Screenshot-9.png)

### Wygląd aplikacji po zalogowaniu
![Alt Text](https://i.ibb.co/SnvYHvx/Screenshot-1.png)

### Wygląd wpisu po kliknięciu na tytuł
![Alt Text](https://i.ibb.co/xfJpyWH/Screenshot-4.png)

### Wygląd tworzenia wpisu
![Alt Text](https://i.ibb.co/cF6LLXs/Screenshot-2.png)

### Wygląd edycji wpisu
![Alt Text](https://i.ibb.co/ngRm3n9/Screenshot-3.png)

## Bezpieczeństwo
### Aplikacja wykorzystuje web tokeny oraz chronione routy w celu zabezpieczenia funkcjonalności dodawania,usuwania oraz edytowania wpisów przed niezalogowanymi użytkownikami.
### Formularze aplikacji posiadają walidacje gwarantującą wpisanie poprawnych danych
### Usunięcie wpisu na blogu jest poprzedzone alertem upewniającym się czy użytkownik chce wykonać dane działanie

## Struktura logiki aplikacji
![Alt Text](https://webassets.mongodb.com/_com_assets/cms/MEAN_stack-0pdlo3qwbn.png)


