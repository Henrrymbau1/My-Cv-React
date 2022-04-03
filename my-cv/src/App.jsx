import React, { useContext } from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { ThemeContext } from './components/context';
import ExpEdu from './components/ExpEdu/ExpEdu';
import Intro from './components/intro/Intro';
import Toggle from './components/toggle/Toggle';


function App() {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white", }}>
        <Toggle/>
        <Intro/>
        <About/>
        <ExpEdu/>
        <Contact/>
    </div>
  );
}

export default App;
