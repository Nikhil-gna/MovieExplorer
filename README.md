# 🎬 Movie Explorer App

A modern and responsive Movie Explorer App built with React and Tailwind CSS. This application allows users to search, explore, and manage their favorite movies using data from a movie API on RapidAPI.

## Live Deployment

> Hosted API: [https://movie-explorer-henna.vercel.app/](https://movie-explorer-henna.vercel.app/)

---
## Features

### Movie Search & Browse
- Integrates with **IMDb API** or any free movie API from **RapidAPI**.
- Browse a list of movies displaying the **title**, **poster**, **rating**, and **release year**.
- Supports **search functionality** to find specific movies.

### Infinite Scroll
- Smooth client-side **pagination** or infinite scroll for seamless browsing.

### Favorites Management
- Mark and unmark movies as **favorites**.
- Favorites are stored in **Local Storage** and accessible across sessions.
- Dedicated **Favorites Page** to view all saved favorite movies.

### Navigation
- Built with **React Router** to navigate between the **Home** and **Favorites** pages.

### Modern Styling
- Designed using **Tailwind CSS** for a clean, responsive, and user-friendly interface.

### Graceful Error & Loading States
- User-friendly **loading animations** using Lottie.
- Proper error handling with **toast notifications**.

## Tech Stack

- React (TypeScript)
- Tailwind CSS
- Axios (for API requests)
- React Router DOM
- React Context API + LocalStorage
- RapidAPI (IMDb API)
- react-hot-toast & lottie-react

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/Nikhil-gna/MovieExplorer.git

cd MovieExplorer

```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Add Your API Key
Create a `.env` file in the root directory and add your API key from RapidAPI:

```
VITE_RAPIDAPI_KEY=your_api_key_here
VITE_RAPIDAPI_HOST=

```

### 4. Run the Development Server
```bash
npm run dev
# or
yarn dev
```

### 5. Build for Production
```bash
npm run build
```

---

_Developed as a frontend assignment — May 31, 2025_
