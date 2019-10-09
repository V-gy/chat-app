import React from 'react';
import './components/contacts.css';
import Contact from './components/Contact'

const valkyrie = {
  name : "Valkyrie",
  avatar : "http://download.enmasse.com/images/tera/race-class/classpage/class_Highlight_Valkyrie.png",
  status : true
}
const wizard = {
  name : "Wizard",
  avatar : "https://i.pinimg.com/originals/3f/7a/5a/3f7a5a6f8f473e8f93a0c948d7eb27da.png",
  status : false
}

const Elf = {
  name : "Elf",
  avatar : "https://i.imgur.com/SoOHMuK.jpg",
  status : true
}

function App() {
  return (
    <div className="App">
      <Contact user={valkyrie}/>
      <Contact user={wizard}/>
      <Contact user={Elf}/>
    </div>
  );
}

export default App;
