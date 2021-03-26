import React from "react";
import Button from "../Button";
import './sidebar.css'

export const AppMode = () => {
  return (
    <div className="sidebar-items">
      {[1, 2, 3, 4, 5].map((item) => (
        <Button to={`entry_${item}`} name={`Entry${item}`} />
      ))}
    </div>
  );
};

export const AdminMode = () => {
  return (
    <div className="sidebar-items admin-mode">
      {[1, 2, 3].map((item) => (
        <Button to={`admin_entry_${item}`} name={`AdminEntry${item}`} />
      ))}
    </div>
  );
};
