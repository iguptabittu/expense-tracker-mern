
# 💸 Expense Tracker MERN

A full-stack expense tracker application that allows users to manage and visualize their expenses effectively. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), this app enables CRUD operations on expense records and visualizes spending patterns through interactive charts.

![My Screenshot](https://private-user-images.githubusercontent.com/120164449/459372862-6877cb4a-a84f-4979-9a07-a7a452e550fe.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MzUxMjgsIm5iZiI6MTc1MDkzNDgyOCwicGF0aCI6Ii8xMjAxNjQ0NDkvNDU5MzcyODYyLTY4NzdjYjRhLWE4NGYtNDk3OS05YTA3LWE3YTQ1MmU1NTBmZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNlQxMDQ3MDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MzcxYmE1YjY4ZmI0YmZhYzA2NzlhYTJhMjlkYWRlYmE0OGNlNWNhYTRkZTg3ZmQ4YTEwZjI0YWU1M2E0ZTc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hnT-lwEllTY0QmiiT39MROlix7_qtK3eWxSGzWNGi98)
---

## 📌 Features

- 🔐 (Optional) User authentication for individual user expense tracking
- ➕ Add new expenses with amount, category, description, and date
- 📝 Edit or delete existing expenses
- 📋 Display a list of all recorded expenses
- 📊 Dashboard with:
  - Pie chart of category-wise expenses
  - Bar chart of monthly expenses
- 🖥️ Fully responsive and user-friendly interface

![My Screenshot](https://private-user-images.githubusercontent.com/120164449/459372858-27b8c697-de47-4a7b-8919-c31d61f36d58.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MzUxMjgsIm5iZiI6MTc1MDkzNDgyOCwicGF0aCI6Ii8xMjAxNjQ0NDkvNDU5MzcyODU4LTI3YjhjNjk3LWRlNDctNGE3Yi04OTE5LWMzMWQ2MWYzNmQ1OC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNlQxMDQ3MDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mNzM3YWNiYjdiOWFiMzVhZjRlY2I5MDI5MGEyMGM2MjZmOGVlNWFiOGZjNTcwMTc3YWI2OGE1YzIxM2EyMWZlJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.9GucANe12YIUXtLcnR4wTrRoI_sBfvr_aJO0x8Uel2U)
---


## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|--------------------------|
| Frontend  | React, Tailwind CSS (or CSS Modules) |
| Backend   | Node.js, Express.js      |
| Database  | MongoDB (via Mongoose)   |
| Charts    | Chart.js / Recharts      |
| Auth (opt)| JWT, bcrypt, OAuth2 (if implemented) |

---

## 📂 Folder Structure

```
expense-tracker-mern/
│
├── backend/           # Express backend API
│   ├── models/        # Mongoose schemas
│   ├── routes/        # Expense routes
│   ├── controllers/   # Logic for API endpoints
│   └── server.js      # Entry point
│
├── frontend/          # React frontend app
│   ├── components/    # Reusable components
│   ├── pages/         # Page views (Dashboard, List)
│   ├── App.js         # App root
│   └── index.js       # React entry point
│
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Setup Instructions

### 🔧 Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Git

---

### 📦 Backend Setup

```bash
cd backend
npm install
# Create a .env file with Mongo URI and any secret keys
npm run dev
```

Runs backend server at: `http://localhost:5000`

---

### 💻 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Runs frontend app at: `http://localhost:5173`

---

## 🔌 API Endpoints

| Method | Endpoint            | Description              |
|--------|---------------------|--------------------------|
| POST   | `/expenses`         | Add a new expense        |
| GET    | `/expenses`         | Get all expenses         |
| PUT    | `/expenses/:id`     | Update an expense        |
| DELETE | `/expenses/:id`     | Delete an expense        |

> Base URL: `http://localhost:5000`

---

## 📈 Dashboard Visuals

- 🟣 Pie Chart: Distribution of expenses by category
- 🔵 Bar Chart: Monthly expense summary

> Charts built using `Chart.js` or `Recharts`.

---

## 🙌 Contributing

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a Pull Request

---

## 📄 License

MIT License © 2025 [Bittu Gupta](https://github.com/iguptabittu)

---

## 📬 Contact

- GitHub: [@iguptabittu](https://github.com/iguptabittu)
- Email: yourname@example.com *(replace with actual)*
