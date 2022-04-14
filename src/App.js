import React from "react";
import CategoriesSection from "./components/Categories/categoriesSection";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Subscription from "./components/subscription";
import Vacancies from "./components/vacancies";

function App() {
  return (
    <>
      <Header />
      <React.StrictMode>
        <CategoriesSection />
        <Vacancies />
        <Subscription />
        <Footer />
      </React.StrictMode>
    </>
  );
}

export default App;
