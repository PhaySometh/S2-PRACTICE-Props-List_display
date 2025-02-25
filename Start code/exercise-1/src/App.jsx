import React from "react";

export const userData = {
  firstName: "Hak", // i have changed the first name to my first name
  lastName: "Kimju", // i have changed the last name to my last name
  title: "fullstack developer pro max", // i have changed the title to my title
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      {/* query the data from userData */}
      <h2>{userData.firstName} {userData.lastName}</h2> 
      <p>{userData.title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>WELCOME !!</h1>
      <p>PNV students are you ready to React Course ? You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
