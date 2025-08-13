import { useState } from "react";
import jsPDF from "jspdf";

export default function FormularioTrabajoTecnico() {
  const hoy = new Date().toISOString().split("T")[0];

  const [form, setForm] = useState({
    fecha: hoy,
    hora: "",
    tecnicos: "",
    cliente: "",
    domicilio: "",
    materiales: [{ accion: "", cantidad: "", descripcion: "" }],
    trabajos: [{ accion: "", cantidad: "", descripcion: "" }],
    observaciones: "",
    ubicaciones: "",
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

  const addField = (section) => {
    setForm({
      ...form,
      [section]: [...form[section], { accion: "", cantidad: "", descripcion: "" }],
    });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    let y = 10;

    doc.setFontSize(14);
    doc.text("PLANILLA DE TRABAJO TÉCNICO", 70, y);
    y += 10;

    doc.setFontSize(10);
    doc.text(`Fecha: ${form.fecha}`, 10, y);
    doc.text(`Hora: ${form.hora}`, 70, y);
    doc.text(`Técnico/os: ${form.tecnicos}`, 120, y);
    y += 7;
    doc.text(`Cliente: ${form.cliente}`, 10, y);
    doc.text(`Domicilio: ${form.domicilio}`, 120, y);
    y += 10;

    // 1. Materiales utilizados
    doc.setFont(undefined, "bold");
    doc.text("1. MATERIALES UTILIZADOS - COMPROBANTE:", 10, y);
    y += 5;

    doc.setFont(undefined, "normal");
    doc.rect(10, y, 30, 8);
    doc.text("Acción", 12, y + 5);
    doc.rect(40, y, 40, 8);
    doc.text("Cantidad/Longitud", 42, y + 5);
    doc.rect(80, y, 120, 8);
    doc.text("Descripción", 82, y + 5);
    y += 8;

    form.materiales.forEach((m) => {
      doc.rect(10, y, 30, 8);
      doc.text(m.accion, 12, y + 5);
      doc.rect(40, y, 40, 8);
      doc.text(m.cantidad, 42, y + 5);
      doc.rect(80, y, 120, 8);
      doc.text(m.descripcion, 82, y + 5);
      y += 8;
    });
    y += 5;

    // 2. Mano de obra
    doc.setFont(undefined, "bold");
    doc.text("2. MANO DE OBRA REALIZADA - COMPROBANTE:", 10, y);
    y += 5;

    doc.setFont(undefined, "normal");
    doc.rect(10, y, 30, 8);
    doc.text("Acción", 12, y + 5);
    doc.rect(40, y, 40, 8);
    doc.text("Cantidad/Longitud", 42, y + 5);
    doc.rect(80, y, 120, 8);
    doc.text("Descripción", 82, y + 5);
    y += 8;

    form.trabajos.forEach((t) => {
      doc.rect(10, y, 30, 8);
      doc.text(t.accion, 12, y + 5);
      doc.rect(40, y, 40, 8);
      doc.text(t.cantidad, 42, y + 5);
      doc.rect(80, y, 120, 8);
      doc.text(t.descripcion, 82, y + 5);
      y += 8;
    });
    y += 5;

    // 3. Observaciones
    doc.setFont(undefined, "bold");
    doc.text("3. OBSERVACIONES GENERALES", 10, y);
    y += 5;
    doc.setFont(undefined, "normal");
    doc.rect(10, y, 190, 20);
    doc.text(doc.splitTextToSize(form.observaciones, 185), 12, y + 5);
    y += 25;

    // 4. Ubicaciones
    doc.setFont(undefined, "bold");
    doc.text("4. UBICACIONES", 10, y);
    y += 5;
    doc.setFont(undefined, "normal");
    doc.rect(10, y, 190, 40);
    doc.text(doc.splitTextToSize(form.ubicaciones, 185), 12, y + 5);

    doc.save(`Planilla-${form.fecha}.pdf`);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 shadow rounded">
      <h1 className="text-xl font-bold mb-4">Planilla de Trabajo Técnico</h1>

     <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
  <input
    type="date"
    name="fecha"
    value={form.fecha}
    onChange={handleInputChange}
    className="border p-2"
  />
  <input
    type="time"
    name="hora"
    value={form.hora}
    onChange={handleInputChange}
    className="border p-2"
  />
  <input
    name="tecnicos"
    placeholder="Técnico/os"
    value={form.tecnicos}
    onChange={handleInputChange}
    className="border p-2"
  />
  <input
    name="cliente"
    placeholder="Cliente"
    value={form.cliente}
    onChange={handleInputChange}
    className="border p-2"
  />
  
  {/* Campo de domicilio */}
  <div className="flex gap-2">
    <input
      name="domicilio"
      placeholder="Domicilio"
      value={form.domicilio}
      onChange={handleInputChange}
      className="border p-2 flex-1"
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
                domicilio: `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,
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
      Ubicacion
    </button>
  </div>
</div>



      <h2 className="font-semibold mb-2">1. Materiales Utilizados</h2>
      {form.materiales.map((item, i) => (
        <div key={i} className="grid grid-cols-3 gap-2 mb-2">
          <input value={item.accion} onChange={(e) => handleInputChange(e, i, "materiales", "accion")} placeholder="Acción" className="border p-2" />
          <input value={item.cantidad} onChange={(e) => handleInputChange(e, i, "materiales", "cantidad")} placeholder="Cantidad/Longitud" className="border p-2" />
          <input value={item.descripcion} onChange={(e) => handleInputChange(e, i, "materiales", "descripcion")} placeholder="Descripción" className="border p-2" />
        </div>
      ))}
      <button onClick={() => addField("materiales")} className="mb-4 px-4 py-1 bg-blue-500 text-white rounded">Agregar Material</button>
      <h2 className="font-semibold mb-2">2. Mano de Obra Realizada</h2>
      {form.trabajos.map((item, i) => (
        <div key={i} className="grid grid-cols-3 gap-2 mb-2">
          <input value={item.accion} onChange={(e) => handleInputChange(e, i, "trabajos", "accion")} placeholder="Acción" className="border p-2" />
          <input value={item.cantidad} onChange={(e) => handleInputChange(e, i, "trabajos", "cantidad")} placeholder="Cantidad/Longitud" className="border p-2" />
          <input value={item.descripcion} onChange={(e) => handleInputChange(e, i, "trabajos", "descripcion")} placeholder="Descripción" className="border p-2" />
        </div>
      ))}
      <button onClick={() => addField("trabajos")} className="mb-4 px-4 py-1 bg-blue-500 text-white rounded">Agregar Trabajo</button>

      <h2 className="font-semibold mb-2">3. Observaciones Generales</h2>
      <textarea name="observaciones" value={form.observaciones} onChange={handleInputChange} className="w-full border p-2 mb-4" rows="3" />

      <h2 className="font-semibold mb-2">4. Ubicaciones</h2>
      <textarea name="ubicaciones" value={form.ubicaciones} onChange={handleInputChange} className="w-full border p-2 mb-4" rows="3" />

      <button onClick={generatePDF} className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
        Descargar PDF
      </button>
    </div>
  );
}

// export default FormularioTrabajoTecnico ;