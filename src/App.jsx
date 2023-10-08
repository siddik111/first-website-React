import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Services from "./component/Services";


const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Home" element={<h2>this is home page</h2>}/>
        <Route path="/About" element={<h2>this is about page</h2>}/>
        <Route path="/Service" element={<Services></Services>}/>
      </Routes>
    </div>
  );
};

export default App;