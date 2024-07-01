import React from "react";
import { AppRoutes } from "./routes";
import { ShowNavProvider } from "./context/ShowNavContext";

function App() {
  return (
    <div className="wrapper">
      <ShowNavProvider>
        {/* <Routes>
          <Route>
            {routes.map((routes, index) => {
              const { path, component: Component } = routes;
              return <Route key={index} path={path} element={<Component />} />;
            })}
          </Route>
        </Routes> */}
        <AppRoutes />
      </ShowNavProvider>
    </div>
  );
}

export default App;
