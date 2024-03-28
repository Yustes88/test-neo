import { Route, Routes } from "react-router";

import "./App.css";

import Layout from "./components/layout.tsx/Layout";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";

import CartProvider from "./providers/CartProvider";
import { BrowserRouter } from "react-router-dom";
import { routes } from "./data/data";

function App() {
  const routeComponents = routes.map(({ path, component, id }) => (
    <Route path={path} element={<Layout>{component}</Layout>} key={id} />
  ));
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>{routeComponents}</Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
