import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App'
import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h2>User Dashboard</h2>
        <img src="https://via.placeholder.com/150" alt="placeholder image" />
        <ul>
          <li>Email</li>
          <li>Name</li>
        </ul>
        <button>Button 1</button>
        <button>Button 2</button>
        <button>Button 3</button>
        <button>Button 100</button>
      </div>
    );
  }
}

root.render(<Counter />);