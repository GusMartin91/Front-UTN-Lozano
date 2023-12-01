import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DetalleTarea from "../components/DetalleTarea/DetalleTarea";

interface AppRoutesProps {
  selectedNavCategory: string;
  setSelectedNavCategory: (category: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filterSource: string;
  setFilterSource: (category: string) => void;
}

const AppRoutes: React.FC<AppRoutesProps> = ({
  selectedNavCategory,
  setSelectedNavCategory,
  selectedCategory,
  setSelectedCategory,
  filterSource,
  setFilterSource,
}) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <LandingPage
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            filterSource={filterSource}
            setFilterSource={setFilterSource}
            selectedNavCategory={selectedNavCategory}
            setSelectedNavCategory={setSelectedNavCategory}
          />
        }
      />
      <Route path="/detalle/:taskId" element={<DetalleTarea />} />
    </Routes>
  );
};

export default AppRoutes;
