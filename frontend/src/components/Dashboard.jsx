// frontend/src/components/Dashboard.jsx
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = [
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#ff8042",
  "#8dd1e1",
  "#d0ed57",
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-gray-800 text-white p-3 rounded shadow-md border border-gray-600 text-sm">
      <p className="font-semibold">{label}</p>
      <p>{`${payload[0].name} : ₹${payload[0].value}`}</p>
    </div>
  );
};

const Dashboard = ({ expenses }) => {
  // Group by category
  const categoryData = Object.values(
    expenses.reduce((acc, exp) => {
      acc[exp.category] = acc[exp.category] || { name: exp.category, value: 0 };
      acc[exp.category].value += exp.amount;
      return acc;
    }, {})
  );

  // Group by month
  const monthData = Object.values(
    expenses.reduce((acc, exp) => {
      const month = new Date(exp.date).toLocaleString("default", {
        month: "short",
      });
      acc[month] = acc[month] || { month, total: 0 };
      acc[month].total += exp.amount;
      return acc;
    }, {})
  );

  // Expenses by date
  const dateData = Object.values(
    expenses.reduce((acc, exp) => {
      const date = new Date(exp.date).toLocaleDateString();
      acc[date] = acc[date] || { date, amount: 0 };
      acc[date].amount += exp.amount;
      return acc;
    }, {})
  );

  // Cumulative spend over time
  let total = 0;
  const cumulativeData = dateData.map((d) => ({
    date: d.date,
    total: (total += d.amount),
  }));

  // Top 5 highest expenses
  const topExpenses = [...expenses]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 5)
    .map((exp) => ({
      name: exp.title,
      amount: exp.amount,
    }));

  // Average weekly spend
  const days = new Set(expenses.map((e) => new Date(e.date).toDateString()))
    .size;
  const totalSpend = expenses.reduce((acc, e) => acc + e.amount, 0);
  const avgPerWeek = days ? Math.round(totalSpend / (days / 7)) : 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 ">
      {/* Donut Chart */}
      <div className="bg-gray-800 p-4 rounded shadow ">
        <h2 className="text-xl font-semibold mb-4">Donut Chart: By Category</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart className="transition-all duration-300 hover:text-black hover:scale-105 hover:shadow-lg">
            <Pie
              data={categoryData}
              dataKey="value"
              nameKey="name"
              innerRadius={60}
              outerRadius={100}
              fill="#82ca9d"
              label
            >
              {categoryData.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Line Chart */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Line Chart: Daily Expense Trend
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={dateData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="#ff8042"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Bar Chart */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Bar Chart: Monthly Expenses
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={monthData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Cumulative Line Chart */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">
          Line Chart: Total Spend Over Time
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={cumulativeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="total"
              stroke="#ff8042"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Top 5 Expenses */}
      <div className="bg-gray-800 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">Top 5 Highest Expenses</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={topExpenses} layout="vertical">
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={100} />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="amount" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Average Spend Card */}
      <div className="bg-gray-800 p-6 rounded shadow col-span-1 md:col-span-2 text-center">
        <h2 className="text-2xl font-bold mb-2">You spend on average</h2>
        <p className="text-4xl text-green-400">₹{avgPerWeek} / week</p>
      </div>
    </div>
  );
};

export default Dashboard;
