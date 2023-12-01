import { useEffect, useState } from "react";
import { TaskService } from "../services/TaskService";
import CategoriasSelector from "../components/CategoriasSelector/CategoriasSelector";
import CategoriasTareas from "../components/CategoriasTareas/CategoriasTareas";
import { Task } from "../types/Task";
import CarouselHome from "../components/CarouselHome/CarouselHome";

interface LandingPageProps {
  selectedNavCategory: string;
  setSelectedNavCategory: (category: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  filterSource: string;
  setFilterSource: (category: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({
  selectedNavCategory,
  setSelectedNavCategory,
  selectedCategory,
  setSelectedCategory,
  filterSource,
  setFilterSource,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasksData = await TaskService.getAllTasks();
      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  useEffect(() => {
    if (filterSource === "Navbar") {
      setSelectedCategory(selectedNavCategory);
    }
  }, [selectedNavCategory]);

  useEffect(() => {
    if (selectedCategory) {
      const filtered = tasks.filter(
        (task) => task.estado.toUpperCase() === selectedCategory.toUpperCase()
      );
      setFilteredTasks(filtered);
    } else {
      setFilteredTasks(tasks);
    }
  }, [selectedCategory, tasks]);

  const handleCategoryChange = (category: string) => {
    setFilterSource("Selector");
    setSelectedNavCategory("");
    setSelectedCategory(category);
  };

  return (
    <>
      <CarouselHome />
      <CategoriasSelector handleCategoryChange={handleCategoryChange} />
      <CategoriasTareas
        tasks={filteredTasks.length > 0 ? filteredTasks : tasks}
      />
    </>
  );
};

export default LandingPage;
