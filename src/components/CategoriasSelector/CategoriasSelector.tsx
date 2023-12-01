import React from "react";
import {
  BsCheck,
  BsGear,
  BsPencilSquare,
  BsBookmarkCheck,
} from "react-icons/bs";

interface CategoriasSelectorProps {
  handleCategoryChange: (categoria: string) => void;
}

const CategoriasSelector: React.FC<CategoriasSelectorProps> = ({
  handleCategoryChange,
}) => {
  const categorias = [
    { nombre: "PORHACER", icono: <BsCheck /> },
    { nombre: "ENPRODUCCION", icono: <BsGear /> },
    { nombre: "PORTESTEAR", icono: <BsPencilSquare /> },
    { nombre: "COMPLETADA", icono: <BsBookmarkCheck /> },
  ];

  return (
    <section className="container mt-3" id="selector-categorias">
      <p className="fs-3">Seleccione una categoría</p>
      <div className="row gap-4">
        {categorias.map((categoria, index) => (
          <div className="col d-flex justify-content-center p-0" key={index}>
            <button
              onClick={() => handleCategoryChange(categoria.nombre)}
              className="border border-1 border-black d-flex gap-1 align-items-center rounded p-1 text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              {categoria.icono} {categoria.nombre}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriasSelector;
