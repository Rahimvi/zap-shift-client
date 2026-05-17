# ⚡ Zap-Shift (Client Side)

Zap-Shift is a modern, responsive, and efficient parcel delivery and logistics management web application. It connects users, delivery riders, and administrators seamlessly to handle parcel bookings, real-time status updates, tracking, and secure payments.

🌐 **Live Website:** [Profast / Zap-Shift Live](https://zap-shift-27c81.web.app/) _(Replace with your actual client live link)_ 🖥️ **Server Repository:** [Zap-Shift Server](https://github.com/Rahimvi/zap-shift-server) _(Replace with your actual server repo link if public)_

---

## 🚀 Features

### 👤 User Dashboard

- **Book a Parcel:** Easily create a parcel delivery request with auto-generated unique tracking IDs.
- **My Parcels:** View, update, or cancel booked parcels based on their current status.
- **Secure Payment:** Integrated Stripe Checkout Session for smooth and automated card payments.
- **Real-Time Tracking:** Track the movement and historical logs of any parcel via tracking IDs.

### 🚴 Rider Dashboard

- **My Deliveries:** View assigned parcels and manage delivery tasks.
- **Status Management:** Toggle work availability status (`Available` / `In Delivery`) and update parcel status (`Rider Arriving`, `Parcel Delivered`).
- **Performance Analytics:** Visual analytics showing completed deliveries per day.

### 👑 Admin Dashboard

- **All Parcels:** Complete overview of all system parcels with the ability to assign specific riders based on districts.
- **User Management:** Search and filter users/riders, and dynamically change user roles (`User`, `Rider`, `Admin`).
- **System Stats:** Advanced data aggregation charts displaying overall delivery statistics.

---

## 🛠️ Technologies Used

- **Frontend Core:** React.js, React Router (v7)
- **Styling & UI:** Tailwind CSS, DaisyUI (Dashboard UI elements)
- **Authentication:** Firebase Authentication (Google & Email/Password)
- **State & Data Fetching:** Axios, TanStack Query (React Query)
- **Payment Gateway:** Stripe Component / Checkout Session
- **Backend Communication:** Express.js, MongoDB (Serverless Architecture on Vercel)

---

## 📦 Prerequisites

Before running this project locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

---

## 🛠️ Installation & Setup

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/Rahimvi/zap-shift-client.git](https://github.com/Rahimvi/zap-shift-client.git)
   cd zap-shift-client
   ```

📐Project Structure

src/
├── assets/ # Static files (images, icons)
├── components/ # Shared/Global components (Navbar, Footer, Logos)
├── hooks/ # Custom React hooks (useAuth, useAxiosSecure)
├── layouts/ # Layout components (MainLayout, DashboardLayout)
├── pages/ # Page views (Home, Login, Register, Dashboards)
├── providers/ # Context Providers (AuthProvider)
├── routes/ # Application routing setup
└── main.jsx # Application entry point
