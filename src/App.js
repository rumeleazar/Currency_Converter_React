import './App.css';
import React, {useState} from "react";
import Navigation from "./components/navbar";
import Maincard from "./components/mainCard";

function App() {
  const [showModal, setShow] = useState(false);
  const openModal = () => {
    setTimeout( () => setShow(true), 500);
    
  };
  

  const closeModal = () => setShow(false);

  return (
    <div className="App">
        <Navigation/>
        <Maincard openModal = {openModal} showModal = {showModal} closeModal ={closeModal} />
    </div>
  );
}

export default App;
