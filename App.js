
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Content from './componets/Content';
import About from './componets/About';
import Home from './componets/Home';
import User from './componets/User';
function App() {
  return (
    <div className="App">
      <h1>kamran khan</h1>
        <BrowserRouter>
           <Routes>
               <Route path="/" elemnt={<About/>} ></Route>
               <Route path="/" elemnt={<Content/>}></Route>
               <Route path="/" elemnt={<Home/>}></Route>
               <Route path="/" elemnt={<User/>}></Route>
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
