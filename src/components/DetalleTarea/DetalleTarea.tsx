import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TaskService } from "../../services/TaskService";
import { Task } from "../../types/Task";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleTarea = () => {
  const { taskId } = useParams<{ taskId?: string }>();
  const [task, setTask] = useState<Task | null>(null);
  const [estado, setEstado] = useState<string>("");
  const [relatedTasks, setRelatedTasks] = useState<Task[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        if (taskId && !isNaN(parseInt(taskId, 10))) {
          const taskData = await TaskService.getOneTask(parseInt(taskId, 10));
          setTask(taskData);

          const tasksInCategory = await TaskService.getTasksInCategory(
            taskData.estado
          );
          setRelatedTasks(tasksInCategory);
        } else {
          console.error("Identificador de tarea no válido");
        }
      } catch (error) {
        console.error("Error al cargar la tarea:", error);
      }
    };

    fetchTask();
  }, [taskId]);

  const handleUpdateState = async () => {
    if (estado !== "") {
      try {
        const updatedTask = await TaskService.updateStateTask(
          parseInt(taskId!, 10),
          estado
        );
        setTask(updatedTask);
        toast.success("Estado de la tarea actualizado correctamente", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
      } catch (error) {
        toast.error("Error al actualizar el estado de la tarea", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        console.error("Error al actualizar el estado de la tarea:", error);
      }
    } else {
      toast.error("Selecciona un estado válido", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error("Selecciona un estado válido");
    }
  };

  const handleDeleteTask = async () => {
    try {
      if (taskId) {
        await TaskService.deleteTask(parseInt(taskId, 10));
        toast.success("Tarea eliminada correctamente", {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 2000,
        });
        console.log("Tarea eliminada con éxito");
        navigate("/");
      }
    } catch (error) {
      toast.error("Error al eliminar la tarea", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.error("Error al eliminar la tarea:", error);
    }
  };

  return (
    <div className="container mt-5">
      {task && (
        <div
          className="row align-items-center"
          style={{
            backgroundColor: "#ddd",
            border: "2px solid #999",
            paddingTop: "10px",
            paddingBottom: "20px",
          }}
        >
          <div
            className="col-12 col-md-6"
            style={{ height: "500px", overflow: "hidden" }}
          >
            <img
              className="card-img-top mb-5"
              src={task.imagen}
              alt={task.titulo}
              style={{ height: "100%", objectFit: "contain" }}
            />
          </div>
          <div className="col-12 col-md-6">
            <h1 className="display-5 fw-bolder">Titulo: {task.titulo}</h1>
            <h3>Detalles de la tarea con ID: {taskId}</h3>
            <h5>Estado actual: {task.estado}</h5>
            <p className="lead">Tiempo: {task.tiempo}</p>
            <p className="lead">Responsable: {task.responsable}</p>
            <p className="lead" id="producto-descripcion">
              Descripción: {task.descripcion}
            </p>
            <select
              className="form-select mb-3"
              onChange={(e) => setEstado(e.target.value)}
              value={estado}
            >
              <option value="">Seleccionar estado</option>
              <option value="PORHACER">Por hacer</option>
              <option value="ENPRODUCCION">En producción</option>
              <option value="PORTESTEAR">Por testear</option>
              <option value="COMPLETADA">Completada</option>
            </select>

            <button className="btn btn-danger" onClick={handleDeleteTask}>
              Eliminar Tarea
            </button>
            <button
              className="btn btn-primary ms-2"
              onClick={handleUpdateState}
            >
              Actualizar Estado
            </button>
          </div>
        </div>
      )}

      <div className="row mt-5">
        {relatedTasks.map((relatedTask) => (
          <div className="col-12 col-md-4 mb-4" key={relatedTask.id}>
            <div
              className="card h-100 d-flex flex-column"
              style={{ border: "1px solid #dddddd" }}
            >
              <img
                className="card-img-top card-img-fixed"
                src={relatedTask.imagen}
                alt={relatedTask.titulo}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title mb-3">{relatedTask.titulo}</h5>
                <div className="mt-auto">
                  <p className="card-text mb-2">Tiempo: {relatedTask.tiempo}</p>
                  <p className="card-text mb-2">
                    Responsable: {relatedTask.responsable}
                  </p>
                </div>
              </div>
              <div
                className="card-footer d-flex align-items-center justify-content-center"
                style={{ background: "#CCC" }}
              >
                <Link
                  to={`/detalle/${relatedTask.id}`}
                  className="btn mt-auto float-end"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                >
                  <Button variant="primary">Ver tarea</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetalleTarea;
