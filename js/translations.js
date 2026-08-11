// ES/EN dictionary consumed by js/i18n.js via data-i18n(-*) attributes.
window.translations = {
  es: {
    "meta.title": "David Rodríguez · Datos, BI y desarrollo",
    "skip.content": "Saltar al contenido",
    "lang.switchLabel": "Selector de idioma",
    "nav.toggleLabel": "Menú",
    "nav.about": "Sobre mí",
    "nav.experience": "Trayectoria",
    "nav.education": "Educación",
    "nav.cases": "Casos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contacto",

    "hero.eyebrow": "Bogotá, Colombia · Ingeniería de Sistemas y Computación, UNAL",
    "hero.role": "Analizo los datos y construyo los sistemas que los producen.",
    "hero.bio":
      "Entré como desarrollador junior a la Unidad de Informática de la Facultad de Ciencias Económicas (UNAL) y salí tres años después liderando el equipo. En el camino: seis aplicativos institucionales, cinco puestos en producción, cerca de sesenta endpoints REST, cinco tableros de gestión en Power BI y un sistema de pronóstico de demanda que propuse por iniciativa propia.",
    "hero.ctaCases": "Ver casos de estudio",
    "hero.ctaCv": "Descargar CV",
    "hero.scrollLabel": "Desplazarse hacia abajo",

    "facts.devs": "Desarrolladores a cargo",
    "facts.apps": "Aplicativos institucionales",
    "facts.users": "Usuarios atendidos",
    "facts.endpoints": "Endpoints REST diseñados",

    "experience.tag": "Trayectoria",
    "experience.title": "De junior a líder de equipo, en tres años",
    "experience.desc":
      "Toda mi experiencia profesional hasta ahora, en la Unidad de Informática de la Facultad de Ciencias Económicas (UNAL).",
    "experience.r1.when": "Abr 2025 – Jul 2026",
    "experience.r1.role": "Líder de Desarrollo",
    "experience.r1.b1":
      "Equipo de 4 desarrolladores (3 junior, 1 semi-senior) sobre 6 aplicativos institucionales.",
    "experience.r1.b2":
      "5 aplicativos puestos en producción sobre Linux Red Hat, con Docker y Apache.",
    "experience.r1.b3":
      "Pipeline ETL en Python: ~7.000 registros históricos consolidados desde 3 fuentes.",
    "experience.r1.b4":
      "Levantamiento de requerimientos con 4 dependencias de la Facultad.",
    "experience.apps.label": "Aplicativos que lideré:",
    "experience.app1": "Aplicativo interno",
    "experience.app2": "Cursos libres",
    "experience.app3": "Insignias académicas",
    "experience.app4": "Programación de salones",
    "experience.app5": "Cartas de prácticas",
    "experience.r2.when": "Feb 2024 – Mar 2025",
    "experience.r2.role": "Desarrollador — BI, ETL y Full-Stack",
    "experience.r2.b1":
      "2 aplicativos nuevos de punta a punta con Django y React.js.",
    "experience.r2.b2":
      "~60 endpoints REST, combinando el ORM de Django y SQL directo.",
    "experience.r2.b3":
      "5 tableros de gestión en Power BI para el informe de la Unidad.",
    "experience.r2.b4":
      "Capacitó a 20 personas de otras áreas en Python, SQL y Google Apps Script (6 sesiones).",
    "experience.r3.when": "Ago – Dic 2023",
    "experience.r3.role": "Desarrollador Junior",
    "experience.r3.b1":
      "Frontend con React.js en equipo Scrum, integración de APIs REST.",

    "education.tag": "Educación",
    "education.title": "Formación académica",
    "education.desc":
      "Título y cursos, todos en la Universidad Nacional de Colombia.",
    "education.e1.title": "Ingeniería de Sistemas y Computación",
    "education.e1.when": "2020 – 2026",
    "education.e1.meta": "Egresado; acta de grado en trámite.",
    "education.e2.title": "Diplomado en Machine Learning and Data Science",
    "education.e2.when": "Mar – Jul 2025",
    "education.e2.meta":
      "192 horas · Facultad de Ingeniería · Modalidad virtual",
    "education.e3.title": "Elementos de Machine Learning",
    "education.e3.when": "Nov – Dic 2025",
    "education.e3.meta":
      "30 horas · Instituto de Extensión e Investigación · Modalidad virtual",
    "education.viewCert": "Ver certificado",

    "cases.tag": "Casos de estudio",
    "cases.title": "Casos a fondo",
    "cases.desc":
      "Cuatro proyectos: el problema, las restricciones y lo que realmente hice — no solo el resultado.",
    "cases.label.problem": "Problema",
    "cases.label.did": "Qué hice",
    "cases.label.stack": "Stack",
    "cases.label.result": "Resultado",
    "cases.label.status": "Estado",

    "cases.c1.title": "Sistema de pronóstico de demanda académica",
    "cases.c1.role": "Iniciativa propia · Diseño y desarrollo completo",
    "cases.c1.when": "Feb – Jul 2026",
    "cases.c1.problem":
      "La apertura de cupos de asignaturas y de cursos de educación continua se planeaba por criterio manual, sin estimación de demanda: la Facultad abría grupos que quedaban vacíos y dejaba corta la oferta de los que se llenaban.",
    "cases.c1.did":
      "Propuse, diseñé y desarrollé el proyecto completo en seis meses. Construí un panel longitudinal de 154 asignaturas por semestre (2024-1 a 2026-1) con 13 variables derivadas — rezagos de inscripción, ocupación, repitencia, cancelación y atributos del plan de estudios — y entrené tres modelos de regresión con XGBoost, validados con partición temporal: los semestres más recientes quedan fuera del entrenamiento, porque con variables rezagadas una partición aleatoria dejaría ver el futuro al modelo.",
    "cases.c1.result":
      "Documentado y transferido al área para su despliegue. El entregable más valioso no fue el modelo: fue el diagnóstico de por qué el problema, tal como está planteado, no se puede resolver con los datos que existen hoy.",

    "cases.c2.title": "Consolidación de datos históricos dispersos",
    "cases.c2.role": "Líder de Desarrollo · Diseño e implementación",
    "cases.c2.when": "2025 – 2026",
    "cases.c2.problem":
      "Años de información operativa vivían en archivos de Excel mantenidos por distintas personas, con nombres, formatos de fecha y categorías incompatibles entre sí — datos que, en la práctica, nadie podía consultar.",
    "cases.c2.did":
      "Diseñé un pipeline ETL en Python que consolidó cerca de 7.000 registros históricos de tres fuentes distintas en una base de datos relacional: detección y normalización de tipos, unificación de categorías, validación de integridad referencial y reporte de las filas que no pasaban las reglas, en lugar de descartarlas en silencio.",
    "cases.c2.result":
      "La información histórica quedó consultable y utilizable para reportes y análisis — la base sobre la que después se planteó el sistema de pronóstico.",

    "cases.c3.title": "Tableros de gestión en Power BI",
    "cases.c3.role":
      "Desarrollador BI · Levantamiento, modelado y construcción",
    "cases.c3.when": "2024 – 2025",
    "cases.c3.problem":
      "Los informes semestrales de la Unidad se armaban cruzando hojas de cálculo a mano: tomaba días y las cifras eran difíciles de reconstruir.",
    "cases.c3.did":
      "Levanté los indicadores con cuatro dependencias de la Facultad y construí cinco tableros — gestión de aulas, prácticas y pasantías, solicitudes web y operación interna. Además dicté seis sesiones de capacitación en Python, SQL y Google Apps Script a veinte personas de otras áreas, para reducir su dependencia del equipo de desarrollo en consultas rutinarias.",
    "cases.c3.result":
      "Los tableros pasaron a alimentar el informe de gestión de la Unidad, con cifras trazables hasta su fuente.",

    "cases.c4.title": "Predictor de estrategia de pit stop — Fórmula 1",
    "cases.c4.role": "Código abierto",
    "cases.c4.when": "Personal · En curso",
    "cases.c4.problem":
      "Entrar a boxes cuesta unos veinte segundos fijos. La decisión de cuándo hacerlo se toma bajo incertidumbre sobre el rendimiento que le queda al neumático. ¿Se puede anticipar esa decisión desde el estado de la carrera?",
    "cases.c4.did":
      "Pipeline ETL sobre la API pública de Fórmula 1 (FastF1) y un clasificador binario que predice si un piloto entrará a boxes en las próximas tres vueltas, a partir de degradación de neumáticos, ritmo y estado de carrera.",
    "cases.c4.status":
      "En desarrollo: falta cerrar el pipeline de features, entrenar con validación temporal y reportar contra baselines.",

    "stack.relationalModel": "Modelado relacional",
    "stack.advancedExcel": "Excel avanzado",

    "finding.eyebrow": "El hallazgo",
    "finding.headline": "El modelo no le ganó a repetir el semestre anterior.",
    "finding.bar1": "Persistencia (rezago 1)",
    "finding.bar2": "Asumir grupo lleno",
    "finding.bar3": "XGBoost entrenado",
    "finding.val1": "15,77",
    "finding.val2": "16,99",
    "finding.val3": "17,47",
    "finding.caption":
      "Error absoluto medio sobre el conjunto de prueba — menor es mejor · resultados reales del proyecto",
    "finding.p1":
      "El modelo alcanzó un R² de 0,845, que en un reporte apurado se lee como éxito. Comparado contra dos reglas triviales sin aprendizaje, quedó por debajo de ambas: un R² alto con error peor que la persistencia significa que el modelo aprendió el nivel típico de cada asignatura, no el cambio de un semestre a otro.",
    "finding.p2":
      "La causa es de medición, no de ajuste: el objetivo está estructuralmente censurado. Lo que registra el sistema no es demanda, es demanda truncada por el cupo — ninguna cantidad de historia adicional arregla eso.",
    "finding.p3":
      "Reporté el resultado tal cual y documenté qué se necesita para resolverlo: registrar sistemáticamente el sobrecupo y la demanda expresada, las únicas señales no censuradas disponibles.",

    "skills.tag": "Habilidades",
    "skills.title": "Con lo que trabajo",
    "skills.desc": "Tecnologías y herramientas que uso con más frecuencia.",
    "skills.data": "Datos y análisis",
    "skills.db": "SQL y bases de datos",
    "skills.bi": "BI y reportería",
    "skills.infra": "Infraestructura",

    "contact.tag": "Contacto",
    "contact.title": "Busco mi primer rol de tiempo completo en datos o desarrollo.",
    "contact.desc":
      "Si tienes una vacante donde alguien deba escribir el SQL, construir el pipeline y explicar el resultado a quien toma la decisión, hablemos.",
    "contact.formName": "Nombre",
    "contact.formEmail": "Correo",
    "contact.formMessage": "Mensaje",
    "contact.placeholderName": "Tu nombre",
    "contact.placeholderEmail": "tu@email.com",
    "contact.placeholderMessage": "Cuéntame sobre tu proyecto...",
    "contact.submit": "Enviar mensaje",
    "contact.cvValue": "Descargar PDF",

    "footer.tagline": "Hecho a mano, sin frameworks.",
    "footer.top": "Volver arriba",
  },

  en: {
    "meta.title": "David Rodríguez · Data, BI & Development",
    "skip.content": "Skip to content",
    "lang.switchLabel": "Language selector",
    "nav.toggleLabel": "Menu",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.cases": "Case studies",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.eyebrow": "Bogotá, Colombia · Systems & Computer Engineering, UNAL",
    "hero.role": "I analyze the data and build the systems that produce it.",
    "hero.bio":
      "I joined the Economics Faculty's IT Unit (UNAL) as a junior developer and left three years later leading the team. Along the way: six institutional applications, five shipped to production, close to sixty REST endpoints, five Power BI management dashboards, and a demand-forecasting system I proposed on my own initiative.",
    "hero.ctaCases": "View case studies",
    "hero.ctaCv": "Download CV",
    "hero.scrollLabel": "Scroll down",

    "facts.devs": "Developers led",
    "facts.apps": "Institutional applications",
    "facts.users": "Users served",
    "facts.endpoints": "REST endpoints designed",

    "experience.tag": "Experience",
    "experience.title": "From junior to team lead, in three years",
    "experience.desc":
      "All of my professional experience so far, at the Economics Faculty's IT Unit (UNAL).",
    "experience.r1.when": "Apr 2025 – Jul 2026",
    "experience.r1.role": "Development Lead",
    "experience.r1.b1":
      "Team of 4 developers (3 junior, 1 semi-senior) across 6 institutional applications.",
    "experience.r1.b2":
      "5 applications shipped to production on Linux Red Hat, with Docker and Apache.",
    "experience.r1.b3":
      "Python ETL pipeline: ~7,000 historical records consolidated from 3 sources.",
    "experience.r1.b4":
      "Requirements gathering with 4 departments across the Faculty.",
    "experience.apps.label": "Applications I led:",
    "experience.app1": "Internal app",
    "experience.app2": "Open courses",
    "experience.app3": "Academic badges",
    "experience.app4": "Classroom scheduling",
    "experience.app5": "Internship letters",
    "experience.r2.when": "Feb 2024 – Mar 2025",
    "experience.r2.role": "Developer — BI, ETL & Full-Stack",
    "experience.r2.b1":
      "2 new end-to-end applications with Django and React.js.",
    "experience.r2.b2":
      "~60 REST endpoints, combining the Django ORM with direct SQL.",
    "experience.r2.b3":
      "5 Power BI management dashboards for the Unit's reporting.",
    "experience.r2.b4":
      "Trained 20 people from other areas in Python, SQL and Google Apps Script (6 sessions).",
    "experience.r3.when": "Aug – Dec 2023",
    "experience.r3.role": "Junior Developer",
    "experience.r3.b1":
      "React.js frontend on a Scrum team, REST API integration.",

    "education.tag": "Education",
    "education.title": "Academic background",
    "education.desc":
      "Degree and courses, all at Universidad Nacional de Colombia.",
    "education.e1.title": "Systems and Computer Engineering",
    "education.e1.when": "2020 – 2026",
    "education.e1.meta": "Graduated coursework; degree certificate in process.",
    "education.e2.title": "Machine Learning and Data Science Diploma",
    "education.e2.when": "Mar – Jul 2025",
    "education.e2.meta": "192 hours · Faculty of Engineering · Virtual",
    "education.e3.title": "Elements of Machine Learning",
    "education.e3.when": "Nov – Dec 2025",
    "education.e3.meta":
      "30 hours · Institute of Extension and Research · Virtual",
    "education.viewCert": "View certificate",

    "cases.tag": "Case studies",
    "cases.title": "Deep-dive case studies",
    "cases.desc":
      "Four projects: the problem, the constraints, and what I actually did — not just the outcome.",
    "cases.label.problem": "Problem",
    "cases.label.did": "What I did",
    "cases.label.stack": "Stack",
    "cases.label.result": "Result",
    "cases.label.status": "Status",

    "cases.c1.title": "Academic demand-forecasting system",
    "cases.c1.role": "Self-initiated · Full design & development",
    "cases.c1.when": "Feb – Jul 2026",
    "cases.c1.problem":
      "Slot planning for courses and continuing-education programs relied on manual judgment, with no demand estimate: the Faculty opened groups that stayed empty and under-provisioned the ones that filled up.",
    "cases.c1.did":
      "I proposed, designed and built the full project over six months. I built a longitudinal panel of 154 subjects per semester (2024-1 to 2026-1) with 13 derived variables — enrollment lags, occupancy, repetition, cancellation and curriculum attributes — and trained three XGBoost regression models, validated with a temporal split: the most recent semesters are held out from training, because with lagged variables a random split would let the model see the future.",
    "cases.c1.result":
      "Documented and handed off to the team for deployment. The most valuable deliverable wasn't the model — it was the diagnosis of why the problem, as currently framed, can't be solved with the data that exists today.",

    "cases.c2.title": "Consolidating scattered historical data",
    "cases.c2.role": "Development Lead · Design & implementation",
    "cases.c2.when": "2025 – 2026",
    "cases.c2.problem":
      "Years of operational data lived in Excel files maintained by different people, with incompatible naming, date formats and categories — data that, in practice, nobody could query.",
    "cases.c2.did":
      "I designed a Python ETL pipeline that consolidated close to 7,000 historical records from three different sources into a relational database: type detection and normalization, category unification, referential-integrity validation, and reporting rows that failed the rules instead of silently dropping them.",
    "cases.c2.result":
      "The historical data became queryable and usable for reporting and analysis — the foundation the forecasting system was later built on.",

    "cases.c3.title": "Power BI management dashboards",
    "cases.c3.role": "BI Developer · Requirements, modeling & build",
    "cases.c3.when": "2024 – 2025",
    "cases.c3.problem":
      "The Unit's semiannual reports were assembled by manually cross-referencing spreadsheets: it took days and the figures were hard to trace back.",
    "cases.c3.did":
      "I gathered requirements with four departments across the Faculty and built five dashboards — classroom management, internships, web requests and internal operations. I also ran six training sessions on Python, SQL and Google Apps Script for twenty people from other areas, to reduce their dependency on the dev team for routine queries.",
    "cases.c3.result":
      "The dashboards now feed the Unit's management report, with figures traceable back to their source.",

    "cases.c4.title": "F1 pit-stop strategy predictor",
    "cases.c4.role": "Open source",
    "cases.c4.when": "Personal · In progress",
    "cases.c4.problem":
      "A pit stop costs a fixed ~20 seconds. The decision of when to make one is made under uncertainty about how much tire performance is left. Can that decision be anticipated from race state?",
    "cases.c4.did":
      "An ETL pipeline over the public Formula 1 API (FastF1) and a binary classifier that predicts whether a driver will pit within the next three laps, based on tire degradation, pace and race state.",
    "cases.c4.status":
      "In progress: closing the feature pipeline, training with temporal validation, and reporting against baselines are still pending.",

    "stack.relationalModel": "Relational modeling",
    "stack.advancedExcel": "Advanced Excel",

    "finding.eyebrow": "The finding",
    "finding.headline": "The model didn't beat repeating last semester's number.",
    "finding.bar1": "Persistence (lag 1)",
    "finding.bar2": "Assume full group",
    "finding.bar3": "Trained XGBoost",
    "finding.val1": "15.77",
    "finding.val2": "16.99",
    "finding.val3": "17.47",
    "finding.caption":
      "Mean absolute error on the test set — lower is better · real project results",
    "finding.p1":
      "The model reached an R² of 0.845, which in a rushed report reads as success. Measured against two trivial, learning-free rules, it landed behind both: a high R² with worse error than persistence means the model learned each subject's typical level, not the change from one semester to the next.",
    "finding.p2":
      "The cause is measurement, not fit: the target is structurally censored. What the system records isn't demand, it's demand truncated by capacity — no amount of extra history fixes that.",
    "finding.p3":
      "I reported the result as-is and documented what it would take to fix: systematically logging over-capacity requests and expressed demand — the only uncensored signals available.",

    "skills.tag": "Skills",
    "skills.title": "What I work with",
    "skills.desc": "Technologies and tools I use most often.",
    "skills.data": "Data & analysis",
    "skills.db": "SQL & databases",
    "skills.bi": "BI & reporting",
    "skills.infra": "Infrastructure",

    "contact.tag": "Contact",
    "contact.title": "I'm looking for my first full-time role in data or development.",
    "contact.desc":
      "If you have an opening where someone needs to write the SQL, build the pipeline, and explain the result to the decision-maker, let's talk.",
    "contact.formName": "Name",
    "contact.formEmail": "Email",
    "contact.formMessage": "Message",
    "contact.placeholderName": "Your name",
    "contact.placeholderEmail": "you@email.com",
    "contact.placeholderMessage": "Tell me about your project...",
    "contact.submit": "Send message",
    "contact.cvValue": "Download PDF",

    "footer.tagline": "Handmade, no frameworks.",
    "footer.top": "Back to top",
  },
};
