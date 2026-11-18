# Plan de Acción SEO Priorizado — `electrofriov2.vercel.app`

Este plan sintetiza los hallazgos bajo la metodología **PERCEIVE → ANALYZE → VALIDATE → ACT**, ordenando las tareas por impacto y dependencias técnicas.

---

## Fase 1: Correcciones Críticas y Quick Wins (Ejecución Inmediata — Día 1)

### 1.1. Resolver el conflicto de dominio Canónico (`electro-frio` → `electrofriov2`)
- **Principio (THINK):** Googlebot no debe recibir una etiqueta `<link rel="canonical">` que apunta a una URL (`electro-frio.vercel.app`) que a su vez responde con un `307 Temporary Redirect` de vuelta a `electrofriov2.vercel.app`.
- **Archivos a modificar:**
  - [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L20-L38): Actualizar `canonical`, `og:url`, `og:image`, `twitter:image` y el bloque JSON-LD (`@id`, `url`, `logo`, `image`) a `https://electrofriov2.vercel.app/`.
  - [public/robots.txt](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/robots.txt#L7): Cambiar `Sitemap:` a `https://electrofriov2.vercel.app/sitemap.xml`.
  - [public/sitemap.xml](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/sitemap.xml#L4): Cambiar `<loc>` a `https://electrofriov2.vercel.app/`, actualizar `<lastmod>` y quitar `<changefreq>` y `<priority>`.
- **Verificación (ACCEPT):** `curl -s https://electrofriov2.vercel.app/ | Select-String "electro-frio.vercel.app"` debe devolver `0` coincidencias.

### 1.2. Optimizar Relevancia Local en Hero (`<h1>`), Meta Description y Nombre de Marca
- **Archivos a modificar:**
  - [index.html#L10](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L10): Ajustar `<meta name="description">` a ~155 caracteres para que el teléfono `380 434-9027` no se corte en SERPs móviles.
  - [index.html#L333-L337](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L333-L337): Descomentar el badge *"Atención Inmediata en La Rioja"* e incorporar *"en La Rioja"* en el `<h1>`.
  - [index.html#L722](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L722): Corregir `<strong>ELECTROFRÍA</strong>` por `<strong>ElectroFrio</strong>`.
  - [index.html#L976-L989](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L976-L989): Reemplazar los `<a href="#">` vacíos del footer por el enlace real a Google Maps y añadir enlace `tel:+5493804349027`.

### 1.3. Corregir Preload duplicado de Google Fonts e Iframe de Google Maps
- **Archivos a modificar:**
  - [index.html#L46-L52](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L46-L52): Unificar la URL de Google Fonts para evitar descargar dos archivos CSS de la misma fuente.
  - [index.html#L839](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L839): Apuntar el `iframe` de Google Maps a `San Martín 375, La Rioja, Argentina` en lugar del marcador nulo `0x0:0x0`.

---

## Fase 2: Datos Estructurados Avanzados, IA (`/llms.txt`) y Seguridad HTTP (Semana 1)

### 2.1. Enriquecer Schema JSON-LD (`HVACBusiness` + `Electrician` + Técnicos Matriculados)
- **Archivo:** [index.html#L68-L148](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L68-L148)
- **Acción:**
  - Declarar `"@type": ["LocalBusiness", "HVACBusiness", "Electrician"]`.
  - Añadir las entidades `Person` de **Víctor Ignacio Arias Jorge** (`Mat. CACAAV N° 17284-000-20-5`) y **José Ramiro Páez** (`Seguridad Eléctrica Ley 10.281 N° 3339456-06900`) bajo `employee` / `founder` con `hasCredential`.
  - Añadir dimensiones `width` y `height` explícitas a las 17 etiquetas `<img>` para prevenir CLS.

### 2.2. Crear `/public/llms.txt` para Motores de Búsqueda con IA (ChatGPT, Perplexity, Gemini)
- **Archivo nuevo:** `public/llms.txt`
- **Acción:** Publicar ficha estructurada en Markdown con los servicios, matrículas oficiales, dirección física, cobertura en La Rioja, horarios y canales de contacto directo.

### 2.3. Configurar Cabeceras HTTP de Seguridad en `vercel.json`
- **Archivo nuevo:** `vercel.json`
- **Acción:** Añadir `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin` y `Permissions-Policy`.

---

## Fase 3: Optimización Multimedia (Imágenes WebP y Video Hero) (Semana 1–2)

### 3.1. Conversión de PNGs pesados a WebP
- **Archivos:**
  - `public/assets/img/servicios/serv-tecnologia.png` (763 KB → ~45 KB `.webp`)
  - `public/assets/img/servicios/serv-domotica.png` (710 KB → ~40 KB `.webp`)
  - `public/assets/img/servicios/aire.png` (525 KB → ~35 KB `.webp`)
  - Eliminar imagen huérfana `public/assets/img/equipo/tech_superior.jpg` (522 KB) y duplicado `public/logo-Electrofrio.png` (105 KB).

### 3.2. Compresión del Video de Fondo (`public/assets/video/fondo.mp4`)
- **Acción:** Recodificar `fondo.mp4` (actualmente **8.63 MB**) con `ffmpeg` (`-vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart`) para reducirlo a **~1.2 MB** (~85% menos peso) y extraer un fotograma real como `poster` en WebP.

---

## Fase 4: Expansión de Contenido Local y Citaciones (Mes 1)

1. **Crear secciones o páginas dedicadas por servicio clave** (*Aires Acondicionados y Refrigeración en La Rioja*, *Electricista Matriculado Categoría III en La Rioja*, *Service de Heladeras Comerciales y Cámaras Frigoríficas*).
2. **Alta en Bing Places y Apple Business Connect** con el mismo NAP (`ElectroFrio`, `San Martín 375, La Rioja, F5300`, `+54 9 380 434-9027`, `https://electrofriov2.vercel.app/`).
