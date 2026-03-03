# Spotify Browser

## Project Overview

Spotify Browser is a full-stack web application that allows users to search for and explore music on Spotify. The application provides a clean, interactive interface for browsing artists, albums, and tracks, displaying detailed information such as artist popularity, top tracks, album listings, and individual track details. It communicates with the Spotify API indirectly through a Node.js/Express backend server, which handles authentication and API requests on behalf of the Angular frontend.

---

## Tools & Frameworks

### Frontend
- **Angular (v15+)** — The main frontend framework used to build the single-page application (SPA). Angular handles routing between pages, component-based UI rendering, and data binding between the TypeScript model and HTML templates.
- **TypeScript** — The primary language for Angular components and services. Provides type safety and object-oriented structure for data models like ArtistData, AlbumData, TrackData, and ProfileData.
- **Bootstrap 5** — CSS framework used for responsive layout (grid system), styled buttons, tables, carousels, and progress bars (used in the thermometer component).
- **chroma-js** — A color library used in the Popularity/Thermometer component to blend colors (red to green) on the progress bar based on the popularity percentage.
- **RxJS (firstValueFrom)** — Used in the Spotify service to convert Angular's HttpClient Observable responses into Promises for cleaner async handling.

### Backend
- **Node.js** — The JavaScript runtime environment used to run the Express web server.
- **Express.js** — The backend web framework that defines API routes, handles OAuth authentication with Spotify, and proxies API requests from the Angular frontend to the Spotify Web API.
- **node-fetch** — A package that brings the browser's `fetch()` API to Node.js, used by the Express server to make HTTP requests to Spotify's API.

### External API
- **Spotify Web API** — The core data source for the application. The backend communicates with Spotify's REST API to retrieve user profile information, search results, artist details, top tracks, albums, and individual track data.

---

## Project Structure

```
a3-spotify/
├── client/                        # Angular frontend
│   └── src/app/
│       ├── components/
│       │   ├── about/             # Displays logged-in user profile info
│       │   ├── search/            # Search bar, dropdown, and results display
│       │   ├── carousel/          # Bootstrap carousel for artists/albums
│       │   ├── carousel-card/     # Individual card within the carousel
│       │   ├── track-list/        # Table of tracks with links
│       │   └── thermometer/       # Popularity progress bar
│       ├── pages/
│       │   ├── home-page/         # Home page combining about + search
│       │   ├── artist-page/       # Artist detail page
│       │   ├── album-page/        # Album detail page
│       │   └── track-page/        # Track detail page
│       ├── data/
│       │   ├── resource-data.ts   # Abstract base class for all resources
│       │   ├── artist-data.ts     # Artist model
│       │   ├── album-data.ts      # Album model
│       │   ├── track-data.ts      # Track model
│       │   ├── profile-data.ts    # User profile model
│       │   └── popularity.ts      # Popularity model with color/percent helpers
│       └── services/
│           └── spotify.service.ts # Angular service handling all API communication
│
├── dummy_webserver/               # Pre-configured dummy Express server (no login needed)
│   └── routes/index.js            # Defines all API endpoints
│
└── readme.txt                     # This file
```

---

## Running the Application

### Prerequisites
- Node.js (v10 or higher)
- Angular CLI: `npm install -g @angular/cli`

### Step 1: Install Dependencies
Since `node_modules` folders are not included in this repository, you will need to install dependencies for both the backend and frontend before running anything for the first time.

**Install backend dependencies:**
```bash
cd dummy_webserver
npm install
```

**Install frontend dependencies:**
```bash
cd client
npm install
```

You only need to run `npm install` once per machine. After that, you can skip straight to starting the servers.

### Step 2: Start the Backend
Open a terminal and run:
```bash
cd dummy_webserver
npm start
# Server runs at http://127.0.0.1:8888
```
Leave this terminal running in the background.

### Step 3: Start the Frontend
Open a second terminal and run:
```bash
cd client
ng serve
# App runs at http://localhost:4200
```

### Step 4: Open the App
Open `http://localhost:4200` in your browser. No login is required when using the dummy webserver — just click "Load info about me" on the home page to get started.

> **Note:** Both the backend (`npm start`) and frontend (`ng serve`) terminals must be running simultaneously for the app to work.
