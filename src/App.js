import React, { useState } from "react";
import MainApp from "./components/MainApp/MainApp";
import NavBar from "./components/NavBar/NavBar";
import { useHistory } from "react-router-dom";

function App() {
  const [adminMode, setAdminMode] = useState(false);
  const history = useHistory();
  const handleSwitchToggle = () => {
    setAdminMode(!adminMode);
    if (!adminMode) {
      history.push("/admin_entry_1");
    } else {
      history.push("/entry_1");
    }

    console.log("switch value", adminMode);
  };

  return (
    <div className="App">
      <NavBar checked={adminMode} onToggleSwitch={handleSwitchToggle} />
      <MainApp adminMode={adminMode} />
    </div>
  );
}

export default App;
