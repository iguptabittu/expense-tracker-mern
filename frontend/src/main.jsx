import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ReactDOM from 'react-dom/client';
import './index.css';
const isLoggedIn = () => !!localStorage.getItem('token');

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={isLoggedIn() ? <App /> : <Navigate to="/signin" />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
);
