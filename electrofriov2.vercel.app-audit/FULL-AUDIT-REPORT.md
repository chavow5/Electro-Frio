# Informe Completo de Auditoría SEO — `electrofriov2.vercel.app`

- **URL Auditada:** `https://electrofriov2.vercel.app/`
- **Fecha:** 18 de noviembre de 2026
- **Tipo de Negocio Detectado:** Servicio Local Híbrido (*Brick-and-Mortar* en `San Martín 375, La Rioja` + *Service Area Business* a domicilio para hogares, comercios e industrias)
- **Vertical:** Servicios del Hogar / Técnicos Matriculados en Electricidad y Refrigeración (HVAC)

---

## 1. Resumen Ejecutivo

| Métrica | Puntuación | Peso | Contribución | Estado |
| :--- | :---: | :---: | :---: | :--- |
| **SEO Health Score Global** | **65 / 100** | 100% | **64.8** | 🟡 Requiere Atención |
| **Technical SEO** | 54 / 100 | 22% | 11.9 | 🔴 Crítico (Conflicto Canonical/Redirect) |
| **Content Quality (E-E-A-T)** | 72 / 100 | 23% | 16.6 | 🟢 Buena base E-E-A-T, falta profundidad |
| **On-Page SEO & SXO** | 74 / 100 | 20% | 14.8 | 🟢 Bien estructurado, ajustes en H1/Mapa |
| **Schema / Datos Estructurados** | 68 / 100 | 10% | 6.8 | 🟡 Dominio antiguo + tipo genérico |
| **Performance (Core Web Vitals)** | 62 / 100 | 10% | 6.2 | 🟡 Video Hero de 8.63 MB + sin `width`/`height` |
| **AI Search Readiness (GEO & Agentic)** | 58 / 100 | 10% | 5.8 | 🟡 Falta `/llms.txt` |
| **Images** | 55 / 100 | 5% | 2.8 | 🔴 PNGs pesados sin WebP (2+ MB) |
| **Local SEO Score (`seo-local`)** | **68 / 100** | — | — | 🟡 Ver `LOCAL-SEO-ANALYSIS.md` |

### Top 5 Problemas Críticos y de Alta Prioridad
1. **[CRÍTICO] Bucle de señal Canonical vs. Redirección 307:** `https://electro-frio.vercel.app/` redirige (`HTTP 307`) hacia `https://electrofriov2.vercel.app/`, pero [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L20), [public/robots.txt](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/robots.txt#L7), [public/sitemap.xml](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/sitemap.xml#L4), Open Graph y el JSON-LD declaran a `https://electro-frio.vercel.app/` como la URL canónica.
2. **[ALTO] Video de fondo en Hero de 8.63 MB (`fondo.mp4`):** En [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L313-L324) se declara `autoplay` junto con `preload="none"`. En los navegadores modernos `autoplay` tiene prioridad y descarga los **9.05 MB** de inmediato, penalizando la carga inicial y el consumo de datos móviles.
3. **[ALTO] Ausencia de "La Rioja" en el `<h1>` y el Hero visible:** El badge con *"Atención Inmediata en La Rioja"* está comentado en [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L333), por lo que ni el `<h1>` (*"Venta y servicios en ELECTRICIDAD y REFRIGERACIÓN"*) ni el párrafo principal del Hero mencionan la ciudad.
4. **[ALTO] Imágenes fotográficas en PNG sin comprimir (~2 MB en 3 archivos):** `serv-tecnologia.png` (763 KB), `serv-domotica.png` (710 KB) y `aire.png` (525 KB) están en formato PNG en lugar de WebP/AVIF, y ninguna de las 17 etiquetas `<img>` declara `width` y `height`.
5. **[ALTO] Ausencia de `/llms.txt` (`HTTP 404`) y arquitectura de página única:** Los motores de respuesta de IA no encuentran `/llms.txt` y los 6 servicios compiten en una sola URL de ~480 palabras.

### Top 5 Quick Wins (Impacto Inmediato en < 30 minutos)
1. **Unificar el dominio canónico a `https://electrofriov2.vercel.app/`** en [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html), [public/robots.txt](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/robots.txt) y [public/sitemap.xml](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/sitemap.xml).
2. **Incluir "en La Rioja" en el `<h1>` y descomentar el badge del Hero** en [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L333-L337).
3. **Corregir el error tipográfico de marca `ELECTROFRÍA` → `ElectroFrio`** en [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L722).
4. **Corregir el `preload` duplicado de Google Fonts** en [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L46-L52) y el iframe roto de Google Maps en [index.html](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L839).
5. **Crear [public/llms.txt](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/llms.txt)** y enriquecer el Schema JSON-LD con los subtipos `HVACBusiness` y `Electrician` más los técnicos matriculados.

---

## 2. Technical SEO (54 / 100)

### Lo que funciona bien
- **HTTPS + HSTS:** El servidor de Vercel entrega `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`.
- **Directivas Meta Robots:** `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />` correctamente configurada.
- **Etiquetas Geo:** Incluye `geo.region` (`AR-F`), `geo.placename` (`La Rioja, Argentina`) y coordenadas.

### Hallazgos y Evidencia
- **[CRÍTICO] Conflicto Canonical / Sitemap / Redirección 307:**
  - `curl -I https://electro-frio.vercel.app/` devuelve `HTTP/1.1 307 Temporary Redirect` → `Location: https://electrofriov2.vercel.app/`.
  - Sin embargo, en `https://electrofriov2.vercel.app/`:
    - [index.html#L20](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L20): `<link rel="canonical" href="https://electro-frio.vercel.app/" />`
    - [public/robots.txt#L7](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/robots.txt#L7): `Sitemap: https://electro-frio.vercel.app/sitemap.xml`
    - [public/sitemap.xml#L4](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/public/sitemap.xml#L4): `<loc>https://electro-frio.vercel.app/</loc>`
  - **Impacto:** Google recibe señales contradictorias (la página A redirige temporalmente a B, pero B dice que la canónica es A).
- **[ALTO] Cabeceras HTTP de Seguridad Faltantes:**
  - Faltan `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin` y `Permissions-Policy`.
- **[MEDIO] Etiquetas ignoradas en `sitemap.xml`:**
  - `<changefreq>monthly</changefreq>` y `<priority>1.0</priority>` son ignoradas por Googlebot; conviene dejar únicamente `<loc>` y `<lastmod>` con fecha actualizada.
- **[BAJO] Doble petición a Google Fonts por `preload` desincronizado:**
  - La línea 46 precarga `wght@0,400;0,600;0,700;0,800;1,400` y la línea 52 carga `wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,700`. Al no coincidir exactamente la URL, el navegador descarga ambas hojas de estilo.

---

## 3. Content Quality & E-E-A-T (72 / 100)

### Lo que funciona bien
- **E-E-A-T Local Sobresaliente en la sección `#equipo` ([index.html#L619-L685](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L619-L685)):**
  - **Arias Jorge, Víctor Ignacio** — Dirección General, Técnico Superior (**Mat. CACAAV N° 17284-000-20-5**).
  - **Páez, José Ramiro** — Dirección General, Técnico Superior, Electricista Categoría III (**Seguridad Eléctrica Ley 10.281 N° 3339456-06900**).
  - Pocas empresas locales de servicios publican nombres completos, fotografías reales y números de matrícula nacional/provincial verificables. Esto es un diferenciador competitivo enorme tanto para usuarios como para motores de búsqueda.

### Hallazgos y Evidencia
- **[ALTO] Limitación de Página Única (~480 palabras visibles):**
  - El sitio concentra 6 líneas de negocio distintas (*Electricidad, Refrigeración/Aires, Iluminación, Electrodomésticos, Cámaras/Redes y Domótica*) en una sola URL.
  - Cada tarjeta de servicio tiene solo ~18–22 palabras. Para posicionar en búsquedas específicas como *"reparación de heladeras comerciales La Rioja"*, *"instalación de aire acondicionado matriculado La Rioja"* o *"electricista categoría 3 La Rioja"*, se requiere mayor profundidad semántica o páginas dedicadas por servicio.
- **[MEDIO] Error tipográfico en nombre de marca (`ELECTROFRÍA`):**
  - En [index.html#L722](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L722) figura: `Calificación promedio en Google Reviews · <strong>ELECTROFRÍA</strong>`.
  - Además, el nombre varía entre `ElectroFrio` (título/schema/footer) y `ElectroFrío` (línea 624).
- **[MEDIO] Dependencia de widget externo para el texto de reseñas:**
  - El widget de Elfsight ([index.html#L65](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L65), [index.html#L737](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L737)) inyecta las opiniones vía JS externo. Renderizar 3 reseñas reales directamente en el HTML garantiza que Googlebot y los crawlers de IA indexen el texto de prueba social.

---

## 4. On-Page SEO & SXO (74 / 100)

### Análisis de Etiquetas Principales
- **`<title>` (81 caracteres):** `ElectroFrio | Electricidad y Refrigeración en La Rioja — Técnicos Matriculados`
  - *Evaluación:* Muy buena selección de palabras clave al inicio. Supera ligeramente los 60 caracteres (~600px), por lo que en algunos SERPs puede truncarse en `... — Técnicos Matric...`. Versión optimizada sugerida (68 chars): `ElectroFrio | Electricidad y Refrigeración en La Rioja (Matriculados)`.
- **`<meta name="description">` (199 caracteres):**
  - *Evaluación:* Incluye marca, servicios, ciudad y teléfono, pero supera los ~155–160 caracteres recomendados, truncándose el número de teléfono en resultados móviles. Conviene ajustarla a ~155 caracteres manteniendo el teléfono y el llamado a la acción.
- **Estructura de Encabezados:**
  - `<h1>` (1): `Venta y servicios en ELECTRICIDAD y REFRIGERACIÓN`
  - `<h2>` (6): `Nuestros servicios`, `Mantenimiento preventivo de aires acondicionados`, `Algunos de nuestros trabajos realizados`, `Nuestro Equipo`, `Reseñas de nuestros clientes en Google`, `Preguntas frecuentes`, `¿Necesitás ayuda con tus equipos?`
  - `<h3>` (9): 6 servicios + 2 técnicos + título del formulario.

### Hallazgos On-Page y SXO
- **[ALTO] El `<h1>` no incluye la ubicación (`La Rioja`):**
  - Añadir *"en La Rioja"* al `<h1>` y descomentar el badge superior refuerza inmediatamente la relevancia geográfica para el usuario apenas aterriza y para Googlebot.
- **[MEDIO] Iframe de Google Maps con Place ID nulo (`0x0:0x0`):**
  - En [index.html#L839](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L839), el `src` del mapa contiene `!1s0x0%3A0x0!...!4v1234567890` (un marcador genérico de coordenadas sin vincular a la ficha de Google Business Profile de ElectroFrio).
- **[MEDIO] Enlaces `<a href="#">` vacíos en el Footer y ausencia de `tel:`:**
  - En [index.html#L976-L989](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L976-L989), la dirección y los horarios están envueltos en `<a href="#">` que llevan al tope de la página al hacer clic.
  - Agregar un enlace `tel:+5493804349027` permite llamadas telefónicas directas con un toque en móviles para urgencias eléctricas o de frío comercial.

---

## 5. Schema / Datos Estructurados (68 / 100)

### Estado Actual
- Se detectan 2 bloques `application/ld+json`:
  1. `LocalBusiness` ([index.html#L68-L148](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L68-L148))
  2. `FAQPage` ([index.html#L150-L197](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L150-L197))

### Hallazgos
- **[ALTO] Dominio antiguo en `@id`, `url`, `logo` e `image`:** Todos apuntan a `https://electro-frio.vercel.app/`.
- **[MEDIO] Subtipo y grafo de entidades incompleto:**
  - Cambiar `"@type": "LocalBusiness"` a `"@type": ["LocalBusiness", "HVACBusiness", "Electrician"]`.
  - Incorporar a los dos directores técnicos como `founder` / `employee` con tipo `Person` y `hasCredential` (`EducationalOccupationalCredential`) para sus matrículas `CACAAV N° 17284-000-20-5` y `Ley 10.281 N° 3339456-06900`.
  - Añadir `hasOfferCatalog` con los 6 servicios estructurados como `Service`.
- **[INFO] Nota sobre `FAQPage` (Mayo 2026):** Google retiró los resultados enriquecidos de FAQ en SERP para todos los sitios el 7 de mayo de 2026. No es un error mantener el bloque `FAQPage` actual (ayuda a motores de respuesta y LLMs a extraer pares pregunta-respuesta), pero no generará desplegables en Google Search.

---

## 6. Performance (62 / 100) e Imágenes (55 / 100)

### Inventario de Activos Multimedia Auditados

| Archivo | Peso Actual | Dimensiones | Formato | Problema Detectado | Peso Estimado Optimizado |
| :--- | :---: | :---: | :---: | :--- | :---: |
| `/assets/video/fondo.mp4` | **8,838.5 KB (8.63 MB)** | Video Hero | `.mp4` | `autoplay` descarga 8.6 MB al inicio | ~1,200 KB (720p CRF 28) |
| `/assets/img/servicios/serv-tecnologia.png` | **763.0 KB** | 900×600 | `.png` | Foto guardada en PNG sin WebP | ~45 KB (`.webp`) |
| `/assets/img/servicios/serv-domotica.png` | **709.7 KB** | 768×512 | `.png` | Foto guardada en PNG sin WebP | ~40 KB (`.webp`) |
| `/assets/img/servicios/aire.png` | **525.0 KB** | 600×400 | `.png` | Foto en PNG usada 3 veces | ~35 KB (`.webp`) |
| `/assets/img/equipo/tech_superior.jpg` | **522.4 KB** | 1024×1024 | `.jpg` | Archivo huérfano (no usado en HTML) | Eliminar del deploy |
| `/assets/img/equipo/paez.jpg` | **314.8 KB** | 1024×1024 | `.jpg` | Sin WebP ni `width`/`height` | ~45 KB (`.webp`) |
| `/assets/img/equipo/nacho.jpg` | **135.9 KB** | 1024×1024 | `.jpg` | Sin WebP ni `width`/`height` | ~35 KB (`.webp`) |
| `/assets/img/logo-Electrofrio.png` | **105.2 KB** | 1171×392 | `.png` | Usado como favicon, OG image y poster de video | Crear favicon cuadrado + OG `1200×630` |

---

## 7. AI Search Readiness — GEO & Agentic SEO (58 / 100)

- **`/llms.txt` (`HTTP 404`):** Crear `/public/llms.txt` con información estructurada en Markdown sobre ElectroFrio (servicios, matrículas CACAAV y Ley 10.281, dirección en San Martín 375, La Rioja, horarios, WhatsApp `+54 9 380 434-9027` y cobertura).
- **Directivas en `robots.txt`:** Mantener `Allow: /` y corregir la línea `Sitemap: https://electrofriov2.vercel.app/sitemap.xml`.
- **Accesibilidad para Agentes en el Formulario (`#form-contacto`):** Agregar `autocomplete="name"` en el campo de nombre y atributos semánticos claros para que agentes de navegación identifiquen que el formulario construye una consulta directa hacia WhatsApp.

---
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built by agricidaniel. Join the AI Marketing Hub community
🆓 Free  → https://www.skool.com/ai-marketing-hub
⚡ Pro   → https://www.skool.com/ai-marketing-hub-pro
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
