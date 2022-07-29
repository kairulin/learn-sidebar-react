import { React, useState } from 'react'
import Backdrop from './components/Backdrop';
import Sidebar from './components/Sidebar';
import ToolBar from "./components/ToolBar";



function App() {

  const [sidebar, setSidebar] = useState(false)

  const togglerBtn = (() => {
    setSidebar(!sidebar)
  })

  return (
    <div className="App">
      {/* togglerBtn <- openSidebar(App.js) <- openSidebar(ToolBar.js) <- onClick */}
      <ToolBar openSidebar={togglerBtn} />
      <Backdrop sidebar={sidebar} closeSidebar={togglerBtn}/>
      <Sidebar sidebar={sidebar}/>
    </div>
  );
}

export default App;
