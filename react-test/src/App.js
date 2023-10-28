import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './Pages/User/User';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<User/>}></Route>
      </Routes>
      </BrowserRouter>

  );
}

export default App;
