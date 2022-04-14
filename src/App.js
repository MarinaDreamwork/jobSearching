import React from "react";
import CategoriesSection from "./components/Categories/categoriesSection";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import SubscribtionSection from "./components/Subscribtion/subscribtionSection";
import Vacancies from "./components/Vacancies/vacancies";

function App() {
  return (
    <>
      <Header />
      <React.StrictMode>
        <CategoriesSection />
        <Vacancies />
        <SubscribtionSection />
        <Footer />
      </React.StrictMode>
    </>
  );
}

export default App;
