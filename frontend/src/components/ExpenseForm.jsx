import { useState, useEffect } from "react";
import api from "../services/api";

const ExpenseForm = ({ fetchExpenses, editExpense, setEditExpense }) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  useEffect(() => {
    if (editExpense) {
      setForm({
        title: editExpense.title,
        amount: editExpense.amount,
        category: editExpense.category,
        date: editExpense.date.slice(0, 10),
      });
    }
  }, [editExpense]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editExpense) {
      await api.put(`/expenses/${editExpense._id}`, form);
    } else {
      await api.post("/expenses", form);
    }
    fetchExpenses();
    setForm({ title: "", amount: "", category: "", date: "" });
    setEditExpense(null);
  };

  const handleCancelEdit = () => {
    setForm({ title: "", amount: "", category: "", date: "" });
    setEditExpense(null);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto px-5 py-5 border rounded-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {["title", "amount", "category", "date"].map((field, idx) => (
          <div className="flex flex-col" key={idx}>
            <label className="capitalize mb-1 text-gray-300">{field}</label>
            <input
              name={field}
              type={
                field === "amount" ? "number" : field === "date" ? "date" : "text"
              }
              className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form[field]}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-6 justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          {editExpense ? "Update Expense" : "Add Expense"}
        </button>
        {editExpense && (
          <button
            type="button"
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ExpenseForm;
