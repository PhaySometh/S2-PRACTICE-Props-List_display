import React from "react";

export const vinhData = {
  firstName: "Vinh",
  lastName: "Hoang Nhu",
  title: "PN Training Manager",
};

export const myData = {
  firstName: "My",
  lastName: "Ngo",
  title: "PN Trainer",
};

// TODO Edit the User component code to be able to display DIFFERENT users !
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>TODO: FIRST NAME LAST NAME</h2>
      <p>TODO: TITLE</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      <User /> {/* This line needs some changes*/}
      <User /> {/* This line needs some changes*/}
    </div>
  );
}

export default App;
