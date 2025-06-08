import { useState } from "react";
import jsPDF from "jspdf";
import { useMateriales } from "../hooks/useMateriales";

export default function FormularioTrabajoTecnico() {
  const hoy = new Date().toISOString().split("T")[0];
  
  // Lista de materiales
  const materialesLista = useMateriales();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [busqueda, setBusqueda] = useState("");


  // contenido del formulario
  const [form, setForm] = useState({
    fecha: hoy,
    tecnicos: "",
    cliente: "",
    ubicacion: "",
    materiales: [{ codigo: "", numero: "", descripcion: "" }],
    trabajos: [{ trabajo: "", cantidad: "" }],
    observaciones: "",
  });

  const handleInputChange = (e, index, section, field) => {
    if (section) {
      const updated = [...form[section]];
      updated[index][field] = e.target.value;
      setForm({ ...form, [section]: updated });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const addField = (section, emptyItem) => {
    setForm({ ...form, [section]: [...form[section], emptyItem] });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 10;

    doc.setFontSize(14);
    doc.text("PLANILLA DE TRABAJO TÉCNICO", 70, y);
    y += 10;

    doc.setFontSize(11);
    doc.text(`Fecha: ${form.fecha}`, 10, y);
    doc.text(`Técnicos: ${form.tecnicos}`, 80, y);
    y += 7;
    doc.text(`Cliente: ${form.cliente}`, 10, y);
    y += 10;
    doc.text(`Ubicación: ${form.ubicacion}`, 10, y);
    y += 7;
    doc.text(
      `Descripción de la ubicación: ${form.descripcionUbicacion}`,
      10,
      y
    );
    y += 10;

    // Sección 1 - Materiales
    doc.setFont(undefined, "bold");
    doc.text("1. MATERIALES UTILIZADOS", 10, y);
    y += 7;

    doc.setFont(undefined, "normal");
    doc.setFontSize(10);
    doc.rect(10, y, 190, 8); // Título fila
    doc.text("Código", 12, y + 6);
    doc.text("N°", 42, y + 6);
    doc.text("Descripción", 60, y + 6);
    doc.text("Código", 112, y + 6);
    doc.text("N°", 142, y + 6);
    doc.text("Descripción", 160, y + 6);
    y += 10;

    form.materiales.forEach((m, i) => {
      const yRow = y + i * 8;
      doc.rect(10, yRow, 190, 8);
      doc.text(m.codigo, 12, yRow + 6);
      doc.text(m.numero, 42, yRow + 6);
      doc.text(m.descripcion, 60, yRow + 6);
    });

    y += form.materiales.length * 8 + 10;

    // Sección 2 - Mano de obra
    doc.setFont(undefined, "bold");
    doc.text("2. MANO DE OBRA REALIZADA", 10, y);
    y += 7;

    doc.setFont(undefined, "normal");
    doc.rect(10, y, 150, 8);
    doc.rect(160, y, 40, 8);
    doc.text("Trabajo Realizado", 12, y + 6);
    doc.text("Cantidad", 162, y + 6);
    y += 10;

    form.trabajos.forEach((t, i) => {
      const yRow = y + i * 8;
      doc.rect(10, yRow, 150, 8);
      doc.rect(160, yRow, 40, 8);
      doc.text(t.trabajo, 12, yRow + 6);
      doc.text(t.cantidad, 162, yRow + 6);
    });

    y += form.trabajos.length * 8 + 10;

    // Sección 3 - Observaciones
    doc.setFont(undefined, "bold");
    doc.text("3. OBSERVACIONES GENERALES", 10, y);
    y += 7;
    doc.setFont(undefined, "normal");

    const obs = doc.splitTextToSize(form.observaciones, 180);
    doc.rect(10, y, 190, obs.length * 6 + 10);
    doc.text(obs, 12, y + 6);
    y += obs.length * 6 + 15;

    // Firma
    doc.text("Firma del técnico: _________________________________", 120, y);

    doc.save(`${hoy}-(hora)-tecnico`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-black-300 shadow rounded">
      <h1 className="text-xl font-bold mb-4">Planilla de Trabajo Técnico</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <input
          type="date"
          name="fecha" // <-- Importante para el handleInputChange
          value={form.fecha}
          onChange={handleInputChange}
          className="border p-2"
        />
        <input
          name="tecnicos"
          value={form.tecnicos}
          onChange={handleInputChange}
          placeholder="Técnicos"
          className="border p-2"
        />
        <input
          name="cliente"
          value={form.cliente}
          onChange={handleInputChange}
          placeholder="Cliente"
          className="border p-2"
        />
      </div>
      <div className="md:col-span-3 flex items-center gap-2 mb-2">
        <input
          name="ubicacion"
          value={form.ubicacion}
          onChange={handleInputChange}
          placeholder="Ubicación (lat, long)"
          className="border p-2"
        />
        <button
          type="button"
          onClick={() => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(
                (position) => {
                  const { latitude, longitude } = position.coords;
                  setForm((prevForm) => ({
                    ...prevForm,
                    ubicacion: `${latitude.toFixed(5)}, ${longitude.toFixed(
                      5
                    )}`,
                  }));
                },
                (error) => {
                  alert("No se pudo obtener la ubicación");
                  console.error(error);
                }
              );
            } else {
              alert("La geolocalización no es compatible con este navegador");
            }
          }}
          className="px-3 py-1 bg-gray-700 text-white rounded"
        >
          Obtener Ubicación
        </button>
      </div>

      <div className="md:col-span-3 mb-4">
        <input
          name="descripcionUbicacion"
          value={form.descripcionUbicacion}
          onChange={handleInputChange}
          placeholder="Descripción de la ubicación (Ej: galpón, oficina, etc.)"
          className="border p-2 w-full"
        />
      </div>

      <h2 className="font-semibold mb-2">1. Materiales Utilizados</h2>
      {form.materiales.map((item, index) => (
          <div className="grid grid-cols-4 gap-2 mb-2 items-center" key={index}>
            <input
              list="codigos"
              value={item.codigo}
              onChange={(e) => {
                const codigoSeleccionado = e.target.value;
                const material = materialesLista.find((m) => m.CODIGO === codigoSeleccionado);
                const descripcion = material ? material.PRODUCTO : "";
              
                handleInputChange({ target: { value: codigoSeleccionado } }, index, "materiales", "codigo");
                handleInputChange({ target: { value: descripcion } }, index, "materiales", "descripcion");
              }}
              placeholder="Código"
              className="border p-2"
            />
          <datalist id="codigos">
           {materialesLista.map((m, idx) => (
             <option key={idx} value={m.CODIGO}>
               {m.PRODUCTO}
             </option>
           ))}
         </datalist>
         <input
             value={item.descripcion}
             onChange={(e) =>
               handleInputChange(e, index, "materiales", "descripcion")
             }
             placeholder="Descripción"
             className="border p-2"
           />
          {/* <input
            value={item.codigo}
            onChange={(e) =>
              handleInputChange(e, index, "materiales", "codigo")
            }
            placeholder="Código"
            className="border p-2"
          /> */}
          <input
            value={item.numero}
            onChange={(e) =>
              handleInputChange(e, index, "materiales", "numero")
            }
            placeholder="Cantidad"
            className="border p-2"
          />  
        </div>
      ))}
      <button
        onClick={() =>
          addField("materiales", { codigo: "", numero: "", descripcion: "" })
        }
        className="mb-4 px-4 py-1 bg-blue-500 text-white rounded"
      >
        Agregar Material
      </button>
      <button onClick={() => setMostrarModal(true)} className="mb-4 px-4 py-1 bg-green-500 text-white rounded">
        Ver todos los materiales
      </button>
          {mostrarModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto shadow-lg">
              <h2 className="text-lg font-bold mb-4">Lista completa de materiales</h2>
              <div className="text-right mt-4">
                <button
                  onClick={() => {
                    setMostrarModal(false);
                    setBusqueda("");
                  }}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Cerrar
                </button>
              </div>
              {/* Buscador */}
              <input
                type="text"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar por código o descripción..."
                className="mb-4 w-full p-2 border border-gray-300 rounded"
              />

              {/* Tabla filtrada */}
              <table className="w-full text-sm border">
                <thead className="bg-gray-200 sticky top-0">
                  <tr>
                    <th className="p-2 text-left">Código</th>
                    <th className="p-2 text-left">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  {materialesLista
                    .filter((material) =>
                      (material.CODIGO + " " + material.PRODUCTO)
                        .toLowerCase()
                        .includes(busqueda.toLowerCase())
                    )
                    .map((material, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          addField("materiales", {
                            codigo: material.CODIGO,
                            descripcion: material.PRODUCTO,
                            numero: "",
                          });
                          setMostrarModal(false);
                          setBusqueda(""); // Limpiar búsqueda al cerrar
                        }}
                      >
                        <td className="p-2">{material.CODIGO}</td>
                        <td className="p-2">{material.PRODUCTO}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      <h2 className="font-semibold mb-2">2. Mano de Obra Realizada</h2>
      {form.trabajos.map((item, index) => (
        <div className="grid grid-cols-2 gap-2 mb-2" key={index}>
          <input
            value={item.trabajo}
            onChange={(e) => handleInputChange(e, index, "trabajos", "trabajo")}
            placeholder="Trabajo Realizado"
            className="border p-2"
          />
          <input
            value={item.cantidad}
            onChange={(e) =>
              handleInputChange(e, index, "trabajos", "cantidad")
            }
            placeholder="Cantidad"
            className="border p-2"
          />
        </div>
      ))}
      <button
        onClick={() => addField("trabajos", { trabajo: "", cantidad: "" })}
        className="mb-4 px-4 py-1 bg-blue-500 text-white rounded"
      >
        Agregar Trabajo
      </button>

      <h2 className="font-semibold mb-2">3. Observaciones Generales</h2>
      <textarea
        name="observaciones"
        value={form.observaciones}
        onChange={handleInputChange}
        className="w-full border p-2 mb-4"
        rows="4"
      ></textarea>

      <button
        onClick={generatePDF}
        className="bg-green-600 text-white px-6 py-2 rounded"
      >
        Descargar PDF
      </button>
    </div>
  );
}
