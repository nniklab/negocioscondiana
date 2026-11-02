# Brief de rediseño — negocioscondiana.com

Documento base para el rediseño del sitio. Contexto del negocio y textos actuales: [contexto-sitio-legacy.md](../04-materiales/recibido-del-cliente/contexto-sitio-legacy.md).
Referencia visual: [referencias/referencia-estilo-onepage.jpg](referencias/referencia-estilo-onepage.jpg).

Fecha: 2026-11-02 · Responsable: nniklab

> **Actualización:** el prompt de construcción ([prompt-construccion.md](prompt-construccion.md)) manda sobre este brief en imágenes y estructura. Decisiones: fondo predominante `#F6F7FB` y solo modo claro; portada con mujer ficticia generada con IA; foto de Diana (editada, estilo ejecutivo y juvenil) **solo en Contacto**.

---

## 1. Objetivo

Rediseñar el sitio como **página única (one page)** cuyo objetivo principal es **vender la masterclass "Los 7 frenos mentales…"** y, de paso, presentar a Diana Yela como marca personal.

- **Acción principal:** clic en **"Adquirir masterclass"** → pago en Hotmart (https://pay.hotmart.com/I105509477M).
- **Acción secundaria:** ver el video de presentación (https://youtu.be/5GOuc1yS-o4).
- **Público:** mujeres que quieren emprender pero se sienten estancadas o dudan de sí mismas.
- **Precio:** valor regular **USD 267**, precio por tiempo limitado **USD 67**.

## 2. Estilo visual (según la referencia)

Tomamos el **estilo** de la referencia, no su contenido ni su código:

- Fondo blanco y aireado, con mucho espacio entre secciones.
- **Títulos grandes con degradado** coral → naranja.
- **Fotos recortadas en formas orgánicas** ("blobs") con trazos de color alrededor (navy, verde, celeste).
- **Tarjetas blancas** con esquinas redondeadas y sombra suave.
- **Íconos circulares con degradado**, cada uno de un color distinto.
- **Elementos flotantes** sobre las fotos: mini tarjetas, globos de diálogo, etiquetas con datos.
- Decoración ligera: puntos, triángulos y pequeñas cruces de colores esparcidos.
- **Cifras grandes** en coral dentro de tarjetas.
- Botones con esquinas suaves: relleno coral/naranja (principal) y navy (secundario) o solo borde.

## 3. Paleta de colores

Aproximada a la referencia (sacada de la imagen; ajustar al diseñar).

| Rol | Color | Hex |
|---|---|---|
| Principal (inicio del degradado) | Coral | `#F0545F` |
| Principal (fin del degradado) | Naranja | `#F7924A` |
| Secundario / textos de títulos / botón secundario | Azul marino | `#2F2C5E` |
| Trazos decorativos oscuros | Azul profundo | `#0F2453` |
| Acento 1 | Verde | `#3DAE3A` |
| Acento 2 | Lima | `#8CC63F` |
| Acento 3 | Celeste | `#4FC3E8` |
| Acento 4 | Lila | `#A86BF0` |
| Acento 5 (íconos) | Amarillo cálido | `#FCC96A` |
| Texto general | Gris azulado | `#5B5B6E` |
| Fondo | Blanco | `#FFFFFF` |
| Fondo alterno / tarjetas | Gris muy claro | `#F6F7FB` |

**Degradado principal:** `linear-gradient(90deg, #F0545F, #F7924A)`, para títulos destacados, botones principales y cifras.

> La paleta del sitio actual (terracota `#B75A3D`, beige `#E9D7C1`) se reemplaza por esta.

## 4. Tipografía

La referencia usa una sans serif redondeada y amable. Propuesta (Google Fonts):

- **Títulos:** Nunito, ExtraBold (800).
- **Textos:** Nunito Sans, Regular (400) y SemiBold (600).
- **Etiquetas pequeñas** ("POR QUÉ ESTA MASTERCLASS", "SOBRE MÍ"): mayúsculas, 12–13 px, con espaciado entre letras.

## 5. Estructura de la página

Cada sección lleva un ancla para la navegación (`#inicio`, `#masterclass`, etc.).

| # | Sección | Equivalente en la referencia | Contenido |
|---|---|---|---|
| 0 | **Cabecera fija** | Menú superior | Logo · Inicio · La masterclass · Qué incluye · Sobre Diana · botón "Adquirir masterclass" |
| 1 | **Hero** (`#inicio`) | "Digital Marketing Services" | Etiqueta "BIENVENIDA" · título con degradado "Naciste para liderar y construir lo tuyo propio, sólo falta ¡Atreverte!" · subtítulo "Los 7 frenos mentales…" · botón principal + botón "Ver video" · foto de Diana en forma orgánica con tarjetas flotantes ("7 frenos mentales", "6 años emprendiendo") |
| 2 | **Franja de confianza** | Fila de logos | Opciones: "Pago seguro con Hotmart", "Acceso inmediato", "Desde cualquier dispositivo". Si hay medios o colaboraciones, poner sus logos |
| 3 | **Para quién es** (`#masterclass`) | "Why choose us" + 4 tarjetas | Texto a la izquierda: ¿te sientes estancada, sin claridad, cansada? · 4 tarjetas con ícono degradado, una por cada beneficio (creencias ocultas · abundancia · enfoque · autoestima) |
| 4 | **Video + qué incluye** (`#incluye`) | Mockup del celular + barras | Izquierda: video de YouTube dentro de un mockup (celular o laptop) · derecha: los 4 elementos incluidos (masterclass, guía "De Distraída a Imparable", guía "Primero Crees en ti", video "El Juego de la Vida"), con ícono o check en vez de barras de progreso |
| 5 | **Sobre Diana** (`#diana`) | Tarjetas de cifras + foto | Izquierda: 4 tarjetas de cifras (6 años · 7 frenos · 3 bonos · USD 67) · derecha: foto de Diana en forma orgánica · su bio y propósito |
| 6 | **Oferta / precio** (`#precio`) | Nuevo, mismo estilo | Tarjeta grande: precio regular tachado USD 267 → **USD 67** · "por tiempo limitado" · lista de lo que incluye · botón principal |
| 7 | **Testimonios** *(opcional)* | Nuevo | Solo si el cliente los entrega |
| 8 | **Preguntas frecuentes** *(opcional)* | Nuevo | Acceso, duración, forma de pago, devoluciones (según la política de Hotmart) |
| 9 | **Pie de página** | Pie | Logo · redes (YouTube @dianayelamesias y las que falten) · contacto · enlaces legales · © Negocios con Diana |

## 6. Textos

- Reutilizar los textos del sitio actual (en [contexto-sitio-legacy.md](../04-materiales/recibido-del-cliente/contexto-sitio-legacy.md)) y pulirlos.
- Corregir "Dístraída" → **"Distraída"**.
- Hablar siempre de tú y en femenino ("bienvenida", "estancada").
- Un solo llamado a la acción, repetido: **"Adquirir masterclass"**. Debe aparecer en la cabecera, el hero, la oferta y al final.

## 7. Requisitos técnicos

- HTML/CSS estático en `05-web/sitio`, publicado en prueba en GitHub Pages (nniklab.github.io/negocioscondiana).
- **Mobile first**: la mayoría del tráfico vendrá de redes en el celular.
- Rendimiento: imágenes optimizadas (WebP) y el video de YouTube cargado solo al hacer clic.
- SEO básico: título, descripción e imagen para compartir propios (hoy el sitio dice "negocioscondiana.com" y el texto alternativo de la imagen es "sd").
- Mantener el Píxel de Meta si el cliente lo usa (confirmar ID).
- Accesibilidad: contraste suficiente. Los textos largos van en navy o gris oscuro, no con el degradado.

## 8. Pendientes del cliente

- [ ] Logo (hoy no tiene; ¿lo diseñamos?).
- [ ] Fotos de Diana en buena calidad. Para el hero y "Sobre Diana" se necesitan al menos 2, idealmente con fondo limpio para recortar.
- [ ] Testimonios.
- [ ] Contacto y redes sociales.
- [ ] Vigencia de la oferta de USD 67.
- [ ] ID del Píxel de Meta, si lo usa.
- [ ] Políticas legales (privacidad, términos, devoluciones).
- [ ] Dominio: cuándo pasar negocioscondiana.com del WordPress actual al sitio nuevo.
