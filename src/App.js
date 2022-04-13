import React from "react";
import CategoriesSection from "./components/categoriesSection";
import Footer from "./components/footer";
import Header from "./components/header";
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
