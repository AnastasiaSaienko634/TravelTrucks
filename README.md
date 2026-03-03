# TravelTrucks - Frontend Web Application

## Project Description
TravelTrucks is a web application for renting campers. Users can browse available vehicles, filter them based on various criteria, add them to a favorites list, view detailed information about each camper, read reviews, and book campers online.

---

## Main Features
- **Home Page** with a banner and call-to-action button.
- **Catalog Page** displaying all available campers.
- **Filtering** of vehicles by location, vehicle type, availability of AC, kitchen, and other features (filtering is performed on the backend).
- **Favorites**: users can add campers to a favorites list, which persists on page reload.
- **Pagination** and a "Load More" button to load additional camper cards.
- **Camper Detail Page** with full description, image gallery, user reviews, and booking form.
- Notifications for successful booking or clearing filters.
- Clean, component-based code using **Next.js**, **TypeScript**, and **Zustand** for state management.
- Desktop version design (responsive optional).

---

## Technologies Used
- [Next.js](https://nextjs.org/) (App Router, TypeScript)
- [Zustand](https://zustand-demo.pmnd.rs/) for global state management
- [Axios](https://axios-http.com/) for API requests
- CSS Modules for styling
- [React Hot Toast](https://react-hot-toast.com/) for notifications
- [MockAPI](https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers) as backend for camper data

---

## Routing
- `/` — Home Page
- `/catalog` — Catalog Page showing all campers
- `/catalog/:id` — Camper Detail Page with full information

---

## Installation & Running

1. Clone the repository:
```bash
git clone <REPOSITORY_URL>
```
---

Author
- Name: Anastasia Saienko
- Email: anastasiasaienko634@gmail.com
- GitHub: AnastasiaSaienko634

