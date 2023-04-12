import './App.css';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Avatar } from './components/Avatar/Avatar';
import { Contacts } from './components/Contacts/Contacts';
import { Menu } from "./components/Menu/Menu";
import { Portfolio } from './components/Portfolio/Portfolio';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <>
      <Menu />
      <Avatar />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contacts />
    </>
  );
}

export default App;
