import { NavLink, Routes, Route } from 'react-router-dom';
import Iphones from './pages/Iphones';
import Reports from './pages/Reports';
import OrderForm from './pages/OrderForm.js';
import Statistics from './pages/Statistics';

const App = () => {
  return (
    <div className="App">
      <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/iphones">Iphone Orders</NavLink>
        <NavLink to="/reports">Invoices</NavLink>
        <NavLink to="/create">Create New Order</NavLink>
      </div>
      <Routes>
        <Route path="/orders" element={<Statistics />} />
        <Route path="/iphones" element={<Iphones />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/create" element={<OrderForm />} />
      </Routes>

    </div>
  );
};

export default App;
