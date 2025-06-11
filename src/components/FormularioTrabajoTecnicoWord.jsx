import React, { useState } from "react";
import { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType } from "docx";
import { saveAs } from "file-saver";

const FormuWord = () => {
  const [form, setForm] = useState({
    fecha: "2025-06-11",
    tecnicos: "David Ramírez",
    cliente: "Cliente Ejemplo",
    ubicacion: "La Rioja",
    descripcionUbicacion: "Zona norte, planta baja",
    materiales: [
      { codigo: "M001", numero: "10", descripcion: "Cable coaxial" },
      { codigo: "M002", numero: "5", descripcion: "Conectores RJ45" },
    ],
    trabajos: [
      { trabajo: "Instalación de cámaras", cantidad: "2" },
      { trabajo: "Configuración de router", cantidad: "1" },
    ],
    observaciones: "Se dejó funcionando todo correctamente.",
  });

  const generateWord = async () => {
    const hoy = new Date().toISOString().split("T")[0];

    const materialesTableRows = form.materiales.map((mat) => (
      new TableRow({
        children: [
          new TableCell({ width: { size: 33, type: WidthType.PERCENTAGE }, children: [new Paragraph(mat.codigo)] }),
          new TableCell({ width: { size: 33, type: WidthType.PERCENTAGE }, children: [new Paragraph(mat.numero)] }),
          new TableCell({ width: { size: 33, type: WidthType.PERCENTAGE }, children: [new Paragraph(mat.descripcion)] }),
        ],
      })
    ));

    const trabajosTableRows = form.trabajos.map((trab) => (
      new TableRow({
        children: [
          new TableCell({ width: { size: 70, type: WidthType.PERCENTAGE }, children: [new Paragraph(trab.trabajo)] }),
          new TableCell({ width: { size: 30, type: WidthType.PERCENTAGE }, children: [new Paragraph(trab.cantidad)] }),
        ],
      })
    ));

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [new TextRun({ text: "PLANILLA DE TRABAJO TÉCNICO", bold: true, size: 28 })],
              alignment: "center",
            }),
            new Paragraph(" "),
            new Paragraph(`Fecha: ${form.fecha}`),
            new Paragraph(`Técnicos: ${form.tecnicos}`),
            new Paragraph(`Cliente: ${form.cliente}`),
            new Paragraph(`Ubicación: ${form.ubicacion}`),
            new Paragraph(`Descripción de la ubicación: ${form.descripcionUbicacion}`),

            new Paragraph(" "),
            new Paragraph({ children: [new TextRun({ text: "1. MATERIALES UTILIZADOS", bold: true })] }),
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("Código")] }),
                    new TableCell({ children: [new Paragraph("N°")] }),
                    new TableCell({ children: [new Paragraph("Descripción")] }),
                  ],
                }),
                ...materialesTableRows,
              ],
              width: { size: 100, type: WidthType.PERCENTAGE },
            }),

            new Paragraph(" "),
            new Paragraph({ children: [new TextRun({ text: "2. MANO DE OBRA REALIZADA", bold: true })] }),
            new Table({
              rows: [
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("Trabajo Realizado")] }),
                    new TableCell({ children: [new Paragraph("Cantidad")] }),
                  ],
                }),
                ...trabajosTableRows,
              ],
              width: { size: 100, type: WidthType.PERCENTAGE },
            }),

            new Paragraph(" "),
            new Paragraph({ children: [new TextRun({ text: "3. OBSERVACIONES GENERALES", bold: true })] }),
            new Paragraph(form.observaciones),

            new Paragraph(" "),
            new Paragraph("Firma del técnico: _________________________________"),
          ],
        },
      ],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, `${hoy}-tecnico.docx`);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Generar Word</h2>
      <button
        onClick={generateWord}
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Descargar en Word
      </button>
    </div>
  );
};

export default FormuWord;

