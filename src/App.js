import React, { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Products from "./Components/Products";
import Footer from "./Components/Footer";
import DetailPage from "./Components/DetailPage";
import NotFound from "./Components/NotFound";
import AboutUs from "./Components/AboutUs";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <Routes>
          <Route path="/products" element={<Products />} />
          <Route path="/products/us" element={<AboutUs />} />
          <Route path="/products/:id" element={<DetailPage />} />
          <Route path="/" element={<Landing />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/*" element={<Navigate to="/notfound" />} /> 
        </Routes>

        <Footer />
      </div>
    );
  }
}
export default App;
