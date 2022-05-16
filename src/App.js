import Nav from './components/Nav';
// import '../src/App.css';
import Home from './components/Home';
import Details from './components/Details';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {
    return (
<BrowserRouter>
        <div className="App">
          <Nav />
          <div className='back'>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/details" element={<Details />}/>
          </Routes>
          </div>
        </div>
      </BrowserRouter>

    );
  }

export default App;