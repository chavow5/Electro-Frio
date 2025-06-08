import { useEffect, useState } from "react";
import Papa from "papaparse";

export function useMateriales() {
  const [materialesLista, setMaterialesLista] = useState([]);

  useEffect(() => {
    Papa.parse("/materiales.csv", {
      download: true,
      header: true,
      complete: (results) => {
        setMaterialesLista(results.data);
      },
    });
  }, []);

  return materialesLista;
}
