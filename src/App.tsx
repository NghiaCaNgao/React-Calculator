import MainLayout from './layout';
import Home from './views/home';
import History from './views/history';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { ThemeProvider } from './hook/theme_context';

function Wrapper() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransitionStage("fadeOut");
  }, [location, displayLocation]);
  return (
    <div
      className={`${transitionStage} grow`}
      onAnimationEnd={() => {
        if (transitionStage === "fadeOut") {
          setTransitionStage("fadeIn");
          setDisplayLocation(location);
        }
      }}>
      <Routes location={displayLocation}>
        <Route path='/' element={<Home />} />
        <Route path='/:expression_param' element={<Home />} />
        <Route path='/history' element={<History />} />
      </Routes>
    </div>

  )
}

function App() {
  return (
    <ThemeProvider>
      <MainLayout >
        <Router>
          <Wrapper />
        </Router>
      </MainLayout >
    </ThemeProvider>
  );
}

export default App;
