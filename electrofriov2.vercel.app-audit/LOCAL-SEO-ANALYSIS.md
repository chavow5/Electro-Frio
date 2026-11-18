# Análisis de SEO Local (`seo-local`) — ElectroFrio (La Rioja, Argentina)

- **Dominio:** `https://electrofriov2.vercel.app/`
- **Local SEO Score:** **68 / 100**
- **Tipo de Negocio Local:** **Híbrido** (*Brick-and-Mortar* en `San Martín 375, La Rioja` + *Service Area Business* con atención a domicilio para hogares, comercios e industrias en La Rioja Capital y alrededores)
- **Vertical Detectada:** **Home Services** (Electricidad Matriculada Categoría III + Refrigeración Comercial/Residencial HVAC)
- **Google Place ID Detectado:** `ChIJ35kZlXbbJ5QRtmUPQGrDJqQ`
- **Google Maps CID Detectado:** `16905383072694696618`

---

## 1. Desglose de Puntuación por Dimensión Local

| Dimensión | Peso | Puntuación | Estado |
| :--- | :---: | :---: | :--- |
| **1. Señales de Google Business Profile (GBP)** | 25% | **76 / 100** | 🟢 Place ID y CID integrados, horarios claros; iframe de mapa roto |
| **2. Reseñas y Reputación** | 20% | **78 / 100** | 🟢 5.0★ (10 reseñas), CTA directo a `writereview`; falta texto estático |
| **3. Local On-Page SEO** | 20% | **64 / 100** | 🟡 NAP visible, pero H1 sin "La Rioja", sin `tel:` y sin páginas por servicio |
| **4. Consistencia NAP y Citaciones** | 15% | **62 / 100** | 🟡 Discrepancia de dominio (`electro-frio` vs `electrofriov2`) y typo `ELECTROFRÍA` |
| **5. Local Schema Markup** | 10% | **65 / 100** | 🟡 Tiene `LocalBusiness`, pero usa dominio antiguo y tipo genérico |
| **6. Autoridad Local y Señales de Confianza** | 10% | **55 / 100** | 🟡 Matrículas oficiales presentes (CACAAV / Ley 10.281); faltan enlaces a entes |
| **TOTAL LOCAL SEO SCORE** | **100%** | **68 / 100** | 🟡 **Base sólida con alto potencial de mejora rápida** |

---

## 2. Auditoría de Consistencia NAP (Name, Address, Phone, Web)

| Campo | HTML Visible (`index.html`) | Schema JSON-LD (`LocalBusiness`) | Estado / Hallazgo |
| :--- | :--- | :--- | :--- |
| **Name (Nombre)** | `ElectroFrio` / `ElectroFrío` (línea 624) / **`ELECTROFRÍA`** (línea 722) | `ElectroFrio` (`alternateName`: `Electro Frio La Rioja`) | ⚠️ Corregir typo `ELECTROFRÍA` en línea 722 |
| **Address (Dirección)** | `San Martín 375, La Rioja` / `San Martín 375 — La Rioja, Argentina` | `San Martín 375`, `La Rioja`, `AR`, `F5300` | ✅ Consistente |
| **Phone (Teléfono)** | `380 434-9027` (`wa.me/5493804349027`) | `+54-9-380-434-9027` | ⚠️ Falta enlace `tel:+5493804349027` en HTML |
| **Website URL** | Servido en `https://electrofriov2.vercel.app/` | `https://electro-frio.vercel.app/` | 🔴 **Crítico:** Discrepancia de dominio |
| **Horarios** | `Lun–Vie 8:00–18:00 · Sáb 9:00–13:00` | `Mo-Fr 08:00-18:00`, `Sa 09:00-13:00` | ✅ Consistente |
| **Coordenadas Geo** | `-29.4118, -66.8519` (4 decimales) | `-29.4118, -66.8519` (4 decimales) | 🟡 Recomendado: 5+ decimales de precisión |

---

## 3. Checklist de Optimización de Google Business Profile (GBP) y Mapa

- ✅ **Enlace directo a reseñas con Place ID:** [index.html#L726](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L726) usa `https://search.google.com/local/writereview?placeid=ChIJ35kZlXbbJ5QRtmUPQGrDJqQ`.
- ✅ **Enlace directo por CID:** [index.html#L729](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L729) usa `https://maps.google.com/?cid=16905383072694696618`.
- ❌ **Mapa embebido (iframe) en Contacto roto/genérico:** En [index.html#L839](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L839) el parámetro protobuf tiene `!1s0x0%3A0x0!...!4v1234567890` en lugar de apuntar a la ficha real de ElectroFrio en San Martín 375, La Rioja.
- ⚠️ **URL del sitio web en la ficha de Google Business Profile:** Verificar que en el panel de Google Business Profile la URL del sitio web apunte directamente a `https://electrofriov2.vercel.app/` (sin pasar por la redirección 307 desde `electro-frio.vercel.app`).

---

## 4. Top 10 Acciones Priorizadas de SEO Local

1. **[CRÍTICO]** Actualizar todas las URLs canónicas y del JSON-LD a `https://electrofriov2.vercel.app/` y verificar que coincida exactamente con la URL cargada en Google Business Profile.
2. **[ALTO]** Incluir **"en La Rioja"** en el `<h1>` del Hero y descomentar el badge superior (*"Atención Inmediata en La Rioja"*).
3. **[ALTO]** Actualizar el `iframe` de Google Maps en `#contacto` para que cargue el lugar exacto (`San Martín 375, La Rioja` / Place ID `ChIJ35kZlXbbJ5QRtmUPQGrDJqQ`).
4. **[ALTO]** Mejorar el Schema JSON-LD usando `"@type": ["LocalBusiness", "HVACBusiness", "Electrician"]` e incluyendo a los dos técnicos matriculados (`Person` + `hasCredential` con Matrícula CACAAV y Ley 10.281).
5. **[MEDIO]** Corregir el typo **`ELECTROFRÍA`** en la tarjeta de calificación de Google Reviews ([index.html#L722](file:///C:/Users/david/Desktop/FullStack%20DigitalHouse/Electro-Frio/index.html#L722)).
6. **[MEDIO]** Añadir un botón o enlace de llamada telefónica directa (`href="tel:+5493804349027"`) junto al de WhatsApp para urgencias comerciales.
7. **[MEDIO]** Renderizar 3 a 5 reseñas reales de clientes de La Rioja en HTML estático dentro de `#testimonios` para que Googlebot y buscadores de IA indexen las opiniones sin depender únicamente del script de Elfsight.
8. **[MEDIO]** Registrar y verificar ElectroFrio en **Bing Places for Business** y **Apple Business Connect** (alimentan las recomendaciones locales de ChatGPT, Microsoft Copilot y Siri).
9. **[MEDIO]** Crear páginas o secciones dedicadas para los 3 servicios más buscados en La Rioja: *Reparación e Instalación de Aires Acondicionados*, *Electricista Matriculado (Cat. III)* y *Service de Heladeras Comerciales y Cámaras Frigoríficas*.
10. **[BAJO]** Enlazar las matrículas mencionadas (`CACAAV` y `Ley 10.281`) a las páginas oficiales de los padrones correspondientes para reforzar la verificación de entidad (E-E-A-T).
