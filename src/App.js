import Signupcomponent from "./components/Signupcomponent";
import Navcomponent from "./components/Navcomponent";
import Profilecomponent from "./components/Profilecomponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
function App() {
  return (

    <div className="App">
    <BrowserRouter>
      <Navcomponent />
      <Routes>
        <Route path="/" element={<Signupcomponent />} />
        <Route path="/profile" element={<Profilecomponent />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
