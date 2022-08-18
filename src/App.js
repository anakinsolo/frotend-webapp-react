import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/orders">Orders</NavLink></li>
        <li><NavLink to="/iphone">Iphone Orders</NavLink></li>
        <li><NavLink to="/new">Create New Order</NavLink></li>
      </ul>
    </div>
  );
}

export default App;
