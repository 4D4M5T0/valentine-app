# 💝 Walentynkowa Aplikacja

Romantyczna aplikacja webowa stworzona w React z Bootstrap, aby zapytać moją dziewczynę, czy zostanie moją Walentynką! 🌹

## ✨ Funkcje

- 💖 Interaktywny interfejs z piękną kolorystyką Bootstrap
- 🎯 Uciekający przycisk "Nie" (bo kto by chciał go nacisnąć? 😉)
- 🎊 Konfetti po odpowiedzi "TAK!"
- 💕 Płynne animacje i efekty specjalne
- 📱 Responsywny design - działa na telefonach i komputerach
- 🎨 Stylizacja z Bootstrap 5

## 🚀 Jak uruchomić

1. Sklonuj repozytorium:
```bash
git clone [URL_TWOJEGO_REPO]
cd valentine-app
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom aplikację:
```bash
npm run dev
```

4. Otwórz w przeglądarce:
```
http://localhost:5173
```

## 📦 Jak zbudować do produkcji

```bash
npm run build
```

Zbudowana aplikacja znajdzie się w folderze `dist/`.

## 🌐 Jak opublikować na GitHub Pages

1. Zainstaluj gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Dodaj do `package.json`:
```json
{
  "homepage": "https://[TWOJA-NAZWA-UŻYTKOWNIKA].github.io/[NAZWA-REPO]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Zmień w `vite.config.js`:
```javascript
base: '/[NAZWA-REPO]/',
```

4. Opublikuj:
```bash
npm run deploy
```

## 💌 Personalizacja

Możesz edytować pliki aby dostosować aplikację:
- `valentine-app.jsx` - główna logika i zawartość
- `valentine-styles.css` - kolory, animacje i style
- Zmień teksty pytań w tablicy `messages`
- Dostosuj kolory gradientów w CSS

## 🛠️ Technologie

- React 18
- Vite
- Bootstrap 5
- CSS3 Animations
- ❤️ Miłość

## 📁 Struktura plików

```
valentine-app/
├── index.html              # Główny plik HTML
├── main.jsx               # Punkt wejścia React
├── valentine-app.jsx      # Główny komponent aplikacji
├── valentine-styles.css   # Style i animacje
├── package.json           # Zależności projektu
├── vite.config.js         # Konfiguracja Vite
└── README.md             # Ten plik
```

## 📝 Licencja

Ten projekt został stworzony z miłością dla mojej ukochanej! 💖

---

Zrobione z ❤️ na Walentynki 2025 • Powered by Bootstrap 5

