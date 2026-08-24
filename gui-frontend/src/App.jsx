import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SubTitttles from "./pages/SubTitttles";
import Notes from "./pages/Notes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/subTittle" element={<SubTitttles />} />
          <Route path="/notes" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;