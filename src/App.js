import {BrowserRouter as Router,
Routes,
Route,
}
from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/hotels" element={<List/>}/>
      <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
      </Router>
  );
}

export default App;
