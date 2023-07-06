import logo from './logo.svg';
import {HashRouter as BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Menu/>
     <Routes>
      <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/signin' element={<Signin/>}/>


        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
