import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (
    <Router>
    <div className="app">
     <Navbar/>
     <Header/>
     <Footer/>
    </div>
    </Router>
  );
}

export default App;
