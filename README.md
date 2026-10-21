# TapTrix API

A small Express and MongoDB server that will back the TapTrix apps.

**Status:** Stub. The only source file is a 26-line server with a placeholder route and a catch-all 404. There are no models, routes or auth yet.

## The problem

The TapTrix apps (card profile, admin portal and mobile app) need a backend that stores their data in MongoDB. This repo is the start of that API. The code shows only the server setup and the database connection.

## What it does

- Starts an Express server on `PORT`, defaulting to 9000.
- Parses JSON request bodies and allows cross-origin requests from any origin.
- Answers `GET /` with `hello world`. Every other GET returns `404 not found`.
- Connects to MongoDB with Mongoose, reading the connection string from `MONGODB_URL`.

## How it's built

- Node.js with CommonJS modules.
- Express 4, Mongoose 6 and `cors`.
- A single file, `src/index.js`. There are no separate routing, controller or model layers yet.

## Running it locally

```bash
pnpm install   # or: npm install
npm start      # runs: node src/index.js
npm run dev    # runs: nodemon src/index.js
```

The server needs a `MONGODB_URL` environment variable. The repo has no `.env.example`.

## What's left

- No Mongoose models, routes, or authentication.
- The database connection is not awaited and has no error handler, so the server starts listening even if the connection fails.
- CORS is open to every origin.
- There are no tests and no `.env.example`.
- The original README contained only the project name.
