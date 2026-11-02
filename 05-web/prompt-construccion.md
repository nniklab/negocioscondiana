Eres un diseñador y desarrollador web senior. Construye el nuevo sitio de **Negocios con Diana** (negocioscondiana.com): una **landing page de una sola página** que vende la masterclass de Diana Yela.

### 1. Contexto

- **Marca:** Diana Yela, Ing. Comercial, mentora de mentalidad para mujeres emprendedoras. Lleva 6 años en el mundo del emprendimiento.
- **Público:** mujeres jóvenes y adultas que quieren emprender, pero se sienten estancadas en un trabajo que no les gusta o dudan de sí mismas.
- **Objetivo único de la página:** que la visitante haga clic en **"Adquirir masterclass"**. Ese botón lleva a Hotmart: `https://pay.hotmart.com/I105509477M`.
- **Producto:** Masterclass "Los 7 frenos mentales que te limitan de emprender, aunque en el fondo ya sabes que quieres hacerlo." Valor regular **USD 267**, valor por tiempo limitado **USD 67**.
- **Tono:** cercano, de tú y en femenino ("bienvenida", "estancada"); motivador, cálido y alegre, pero **muy profesional**.

### 2. Dirección visual (obligatorio)

- **Modo claro únicamente.** El fondo que predomina en toda la página es gris muy claro **`#F6F7FB`**. Las tarjetas y los bloques destacados van en blanco `#FFFFFF`, con sombra suave.
- **Estilo** según la imagen de referencia adjunta:
  - títulos grandes con degradado coral → naranja;
  - fotos recortadas en formas orgánicas ("blobs") con trazos curvos de color alrededor;
  - tarjetas flotantes sobre las fotos;
  - íconos circulares con degradado;
  - puntos, triángulos y cruces decorativas pequeñas;
  - mucho espacio en blanco.
- Debe verse **muy profesional y pulido**: alineaciones exactas, espaciado consistente, jerarquía tipográfica clara y nada recargado.

**Paleta (tokens CSS):**

```css
--fondo: #F6F7FB;        /* fondo predominante */
--superficie: #FFFFFF;   /* tarjetas */
--coral: #F0545F;
--naranja: #F7924A;
--degradado: linear-gradient(90deg, #F0545F, #F7924A); /* títulos clave, botón principal, cifras */
--navy: #2F2C5E;         /* títulos, botón secundario */
--navy-profundo: #0F2453;/* trazos decorativos */
--texto: #5B5B6E;
--verde: #3DAE3A; --lima: #8CC63F; --celeste: #4FC3E8; --lila: #A86BF0; --amarillo: #FCC96A; /* acentos */
```

**Tipografía (Google Fonts):**
- Títulos: **Nunito** 800.
- Textos: **Nunito Sans** 400/600.
- Etiquetas pequeñas en mayúsculas con espaciado entre letras.

**Logo (no existe; diseñarlo):**
- Logotipo simple, **solo con letras**: "Negocios con Diana". Se puede destacar "Diana" o usar un monograma "ND" para el favicon.
- Usa el **degradado coral → naranja** (`--degradado`) en todo el nombre o en la palabra destacada; el resto en navy `#2F2C5E`.
- Tipografía Nunito 800 o similar redondeada, legible en tamaño pequeño.
- Entregar en SVG:
  - versión horizontal para la cabecera;
  - versión de un solo color (navy);
  - favicon / ícono 512×512.
- Sin íconos, clichés gráficos ni símbolos complejos.

### 3. Imágenes (puntos críticos)

1. **Foto de Diana: SOLO en la sección de Contacto.**
   - Partir de su foto real (la entregará el cliente) y **mejorarla y editarla** con un estilo **ejecutivo y juvenil**: buena iluminación, color limpio, fondo neutro o desenfocado, recorte profesional en forma orgánica.
   - Debe seguir siendo **claramente Diana**: no cambiar sus rasgos, su complexión ni su edad aparente.
   - No usar su foto en ninguna otra parte del sitio.

2. **Portada (hero): mujer joven ficticia, generada con IA.**
   - Alegre y expresando felicidad, en la línea de la referencia (sonrisa natural, postura relajada y segura, por ejemplo con el celular en la mano o los brazos cruzados).
   - Ropa casual-profesional y fondo limpio, para recortarla en forma orgánica.
   - Prompt base:
     > Fotografía profesional de estudio, mujer latinoamericana de unos 28 años, sonrisa amplia y natural, expresión de felicidad y confianza, cabello recogido casual, blusa de rayas y camisa de mezclilla abierta, sosteniendo un smartphone, fondo blanco liso, luz suave y brillante, colores limpios, estilo editorial de marketing, alta resolución, retrato de medio cuerpo.

3. **Más imágenes de personas generadas con IA**, juveniles y alegres, relacionadas con lo que se vende: emprender, mentalidad, enfoque, autoconfianza. Usarlas en las secciones de beneficios y de qué incluye. Ideas:
   - Mujer joven emprendedora trabajando en su laptop en un espacio luminoso, sonriendo (enfoque/acción).
   - Mujer joven escribiendo en una libreta o agenda, concentrada y tranquila (guía "De Distraída a Imparable").
   - Mujer joven frente a un espejo o con los brazos abiertos, segura de sí misma (guía "Primero Crees en ti").
   - Mujer joven viendo una clase en su celular o tablet, con audífonos (la masterclass).

   **Reglas para todas las imágenes de IA:**
   - Mismo estilo de luz, color y encuadre en todas, para que se vean de una sola sesión de fotos.
   - Mujeres latinoamericanas diversas, entre 25 y 35 años, con aspecto natural y no de catálogo exagerado.
   - Sin manos deformes, sin texto dentro de la imagen y sin logos de marcas.
   - **Nunca presentarlas como alumnas, testimonios ni como Diana.** Son imágenes ilustrativas.
   - Exportar en WebP, con versiones para móvil y escritorio y `alt` descriptivo.

4. **Gráficos y recursos visuales** para hacer la página más llamativa (todo en SVG o CSS, con los colores de la paleta):
   - Formas orgánicas y trazos curvos detrás de cada foto.
   - Tarjetas flotantes sobre las fotos, por ejemplo: "7 frenos mentales", "Acceso inmediato", "6 años acompañando emprendedoras".
   - Íconos circulares con degradado, uno por beneficio, cada uno de un acento distinto.
   - Un gráfico ilustrativo de **"De Distraída a Imparable"**: una curva o barras ascendentes que muestran el camino de la duda a la acción. Debe ser ilustrativo, **sin porcentajes ni cifras inventadas**.
   - Un **mockup de celular o laptop** con la masterclass en pantalla (miniatura del video).
   - Cifras grandes con degradado, solo con **datos reales**: 6 años · 7 frenos · 3 recursos extra · USD 67.
   - Decoración de fondo sutil: puntos, triángulos, cruces y quizá un mapa o patrón de puntos muy tenue.
   - Animaciones suaves al entrar cada sección (aparición o desplazamiento corto), respetando `prefers-reduced-motion`.

### 4. Estructura de la página (basada en el sitio actual)

Respetar el contenido y el orden del sitio actual, ampliado con las secciones nuevas. Usar los textos tal cual (solo corregir errores de ortografía).

**0. Cabecera fija**
- Logo o nombre "Negocios con Diana".
- Menú con anclas: Inicio · La masterclass · Qué incluye · Sobre Diana · Contacto.
- Botón "Adquirir masterclass" con degradado.
- En móvil: menú hamburguesa.

**1. Hero (`#inicio`)**
- Contenido:
  - Etiqueta "BIENVENIDA".
  - Título con degradado: "Naciste para liderar y construir lo tuyo propio, sólo falta ¡Atreverte!"
  - Subtítulo: "Los 7 frenos mentales que te están limitando de emprender, aunque en el fondo ya sabes que quieres hacerlo."
  - Botones "Adquirir masterclass" (principal) y "Ver video" (secundario, baja al video).
- Imagen: **mujer ficticia alegre (IA)**, con forma orgánica y tarjetas flotantes.
- **Titular, variantes a probar:** "Naciste para liderar…" se mantiene como opción principal. Además, proponer **2 o 3 variantes más concretas** que nombren lo que logra la masterclass. Por ejemplo:
  - "Identifica los 7 frenos mentales que te impiden emprender y da el primer paso hacia lo tuyo."
  - "Deja de postergar tu emprendimiento: descubre qué te está frenando y cómo superarlo."
  - "De la duda a la acción: libera los 7 frenos mentales que no te dejan emprender."
- Dejar el titular fácil de cambiar en el HTML y anotar las variantes en un comentario, para elegir con el cliente o hacer pruebas A/B.

**2. Franja de confianza**
- Íconos con texto: Pago seguro con Hotmart · Acceso inmediato · Desde cualquier dispositivo · Ejercicios prácticos.

**3. Video (`#video`)**
- Texto: "Dale clic al video".
- Video de YouTube `https://youtu.be/5GOuc1yS-o4` dentro de un mockup.
- Mostrar la miniatura y cargar el reproductor solo al hacer clic.
- Botón "Adquirir masterclass" debajo.

**4. Beneficios (`#masterclass`)**
- Título: "Lo que vas a lograr y cómo te vas a SENTIR después de acceder a la Masterclass."
- 4 tarjetas con ícono:
  1. Descubrir 7 creencias subconscientes (creencias ocultas) que te llevan a no tomar acción, manteniéndote estancada en un trabajo donde no eres feliz, te sientes obligada, sin claridad y sin propósito.
  2. Reconocer aquellos comportamientos que te alejan de la Abundancia mental, espiritual y económica, evitando la construcción de tu mejor versión y que sabes que puedes lograr.
  3. Trabajar tu mente para que sea enfocada, eliminando distracciones y dispersión con ejercicios prácticos que puedes implementar en tu día a día. Porque no solo es disciplina ruda, es disciplina con actitud y disfrute.
  4. Porque no sólo es hablar, es actuar en coherencia conforme a la vida que sueñas en el futuro, conectando con tu esencia y la parte más profunda de ti. Recibirás ejercicios prácticos para elevar tu autoestima.
- Acompañar con una imagen de IA y el gráfico "De Distraída a Imparable".

**5. Qué incluye y precio (`#incluye`)**
- Imagen de IA o mockup a un lado.
- Lista "INCLUYE":
  - Masterclass "Los 7 frenos mentales que te limitan de emprender, aunque en el fondo ya sabes que quieres hacerlo."
  - Guía "De Distraída a Imparable": ejercicios prácticos de concentración y enfoque.
  - Guía "Primero Crees en ti": ejercicios prácticos para desarrollar autoconfianza.
  - Video "El Juego de la Vida", para que abras tu mente y tu campo de percepción.
- Tarjeta de precio destacada:
  - "Valor regular ~~USD 267~~"
  - "Valor por tiempo limitado **USD 67**"
  - Botón grande "Adquirir masterclass".

**6. Sobre Diana (`#diana`) — sin foto de Diana**
- Texto:
  - "Soy Diana Yela, Ing. Comercial de profesión apasionada del crecimiento personal y estudio de la mente por vocación."
  - "Llevo 6 años aportando, creando y construyendo en el mundo del emprendimiento, comprendiendo el comportamiento humano femenino y la conexión interna entre mente, emociones y espíritu."
  - "Mi propósito es que te conviertas en una emprendedora con una mentalidad fuerte, con carácter y plenitud sin perder tu esencia, gozo y tu alegría en el camino."
- Visual: tarjetas de cifras reales y gráficos. **No** usar aquí imágenes de IA de mujeres, para que nadie las confunda con Diana.

**7. Contacto (`#contacto`) — única sección con la foto de Diana**
- Foto editada de Diana (estilo ejecutivo y juvenil) en forma orgánica.
- Texto de cierre: "Si estás aquí es porque estás dispuesta a dejar el cansancio, la frustración y el estrés de una vida que ya no quieres. Avanzando con certeza, valentía y confianza hacia la vida que sabes que te mereces."
- Datos de contacto y redes: **dejar marcadores** `[CORREO]`, `[WHATSAPP]`, `[INSTAGRAM]`, `[TIKTOK]`, `[FACEBOOK]`, más YouTube `https://www.youtube.com/@dianayelamesias`.
- Botón final "Adquirir masterclass".

**8. Pie de página**
- Nombre o logo, redes, enlaces a [Política de privacidad] y [Términos], "© 2026 Negocios con Diana".

### 5. Requisitos técnicos

- HTML5 + CSS + JavaScript sin frameworks.
- **Mobile first**: probar a 360 px, 768 px y 1280 px. Sin scroll horizontal.
- Rendimiento:
  - imágenes WebP con `srcset` y `loading="lazy"`, salvo el hero;
  - fuentes con `display=swap`;
  - YouTube cargado solo al hacer clic;
  - objetivo Lighthouse ≥ 90.
- Accesibilidad:
  - contraste AA (los textos largos van en navy o gris, nunca en degradado);
  - `alt` en todas las imágenes;
  - foco visible;
  - navegación con teclado.
- SEO:
  - `<title>` "Negocios con Diana | Masterclass Los 7 frenos mentales para emprender";
  - meta descripción propia;
  - Open Graph con imagen 1200×630;
  - `lang="es"`;
  - mientras esté en prueba, mantener `noindex`.
- Todos los botones "Adquirir masterclass" abren Hotmart en una pestaña nueva y llevan una clase común para medir clics.
- Dejar preparado (comentado) el espacio para el Píxel de Meta.

### 6. Entregables

1. El sitio completo de una sola página.
2. Las imágenes generadas, con los prompts usados para cada una.
3. El logo en SVG (horizontal, un solo color y favicon).
4. Las variantes del titular, listadas para elegir con el cliente.
5. Una lista de los marcadores pendientes de reemplazar con datos del cliente.

### 7. No hacer

- No inventar testimonios, cifras, alumnas ni logos de medios.
- No usar la foto de Diana fuera de Contacto, ni imágenes de IA que parezcan Diana.
- No usar modo oscuro ni fondos oscuros grandes.
- No copiar textos, logos ni código de la plantilla de referencia: solo su estilo.
