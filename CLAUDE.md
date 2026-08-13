# CLAUDE.md — Contexto del proyecto

> Colocar este archivo en la raíz del repositorio. Claude Code lo lee automáticamente
> al iniciar sesión en esta carpeta.

---

## Quién es el autor

**David Steven Rodríguez Guzmán** — Ingeniero de Sistemas y Computación, Universidad
Nacional de Colombia. Egresado (terminó materias; acta de grado en trámite).
Bogotá, Colombia.

- GitHub: `Davidrg02`
- LinkedIn: `linkedin.com/in/david-rodriguez-data`
- Correo: `davidstevenrg2003@gmail.com`
- Portafolio: `davidrg02.github.io/portafolio` — **no** `david-rodriguez.onrender.com`
  (URL vieja de Render, abandonada por el riesgo de arranque en frío; si aparece en
  algún CV o documento es un residuo que hay que corregir).

**Situación actual:** búsqueda activa de empleo. Su vinculación como estudiante auxiliar
en la Unidad de Informática de la Facultad de Ciencias Económicas (UIFCE) de la UNAL
terminó en julio de 2026.

---

## Objetivo de este repositorio

Portafolio profesional. Su función es **conseguir entrevistas**, no exhibir habilidades
de diseño. Cada decisión debe evaluarse contra esa métrica.

El público objetivo son reclutadores y hiring managers en Colombia. Idioma: **español**.

---

## Posicionamiento acordado

David se vende como un **perfil híbrido**: analiza datos *y* construye y despliega los
sistemas que los producen.

- **Enfoque principal (70%):** Data Analyst / BI Analyst / Analytics Engineer
- **Enfoque secundario (30%):** Desarrollador Full-Stack (Python/Django + React)
- **Explícitamente descartado por ahora:** Data Scientist y ML Engineer

El diferenciador frente a otros juniors de datos no es el modelado: es que sabe SQL,
ETL, Docker, Linux, despliegue y levantamiento de requerimientos con usuarios.

---

## Experiencia real (cifras verificadas, usar estas y no otras)

**Líder de Desarrollo — UIFCE, FCE, UNAL · Abr 2025 – Jul 2026**
- Equipo de 4 desarrolladores (3 junior, 1 semi-senior)
- 6 aplicativos institucionales, 500–1.000 usuarios
- 5 aplicativos puestos en producción (Linux Red Hat, Docker, Apache)
- Pipeline ETL en Python: ~7.000 registros históricos, 3 fuentes distintas
- Levantamiento de requerimientos con 4 dependencias de la Facultad

**Desarrollador (BI/ETL y Full-Stack) — UIFCE · Feb 2024 – Mar 2025**
- 2 aplicativos nuevos de punta a punta (Django + React.js)
- APIs REST con ~60 endpoints; mezcla de ORM de Django y SQL directo
- 5 dashboards en Power BI: aulas, prácticas y pasantías, solicitudes web, operación interna
- Capacitó a 20 personas de otras áreas en Python, SQL y Google Apps Script (6 sesiones)

**Desarrollador Junior — UIFCE · Ago – Dic 2023**
- Frontend con React.js en equipo Scrum, integración de APIs REST

**Aplicativos institucionales (5 de 6 documentados) — roles verificados (2026-08-11)**
- Aplicativo interno UIFCE: préstamos, inventario de equipos, tablero de tareas para
  monitores. Lo recibió incompleto, lo terminó full-stack (Django + React.js), lo validó
  funcionalmente y desplegó. Lo usan monitores y personal de la UIFCE.
- Cursos libres: inscripción, verificación de postulantes y generación de certificados.
  Planeación, desarrollo de módulos, corrección de errores, despliegue. Full-stack
  (Next.js + .NET). Origen de la migración de ~7.000 registros desde 3 fuentes. Lo usan
  estudiantes y público externo.
- Insignias académicas: convalidación de 3 cursos de 20 h como asignatura optativa.
  Planeación, **correcciones puntuales sobre distintos módulos** (código limitado, no
  full-stack) y despliegue. Stack: Django + Angular. Lo usan estudiantes de la Facultad y
  administración académica.
- Programación de salones: planeación y validación funcional, y despliegue. **No escribió
  código en este aplicativo** — corrección anterior (que él mismo arregló el bug de la
  carga masiva de Excel y agregó un segundo método de autenticación) era incorrecta y ya
  se retiró de CVs y portafolio. Lo usan profesores y coordinadores académicos.
- Cartas de prácticas y pasantías: generación de cartas por estudiantes y gestión
  administrativa. Su primer proyecto; frontend en React.js, equipo Scrum. Más adelante, ya
  como Máster de Desarrollo (no como responsabilidad formal, algo que alcanzó a hacer),
  también hizo el despliegue. Lo usan estudiantes en prácticas/pasantías y el área
  administrativa.

**Formación**
- Diplomado en Machine Learning and Data Science, UNAL, 18 mar – 26 jul 2025 — 192 horas
  (Facultad de Ingeniería, Depto. de Ingeniería de Sistemas e Industrial). Certificado verificado.
- Curso Elementos de Machine Learning, UNAL, 05 nov – 12 dic 2025 — 30 horas
  (Facultad de Ingeniería, Instituto de Extensión e Investigación - IEI). Certificado verificado.
- Inglés B2 (EF SET 59/100). **No conversacional aún.**

---

## Proyecto: Sistema de Pronóstico de Demanda Académica

El proyecto más importante de su portafolio. **El código original es privado y
pertenece a la UNAL** — no publicar ese código. Si se recompone, debe ser una
reimplementación propia con datos sintéticos o abiertos.

**Qué es:** predicción de demanda de cupos, en dos dominios — 154 asignaturas de
3 programas de la FCE y 85 cursos de educación continua de la UIFCE.
Feb – Jul 2026. Propuesto y liderado por David.

**Datos:** panel longitudinal de 154 asignaturas × 5 semestres (2024-1 a 2026-1);
13 variables derivadas (rezagos de inscripción, ocupación, repitencia, cancelación,
más atributos del plan de estudios). Cursos libres: 4 variables, muy pocas filas.

**Modelado:** 3 modelos de **regresión** con **XGBoost únicamente** (no se probaron
otras familias). Más una heurística de ranking de congestión por percentiles, que
no es un modelo entrenado.

**Validación:** split **temporal**, no aleatorio. Los periodos más recientes se
reservan para prueba, porque con variables rezagadas un split aleatorio filtraría
información del futuro. Es un solo fold, no k-fold.

**Resultados reales:**

| Modelo | MAE | R² |
|---|---|---|
| FCE sin sobrecupo | 17,47 | 0,845 |
| FCE con sobrecupo | 23,77 | 0,824 |
| Cursos libres | 41,81 | −0,004 |

**El hallazgo central — no omitir:** comparado contra baselines triviales
(persistencia y media histórica), **el modelo entrenado no supera a la persistencia**
en ninguno de los tres casos. La causa diagnosticada es **censura estructural del
target**: lo que se observa no es demanda sino `min(demanda, cupo)`, así que la
variable de interés no está en los datos. Se suma tamaño de muestra insuficiente
y alta inercia del fenómeno.

Este hallazgo es el activo más valioso del proyecto y debe presentarse como tal:
demuestra criterio de evaluación, no fracaso.

**Estado:** finalizado y documentado, **nunca desplegado**. Se transfirió al siguiente
líder del área para su despliegue.

---

## Proyecto: f1-pitstop-predictor

Repo público existente: `github.com/Davidrg02/f1-pitstop-predictor`.
Clasificación binaria: ¿debe este piloto entrar a boxes en las próximas 3 vueltas?
Datos de la API FastF1. **En desarrollo, con fecha límite de dos semanas.**

Pendientes: cerrar el pipeline de features, entrenar con validación temporal,
reportar contra baselines, limpiar el README (tenía un `EOF` suelto y describía
una carpeta `api/` inexistente), hacer commits incrementales.

**Estado en los CVs (2026-08-11):** se retiró de los 4 CVs (`.tex` y PDF) porque
tenía un marcador `\ph{métrica}` sin resolver — visible en rojo en las versiones
de Diseño — mientras el proyecto sigue sin terminar. El portafolio sí lo mantiene
como caso de estudio, pero etiquetado explícitamente "En desarrollo" y sin
reclamar ninguna métrica, que es honesto. Cuando el proyecto (que se trabaja en su
propia sesión, en `../f1-pitstop-predictor/`) tenga métrica real y esté
desplegado, volver a agregarlo a los 4 CVs con el resultado real, no un
placeholder.

---

## Restricciones de honestidad — CRÍTICAS

Estas reglas se establecieron tras detectar afirmaciones infladas en una versión previa
del CV. **No relajarlas por hacer que algo suene mejor.**

**Nunca afirmar:**
- Que el sistema de pronóstico de demanda estuvo en producción o desplegado.
- Que el modelo superó a los baselines. No lo hizo.
- Experiencia con LightGBM, Random Forest, Dask, Spark o NoSQL. No las usó.
- Pruebas automatizadas en NINGÚN aplicativo institucional. Confirmado por David: en los
  aplicativos solo hubo validación funcional manual. El único código con tests reales
  (pytest) es el sistema de pronóstico de demanda. Nunca escribir "tests" ni "pruebas
  automatizadas" fuera de ese proyecto; usar "validación funcional".
- CI/CD o GitHub Actions. Todos los despliegues fueron manuales.
- Inglés conversacional.
- Que David escribió/corrigió código en el aplicativo de Programación de salones. No lo
  hizo — solo planeación, validación funcional y despliegue (corregido 2026-08-11, ver
  sección de aplicativos).
- Que su rol en Insignias académicas fue "full-stack". Fue planeación + correcciones
  puntuales sobre módulos existentes, no desarrollo full-stack (corregido 2026-08-11).
- "Excel avanzado". Confirmado por David: nunca usó tablas dinámicas ni fórmulas
  complejas; su uso real fue como fuente de datos (lectura programática con pandas)
  y Power Query. Decir solo "Excel" o "Excel (fuente de datos)" (corregido 2026-08-12).

**Sí se puede afirmar:** todo lo listado en la sección de experiencia arriba,
con esas cifras exactas.

**Mantenimiento — CV descargable:** `portafolio/CV_David_Rodriguez.pdf` es una
copia estática de `../CV_David_Datos_ES_Diseno.pdf` (raíz del proyecto, fuera de
este repo). **No se actualiza sola.** Cada vez que se corrija el `.tex` fuente y
se recompile el PDF, hay que volver a copiarlo aquí y commitear — si no, el botón
"Descargar CV" del sitio sirve una versión vieja aunque el resto del sitio esté al
día. Ya pasó una vez (2026-08-12): el PDF quedó desactualizado por 3 commits
seguidos de correcciones al `.tex` antes de que alguien lo notara.

**Criterio general:** si una afirmación no sobrevive cinco minutos de preguntas en
una entrevista técnica, no va. El costo de que descubran una exageración es mucho
mayor que el beneficio de incluirla.

---

## Especificación del portafolio

**Formato:** sitio estático. Preferir **GitHub Pages** sobre Render — el plan gratuito
de Render duerme el servicio y tarda 30–60 s en despertar, lo que significa pantalla
en blanco justo cuando un reclutador lo está evaluando.

**Contenido mínimo:**

1. **Hero** — nombre, titular de posicionamiento, links a CV (PDF), LinkedIn, GitHub, correo.
2. **Sobre mí** — 3–4 frases. Sin relleno motivacional.
3. **Estudios de caso** — el corazón del sitio. Un bloque por proyecto con esta estructura:
   *Problema → Contexto y restricciones → Qué hice → Stack → Resultado → Visual*
   - Sistema de Pronóstico de Demanda Académica (incluir el hallazgo de censura)
   - Pipeline ETL de consolidación histórica
   - Dashboards de gestión en Power BI
   - f1-pitstop-predictor
4. **Stack técnico** — agrupado, sin barras de porcentaje (nadie las cree).
5. **Contacto.**

**Visualizaciones del sitio — distinción obligatoria:** la gráfica de barras del hallazgo
usa los MAE reales del proyecto (15,77 / 16,99 / 17,47) y debe ir marcada como tal. Las
gráficas de dispersión del hero y del simulador usan **datos generados**, no los datos
institucionales, y deben ir siempre rotuladas como simulación. Nunca presentar datos
sintéticos como si fueran reales, ni publicar los datos institucionales.

**Sobre los visuales:** el trabajo institucional es confidencial.
Prioridad: (1) diagramas de arquitectura dibujados por él — riesgo cero y comunican
más criterio técnico; (2) capturas con datos sintéticos; (3) capturas reales
anonimizadas, como último recurso.
**Nunca publicar capturas con datos de estudiantes reales** (Ley 1581 de 2012).

**Tono:** directo, técnico, sin superlativos. Nada de "apasionado por la tecnología".

---

## Preferencias de trabajo

- Responder en español.
- Respuestas directas, sin relleno ni preámbulos.
- Es aceptable —y preferible— señalar problemas en su enfoque en lugar de validarlo.

---

## Voz por canal — no clonar el mismo párrafo (regla añadida 2026-08-12)

Los hechos deben ser idénticos en CV / portafolio / LinkedIn (eso es innegociable,
ver honestidad arriba). **La redacción no.** Se detectó que el Perfil del CV, el
hero bio del portafolio y el "Acerca de" de LinkedIn convergían en el mismo
esqueleto de frase ("entré junior, salí liderando", "por iniciativa propia",
"analizo los datos y construyo los sistemas que los producen") — un reclutador que
revisa más de una fuente lee el mismo párrafo reformulado tres veces, y eso lee
como plantilla, no como criterio.

Cada canal tiene un trabajo distinto:
- **CV — Perfil:** capacidad y prueba, comprimido, sin arco narrativo. Se lee en
  8 segundos. Sin personalidad — no hace falta ahí.
- **Portafolio — hero bio:** es el dueño legítimo del arco "junior → líder" (coincide
  con el título de la sección Trayectoria). No repetir ese arco en el CV ni en
  LinkedIn.
- **LinkedIn — Acerca de:** el único lugar donde cabe una línea de voz/criterio en
  primera persona — pero anclada en un hecho real y verificable (ej. la historia
  de la censura del predictor de demanda), nunca una afirmación genérica de
  entusiasmo ("me apasiona", "me encanta aprender"). Sigue empezando con
  SQL/Python/datos en la primera frase por SEO de LinkedIn.

Antes de escribir o reescribir cualquiera de los tres, revisar los otros dos para
no clonar la misma frase de apertura o cierre.

**Dentro del mismo CV, el Perfil tampoco debe duplicar Experiencia** (regla
añadida 2026-08-12, investigada — ver fuentes en `contexto_chat_claude.md`
2026-08-12). Un resumen profesional bien hecho trae **un** logro cuantificado,
no dos, y ese logro va redactado distinto a como aparece después en detalle —
no la misma frase copiada. El Perfil original tenía "Lideré/Dirigí un equipo de
4 desarrolladores sobre 6 aplicativos institucionales (500–1.000 usuarios)"
palabra por palabra igual al primer bullet de Experiencia, más un segundo logro
completo (el proyecto de pronóstico) — demasiado para un resumen. Corregido en
los 4 CVs: las cifras de liderazgo quedan solo en Experiencia; el Perfil se
queda con capacidad + dominio + un gancho distinto (la historia del baseline en
Datos, los ~60 endpoints del aplicativo interno en Desarrollo).
