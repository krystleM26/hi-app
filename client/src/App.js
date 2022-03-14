
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import '../src/components/Login'

function App() {
  return (
    <div className="App">
      <h2>Welcome To The Healing Intentions App</h2>
   
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} /> 
      </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
