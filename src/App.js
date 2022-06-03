import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbatar";
import "./App.css";
import Home from "./components/pages/home/Home";


function App() {
  return (
    <>
     <Topbar />
    <div className="container">
        <Sidebar />
        
          
            <Home />
        
      </div>
    </>
     
   
  );
}

export default App;