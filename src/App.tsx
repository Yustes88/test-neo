import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/nav/Nav";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/content/Content";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            element={<Content />}
            path="/"
            // loader={}
            // action={}
            // errorElement={}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
