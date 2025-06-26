
# 💸 Expense Tracker MERN

A full-stack expense tracker application that allows users to manage and visualize their expenses effectively. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), this app enables CRUD operations on expense records and visualizes spending patterns through interactive charts.

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
