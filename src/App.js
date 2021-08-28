import './App.css';
import Profile from './sections/Profile/Profile';
import Projects from './sections/Projects/Projects';

import './sections/sections.scss'

function App() {
  return (
    <div className="columns__main">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 md:gap-0">
          <Profile />
          <Projects />
      </div>
    </div>
  );
}

export default App;
