import React from "react";
import SideBar from "../SideBar/SideBar";
import { Route, Switch } from "react-router-dom";

const Entry = ({ entryId }) => <h3>{`This is Entry ${entryId}`} </h3>;
const AdminEntry = ({ entryId }) => (
  <h3>{`This is Admin Entry ${entryId}`} </h3>
);

const MainApp = ({ adminMode }) => {
  return (
    <div className="layout-container" style={{ padding: '2em'}}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div className="sidebar">
          <SideBar adminMode={adminMode} />
        </div>
        <div className="content">
          <Switch>
            {[1, 2, 3, 4, 5].map((item) => (
              <Route key={item} path={`/entry_${item}`}>
                <Entry entryId={item} />
              </Route>
            ))}
            {[1, 2, 3].map((item) => (
              <Route key={item} path={`/admin_entry_${item}`}>
                <AdminEntry entryId={item} />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default MainApp;
