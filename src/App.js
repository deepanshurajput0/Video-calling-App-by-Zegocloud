import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './components/home/Home';
import Room from './components/room/Room';
function App() {
  return (
    <div> 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/room/:id' element={<Room/>} /> 
    </Routes>  
     </div>
  );
}

export default App;
