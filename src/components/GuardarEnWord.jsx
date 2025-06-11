import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";

export const generarWord = (form) => {
  console.log("Generando Word con:", form);

  const doc = new Document();

  const addTitulo = (text) => new Paragraph({
    spacing: { after: 100 },
    children: [new TextRun({ text, bold: true, size: 24 })],
  });

  const addTexto = (text) => new Paragraph({
    children: [new TextRun({ text, size: 22 })],
  });

  const tablaMateriales = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph("Código")] }),
          new TableCell({ children: [new Paragraph("N°")] }),
          new TableCell({ children: [new Paragraph("Descripción")] }),
        ],
      }),
      ...form.materiales.map((m) =>
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph(m.codigo || "")] }),
            new TableCell({ children: [new Paragraph(m.numero || "")] }),
            new TableCell({ children: [new Paragraph(m.descripcion || "")] }),
          ],
        })
      ),
    ],
  });

  const tablaTrabajos = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      new TableRow({
        children: [
          new TableCell({ children: [new Paragraph("Trabajo Realizado")] }),
          new TableCell({ children: [new Paragraph("Cantidad")] }),
        ],
      }),
      ...form.trabajos.map((t) =>
        new TableRow({
          children: [
            new TableCell({ children: [new Paragraph(t.trabajo || "")] }),
            new TableCell({ children: [new Paragraph(t.cantidad || "")] }),
          ],
        })
      ),
    ],
  });

  doc.addSection({
    properties: {},
    children: [
      addTitulo("PLANILLA DE TRABAJO TÉCNICO"),
      addTexto(`Fecha: ${form.fecha}`),
      addTexto(`Técnicos: ${form.tecnicos?.join(", ")}`),
      addTexto(`Cliente: ${form.cliente}`),
      addTexto(`Ubicación: ${form.ubicacion}`),
      addTexto(`Descripción de la ubicación: ${form.descripcionUbicacion || ""}`),
      addTitulo("1. MATERIALES UTILIZADOS"),
      tablaMateriales,
      addTitulo("2. MANO DE OBRA REALIZADA"),
      tablaTrabajos,
      addTitulo("3. OBSERVACIONES GENERALES"),
      addTexto(form.observaciones),
      addTexto(""),
      addTexto("Firma del técnico: _________________________________"),
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, `${form.fecha}-trabajo-tecnico.docx`);
  });
  console.log("¡Archivo Word generado!");
  return doc;
};
