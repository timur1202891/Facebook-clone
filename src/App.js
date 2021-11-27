import React from "react";
import "./App.css";
import Feed from "./Feed";
import Header from "./Header";
import Widgets from "./Widgets";
import Sidebar from "./Sidebar";
import Login from "./Login";

function App() {
  // const user = "timur";
  const user = null;
  return (
    <div className="app">
      {user ? ( //
        <Login />
      ) : (
        <>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
