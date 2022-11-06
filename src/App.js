import React, { useState } from 'react';
import { Header } from "./partials/Header";
import { Input } from "./partials/Input";
import { List } from "./partials/List";
import { Status } from "./partials/Status";
import "./styles/app.css";

function App() {
  const [isLight, setIsLight] = useState(true);


  return (
    <div className="App">
      <div className={isLight ? "container" : "container dark"} >
        <div className="content">
          <Header isLight={isLight} setIsLight={setIsLight} />
          <Input isLight={isLight} setIsLight={setIsLight} />
          <List isLight={isLight} setIsLight={setIsLight} />
          <Status isLight={isLight} setIsLight={setIsLight} />
          <p className={isLight ? "notation" : "notation dark"}>Drag and drop to reorder list</p>
        </div>
      </div>
    </div>
  );
}

export default App;
