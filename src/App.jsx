import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import routes from "./routes";
import { ShowNavProvider } from "./context/ShowNavContext";

function App() {
  // const [activeNav, setActiveNav] = useState(false);
  // const [navbarHidden, setNavbarHidden] = useState(false);

  // const handleToggleNav = () => {
  //   setActiveNav(!activeNav);
  // };

  // const toggleHidden = () => {
  //   setNavbarHidden(!navbarHidden);
  // };

  return (
    <div className="wrapper">
      <ShowNavProvider>
        <Routes>
          <Route>
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return (
                <Route
                  key={index}
                  path={path}
                  element={
                    <Component
                    // toggleHidden={toggleHidden}
                    // navbarHidden={navbarHidden}
                    // handleToggleNav={handleToggleNav}
                    // activeNav={activeNav}
                    // setActiveNav={setActiveNav}
                    />
                  }
                />
              );
            })}
          </Route>
        </Routes>
      </ShowNavProvider>
    </div>
  );
}

export default App;