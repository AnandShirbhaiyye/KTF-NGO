import './App.css';
import Navbar from './components/Navbar/Navbar';
import Register from './views/Register/Register';

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Register/>
      </div>
    </div>
  );
}

export default App;
