import "./App.css";
import React, { useState } from "react";

function App() {
  const [users, setUsers] = useState();
  const getUsers = async () => {
    const response = await fetch("https://reqres.in/api/users?");
    const data = await response.json();
    setUsers(data.data);
  };

  return (
      <>
      <header className="header">
      <div className="buton" onClick={getUsers}>
          GET USERS DETAILS</div>
        <h1>LetsGrowMore</h1>
        
      </header><br></br>
      
      <div className="row">
        {users?.map((current, index) => {
          return (
            <div className="card column" key={index}>
              <img src={current.avatar} className="card-image" alt="..." />
              <div className="card-body">
                <h3 className="card-name">
                  {current.first_name} {current.last_name}
                </h3>
                <h4 className="card-txt">{current.email}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default App;