
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Show from './Components/Show';
import Navbar from "./Components/Navbar";
import AddTocard from "./Components/AddTocard";
import Buy from "./Components/Buy";

function App() {
 
  return (
    <>
    <div>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Show/>} />
        <Route path="/AddToCard" element={<AddTocard/>} />
        <Route exact path="/Buy/:take" element={<Buy/>}></Route>
      </Routes>

     </Router>
    </div>
    </>
  )
}


export default App
