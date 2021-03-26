import React from "react";
import { AppMode, AdminMode } from './SideBarItems'




function SideBar({ adminMode }) {
  return (
    <nav className="sidebar">
      {/* Display 2 Nav Type based on selected Mode */}
      {adminMode === true ? <AdminMode /> : <AppMode />}
    </nav>
  );
}

export default SideBar;
