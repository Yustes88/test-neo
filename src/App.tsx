import { Route, Routes } from "react-router";
import "./App.css";
import Nav from "./components/nav/Nav";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import CartProvider from "./providers/CartProvider";
import Layout from "./components/layout.tsx/Layout";
import ProductsList from "./components/products-list/ProductsList";
import { headphones, wirelessHeadphones } from "./data/data";
import CartList from "./components/cart-list/CartList";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav />
          <Routes>
            <Route
              element={
                <Layout>
                  {
                    <>
                      <ProductsList title={"Наушники"} products={headphones} />
                      <ProductsList
                        title={"Беспроводные наушники"}
                        products={wirelessHeadphones}
                      />
                    </>
                  }
                </Layout>
              }
              path="/"
              // loader={}
              // action={}
              // errorElement={}
            />
            <Route
              element={
                <Layout>
                  {
                    <>
                      <CartList />
                    </>
                  }
                </Layout>
              }
              path="/cart"
              // loader={}
              // action={}
              // errorElement={}
            />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
