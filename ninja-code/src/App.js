
import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import SideBar from './components/';

function App() {
  return (
    <Router>
      <SideBar />
      <Navbar />
    </Router>
  );
}

export default App;
