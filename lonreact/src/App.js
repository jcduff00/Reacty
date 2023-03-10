//import logo from './logo.svg'; <= Superfluous  code
import { Outlet } from 'react-router-dom'

import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Title />
      <Outlet />
      <POPOSList />
      <Footer />
    </div>
  );
}

export default App;
