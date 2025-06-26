
# Expense Tracker MERN

A full-stack expense tracker application that allows users to manage and visualize their expenses effectively. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), this app enables CRUD operations on expense records and visualizes spending patterns through interactive charts.

![My Screenshot](https://private-user-images.githubusercontent.com/120164449/459372862-6877cb4a-a84f-4979-9a07-a7a452e550fe.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MzUxMjgsIm5iZiI6MTc1MDkzNDgyOCwicGF0aCI6Ii8xMjAxNjQ0NDkvNDU5MzcyODYyLTY4NzdjYjRhLWE4NGYtNDk3OS05YTA3LWE3YTQ1MmU1NTBmZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNlQxMDQ3MDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MzcxYmE1YjY4ZmI0YmZhYzA2NzlhYTJhMjlkYWRlYmE0OGNlNWNhYTRkZTg3ZmQ4YTEwZjI0YWU1M2E0ZTc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hnT-lwEllTY0QmiiT39MROlix7_qtK3eWxSGzWNGi98)
---

## Features

- User authentication for individual user expense tracking
- Add new expenses with amount, category, description, and date
- Edit or delete existing expenses
- Display a list of all recorded expenses
- Dashboard with:
  - Pie chart of category-wise expenses
  - Bar chart of monthly expenses
- Fully responsive and user-friendly interface

![My Screenshot](https://drive.google.com/file/d/1VDu2_HeN3PloHafPvz1RslH0CPbVSPbo/view?usp=drive_link)
---


## 🛠️ Tech Stack

| Layer     | Technology              |
|-----------|--------------------------|
| Frontend  | React, Tailwind          |
| Backend   | Node.js, Express.js      |
| Database  | MongoDB (via Mongoose)   |
| Charts    | Recharts                 |
| Auth (opt)| JWT, bcrypt, OAuth2      |

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

## Setup Instructions

### Prerequisites

- Node.js
- MongoDB 
- Git

---

### 📦 Backend Setup

```bash
cd backend
npm install
npm run dev
```

Runs backend server at: `http://localhost:30001`

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

> Base URL: `http://localhost:3001`

---

## 📈 Dashboard Visuals

- Pie Chart: Distribution of expenses by category
  ![My Screenshot](https://private-user-images.githubusercontent.com/120164449/459372859-9826833e-69ad-41ae-b29d-a1a698588131.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MzU1MzYsIm5iZiI6MTc1MDkzNTIzNiwicGF0aCI6Ii8xMjAxNjQ0NDkvNDU5MzcyODU5LTk4MjY4MzNlLTY5YWQtNDFhZS1iMjlkLWExYTY5ODU4ODEzMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNlQxMDUzNTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hYjhkYmVlODc1NWIzZjg2NzFjOGEzYTY2YzMwN2VhOTI3Y2ZjMzM4Mjk4OTNiOWFlNDBiMDBjOTk5ODU0ZjNjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hiQsFiHIfd7p97z_Nc0PiWs_sxNdfTIfmEGEqbXKknk)
  
- Bar Chart: Monthly expense summary
  ![My Screenshot](https://private-user-images.githubusercontent.com/120164449/459372857-71084945-b202-4305-882c-3c2283e27375.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MzU1MzYsIm5iZiI6MTc1MDkzNTIzNiwicGF0aCI6Ii8xMjAxNjQ0NDkvNDU5MzcyODU3LTcxMDg0OTQ1LWIyMDItNDMwNS04ODJjLTNjMjI4M2UyNzM3NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNlQxMDUzNTZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMGFmZTBkMjE4ZmFmOTBiZmUyZWE0YTNjMTA3ZTcxMDIwMDI3ZTQ4ODIwMzA0NjViMmFlNDM1ODQ3ZTgxODc3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.8ltbd1S3ArN_TwelkUvjYPR4nJ9fTIaqXeg1hozLRYE)
- Line Chart: Daily expense summary
  ![MyScreenshot](https://private-user-images.githubusercontent.com/120164449/459372855-b2b0c659-988c-475b-9006-d3bb726742bb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MzU4NzgsIm5iZiI6MTc1MDkzNTU3OCwicGF0aCI6Ii8xMjAxNjQ0NDkvNDU5MzcyODU1LWIyYjBjNjU5LTk4OGMtNDc1Yi05MDA2LWQzYmI3MjY3NDJiYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNlQxMDU5MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZTAwYmI3MTVhOGFjYTJlYWY0YTAxMjU0ZGQ3NGNlYWM5NjI2NzNiMjI1Y2M3MjBkMDM1Mjg2ODM4YzY0N2FmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0VBLl0npq9n0VkMoq4tHKqi9BxL9Q8nelVOnfjoFrkw)
- Line Chart: Total Spend Over Time
  ![MyScreenshot](https://private-user-images.githubusercontent.com/120164449/459372856-68c2fe6a-c1d7-4bf6-b11f-5b2d9a540895.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MzU4NzgsIm5iZiI6MTc1MDkzNTU3OCwicGF0aCI6Ii8xMjAxNjQ0NDkvNDU5MzcyODU2LTY4YzJmZTZhLWMxZDctNGJmNi1iMTFmLTViMmQ5YTU0MDg5NS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNlQxMDU5MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jMGYxM2NkMzQ0NTMxMzA2Mzk3ZjkyODU0NmUyNTY2YmM2YTI0OTM0YWJhZGQ1MTk3NTAzNTVhZWUyZWI3NzMwJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ygrx-3S6Zbe6n-hXofItcS9sYWEdneTHRMBr12mdecY)
- Bar Chart: Top 5 highest expense
  ![MyScreenshot](https://private-user-images.githubusercontent.com/120164449/459372861-bb56ad94-3068-4daa-800b-8aa82584a820.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTA5MzU4NzgsIm5iZiI6MTc1MDkzNTU3OCwicGF0aCI6Ii8xMjAxNjQ0NDkvNDU5MzcyODYxLWJiNTZhZDk0LTMwNjgtNGRhYS04MDBiLThhYTgyNTg0YTgyMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDYyNlQxMDU5MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNjM1ZTgwYjgyMmY0MjZiNDhiNDA2ZjJhNWNjMzAxYjU0ZjAxN2ExYzY2YTkxNDdmYjg4YWUzMjcwNzg4YTNmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.0CeyQ_rrAWUdfQJCFHTKNOOu_zMJ6dsmJOw-pR8ko_E)
  

> Charts built using `Recharts`.

---
