
import Nav from "./pages/Nav";
import Notes from "./pages/Notes";
import Shortcuts1 from "./pages/Shortcuts1";
import Shortcuts2 from "./pages/Shortcuts2";
import Shortcuts3 from "./pages/Shortcuts3";
import Shortcuts4 from "./pages/Shortcuts4";
import Sliders from "./pages/Sliders";



function App() {
  return (
    <div className="App">  
   <Nav/>
   <div className="header">
      <Sliders/>
     </div>
     <div className="articles">
       <Shortcuts1/>
       <Shortcuts2/>
       <Shortcuts3/>
       {/* <Shortcuts4/> */}
     </div>
   <Notes/>
    </div>
    
  );
}

export default App;
