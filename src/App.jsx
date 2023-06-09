import React from "react";

//import components
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import SingleMovie from "./pages/SingleMovie";
import Error from "./pages/Error";
import Search from "./pages/Search";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// react router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="/movie/:id" element={<SingleMovie />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="bg-cBlue min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
