import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<HomePage />} />
        {/* <Route path="about" element={<About />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
