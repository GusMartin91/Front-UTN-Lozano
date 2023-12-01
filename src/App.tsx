import { useState } from "react";
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [selectedNavCategory, setSelectedNavCategory] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filterSource, setFilterSource] = useState<string>("");

  const handleCategoryChange = (category: string) => {
    setFilterSource("Navbar");
    setSelectedNavCategory(category);
    setSelectedCategory("");
  };

  return (
    <>
      <ToastContainer />
      <Router>
        <NavBar onCategoryChange={handleCategoryChange} />
        <AppRoutes
          selectedNavCategory={selectedNavCategory}
          setSelectedNavCategory={setSelectedNavCategory}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          filterSource={filterSource}
          setFilterSource={setFilterSource}
        />
        <Footer />
      </Router>
    </>
  );
};

export default App;
