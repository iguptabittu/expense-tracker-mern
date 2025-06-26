// frontend/src/App.jsx
import { useEffect, useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import Dashboard from "./components/Dashboard";
import api from "./services/api";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editExpense, setEditExpense] = useState(null); // 👈 NEW
  const itemsPerPage = 10;

  const fetchExpenses = async () => {
    const res = await api.get("/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentExpenses = expenses.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(expenses.length / itemsPerPage);

  return (
    <div className="min-h-screen bg-gray-950 text-white px-4 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center">
  <h1 className="text-4xl font-bold text-white mb-8 typing-text">
    💰 Expense Tracker : Best Way  Control your Expenses 💰
  </h1>
</div>

<div className="flex justify-end mb-4">
  <button
    onClick={() => {
      localStorage.removeItem("token");
      window.location.href = "/signin";
    }}
    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
  >
    Logout
  </button>
</div>
        
        <ExpenseForm
          fetchExpenses={fetchExpenses}
          editExpense={editExpense}
          setEditExpense={setEditExpense}
        />

        <div className="my-8">
          <ExpenseList
            expenses={currentExpenses}
            fetchExpenses={fetchExpenses}
            setEditExpense={setEditExpense}
          />
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center mt-6 gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`px-3 py-1 rounded text-sm ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-700 text-gray-300"
                  }`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        <Dashboard expenses={expenses} />
        <footer className="text-center text-sm text-gray-400 mt-10 pb-4">
          Designed with 💙 by{" "}
          <span className="text-blue-400 font-semibold">Bittu Gupta</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
