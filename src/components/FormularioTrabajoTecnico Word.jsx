// prueba en word
//npm install docx file-saver

import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";

const generarWord = () => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: `Fecha: ${form.fecha}`, bold: true }),
              new TextRun("\n"),
              new TextRun(`Técnico: ${form.tecnicos}`),
              new TextRun("\n"),
              new TextRun(`Cliente: ${form.cliente}`),
              new TextRun("\n"),
              new TextRun(`Ubicación: ${form.ubicacion}`),
              new TextRun("\n"),
              new TextRun(
                `Descripción Ubicación: ${form.descripcionUbicacion}`
              ),
              new TextRun("\n"),
              new TextRun(`Observaciones: ${form.observaciones}`),
            ],
          }),
        ],
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "reporte.docx");
  });
};
return (
  <button
    onClick={generarWord}
    className="bg-blue-600 text-white px-4 py-2 rounded"
  >
    Descargar Word
  </button>
);

export default generarWord;
