import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/nav/Nav";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";

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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
