import api from "../services/api";

const ExpenseList = ({ expenses, fetchExpenses, setEditExpense }) => {
  const handleDelete = async (id) => {
    await api.delete(`/expenses/${id}`);
    fetchExpenses();
  };

  return (
    <ul className="space-y-3">
      {expenses.map((exp) => (
        <li
          key={exp._id}
          className="bg-gray-800 p-4 rounded flex justify-between items-center shadow-md transition hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg"
        >
          <div>
            <div className="font-semibold">
              {exp.title} - ₹{exp.amount}
            </div>
            <div className="text-sm text-gray-400">
              {exp.category} | {new Date(exp.date).toLocaleDateString()}
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setEditExpense(exp)}
              className="text-white-400 hover:text-yellow-600 transition bg-blue-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(exp._id)}
              className="text-white-400 hover:text-red-600 transition bg-red-500 text-white px-6 py-2 rounded hover:bg-gray-600"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
