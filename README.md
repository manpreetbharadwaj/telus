# Cow Catalog App – TELUS Agriculture & Consumer Goods

## Overview
This project is in **React Native CLI** application built as part of the TELUS Agriculture & Consumer Goods take-home assignment.

The app provides a simple and reliable **Cow Catalog** experience where users can:
- Browse a list of cows
- Search and filter cows
- Add new cows locally
- View cow details

The focus of this implementation is **clean architecture, smooth UX, and offline-first behavior**, without using Expo or any backend services.

---

## Tech Stack
- **React Native CLI (0.83.x)**
- **TypeScript**
- **React Navigation (Native Stack)**
- **Context API** for state management
- **AsyncStorage** for offline local persistence

---

## Supported Platforms
- Android
- iOS

---

## Features & Requirements Mapping

### CA-01: Cow List
- Displays a list of cows with:
  - Ear tag number (unique ID)
  - Sex (Male / Female)
  - Pen
  - Status (Active / In Treatment / Deceased)
  - Date of last recorded event
- Clean and readable list items
- Empty state when no cows exist

---

### CA-02: Search & Filters
- Search cows by **ear tag**
- Filter cows by:
  - Status
  - Pen
- Filters remain applied when navigating back from:
  - Add Cow screen
  - Cow Detail screen
- Collapsible filter UI to keep the list clean

---

### CA-03: Add Cow
- Accessible via a visible **“Add Cow”** action from the list screen
- Form fields:
  - Ear tag *(required, unique)*
  - Sex *(required)*
  - Pen *(required)*
  - Status *(required, default: Active)*
  - Weight *(optional, must be positive)*
- Input validation with user feedback
- Keyboard-safe UI (handles small screens)
- On save:
  - Cow is stored locally
  - Immediately added to the list

---

### CA-04: Cow Detail
- Displays:
  - Ear tag
  - Sex
  - Pen
  - Current weight (if available)
  - Daily weight gain (if available)
- Simple timeline of recent events
  *(mocked locally for demo purposes)*

---

## App Flow
1. **Cow List Screen**
   - View cows
   - Search & filter
   - Navigate to details
   - Add new cow

2. **Add Cow Screen**
   - Fill form
   - Validate inputs
   - Save locally
   - Navigate back to list

3. **Cow Detail Screen**
   - View detailed information
   - Read-only timeline

---

## Architecture & Code Organization

