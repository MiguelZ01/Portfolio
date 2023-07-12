import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";

function App() {
   return (
      <div className="App">
         <div>
            <NavBar />
         </div>
         <div>
            <Home />
         </div>
      </div>
   );
}

export default App;
