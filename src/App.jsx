import { useState } from "react";
import AppBody from "./Components/AppBody";
import Sidebar from "./Components/Sidebar";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <div>
      <Sidebar show={showSidebar} handleClose={() => setShowSidebar(false)} />
      <AppBody open={showSidebar} />
    </div>
  )
}

export default App
