# 📅 Sistema de Gestión de Cronograma - Prácticas Profesionales 2025

<div align="center">
  <img src="https://img.shields.io/badge/Versión-2.0.0-blue?style=for-the-badge" alt="Versión 2.0.0">
  <img src="https://img.shields.io/badge/Estado-En%20Desarrollo-success?style=for-the-badge" alt="Estado En Desarrollo">
  <img src="https://img.shields.io/badge/Tecnología-HTML5%20%7C%20CSS3%20%7C%20JavaScript-orange?style=for-the-badge" alt="Tecnologías">
  <img src="https://img.shields.io/badge/Licencia-MIT-green?style=for-the-badge" alt="Licencia MIT">
  <img src="https://img.shields.io/badge/Responsive-Sí-brightgreen?style=for-the-badge" alt="Responsive">
</div>

## 🎯 Descripción del Proyecto

Sistema web interactivo y moderno para la gestión, seguimiento y visualización del cronograma de prácticas profesionales del programa **Desarrollo de Aplicaciones Empresariales (DAE)**. La aplicación permite monitorear el progreso de 16 semanas de actividades distribuidas en 5 fases principales del proyecto "Respuestas Tipo con IA".

### 🏢 Información Institucional
- **Practicante**: Antony Stiven Salcedo Rodriguez
- **Ingenieros Supervisores**: 
  - Ernesto Stiven Roa Patiño
  - Angie Paola Cuellar Olano
  - Natalia Vargas Rodriguez
- **Período**: Septiembre - Noviembre 2025
- **Proyecto**: Sistema de Respuestas Tipo con Inteligencia Artificial

## ✨ Características Principales

### 🎨 **Interfaz y Diseño**
- **Diseño Glassmorphism**: Efectos de cristal esmerilado con transparencias
- **Gradientes Modernos**: Paleta azul-púrpura con transiciones suaves
- **Animaciones Fluidas**: Transiciones CSS3 y efectos hover interactivos
- **Responsive Design**: Adaptable a dispositivos móviles, tablets y desktop
- **Barras de Scroll Personalizadas**: Diseño coherente en toda la aplicación
- **Controles Mejorados**: Desplegables con bordes redondeados y efectos modernos

### 📊 **Vistas de Visualización**
1. **📋 Vista Tabla**: Tabla interactiva con información detallada
2. **⏰ Línea de Tiempo**: Visualización cronológica con marcadores
3. **📈 Vista Gantt**: Diagrama de barras para seguimiento temporal

### 🔧 **Funcionalidades Avanzadas**
- **🔍 Búsqueda Inteligente**: Filtrado en tiempo real por contenido
- **🏷️ Filtros por Fase**: Segmentación por etapas del proyecto
- **📊 Estadísticas Dinámicas**: Panel lateral con métricas en tiempo real
- **🎯 Seguimiento de Progreso**: Sistema configurable de porcentajes
- **📱 Modal Interactivo**: Detalles expandidos para cada semana
- **💾 Exportación de Datos**: Funcionalidad de descarga en JSON
- **🎭 Efectos Visuales**: Animaciones de carga y transiciones

### 📈 **Sistema de Progreso Configurable**
- Porcentajes personalizables por semana en el objeto `weeklyProgress`
- Soporte para valores 0% (corregido el bug de conversión automática a 100%)
- Visualización en barras de progreso con animaciones
- Cálculo automático de estadísticas generales

## 🚀 Tecnologías y Herramientas

### **Frontend**
- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Flexbox y Grid Layout
  - Animaciones y transiciones
  - Variables CSS personalizadas
  - Media queries para responsive
  - Efectos glassmorphism
- **JavaScript ES6+**:
  - Manipulación del DOM
  - Event listeners
  - Funciones arrow
  - Template literals
  - Módulos y funciones puras

### **Librerías Externas**
- **Font Awesome 6.0.0**: Iconografía moderna y consistente

### **Herramientas de Desarrollo**
- **Git**: Control de versiones
- **GitHub**: Repositorio y colaboración
- **Semantic Versioning**: Versionado del proyecto

## 📋 Estructura del Proyecto

```
Cronograma-practicas/
├── 📁 .github/                    # Configuración de GitHub
│   ├── 📁 ISSUE_TEMPLATE/
│   │   ├── 🐛 bug_report.md
│   │   └── ✨ feature_request.md
│   └── 📄 pull_request_template.md
├── 📄 .gitignore                  # Archivos ignorados por Git
├── 📄 CHANGELOG.md               # Historial de cambios
├── 📄 CONTRIBUTING.md            # Guía de contribución
├── 📄 LICENSE                    # Licencia MIT
├── 📄 README.md                  # Documentación principal
├── 📁 Cronograma/                # Datos del cronograma
│   ├── 📄 Cronograma.txt
│   └── 📄 Nuevo_Cronograma.txt
├── 📁 css/
│   └── 🎨 styles.css             # Estilos principales (663 líneas)
├── 📄 index.html                 # Página principal (137 líneas)
└── 📁 js/
    └── ⚡ script.js              # Lógica de la aplicación (687 líneas)
```

## 🎓 Fases del Proyecto Académico

| Fase | Descripción | Semanas | Progreso |
|------|-------------|---------|----------|
| 🔍 **Inmersión y Análisis** | Análisis del proyecto IA y comprensión de requerimientos | 1-3 | ✅ Completado |
| 🏗️ **Planificación y Definición** | Diseño de arquitectura y documentación técnica | 4-7 | 🔄 En progreso |
| 🧪 **Desarrollo y Pruebas** | Implementación del código y testing | 8-11 | ⏳ Pendiente |
| 📦 **Entrega Final** | Documentación final y presentación | 12 | ⏳ Pendiente |
| 🤖 **Seguimiento DAE y SIMBOT** | Desarrollo paralelo de página DAE y chatbot | V-4 a V-11 | 🔄 Continuo |

## 🛠️ Instalación y Configuración

### **Prerrequisitos**
- Navegador web moderno (Chrome 90+, Firefox 88+, Safari 14+)
- Servidor web local (opcional para desarrollo)
- Git (para clonar el repositorio)

### **Instalación Rápida**

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Toony-007/Cronograma-Actividades-Inicial-DAE-.git
   cd Cronograma-Actividades-Inicial-DAE-
   ```

2. **Abrir la aplicación**
   
   **Opción A: Directamente en el navegador**
   ```bash
   # Abrir index.html en tu navegador preferido
   start index.html  # Windows
   open index.html   # macOS
   xdg-open index.html # Linux
   ```
   
   **Opción B: Servidor local**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js (con http-server)
   npx http-server -p 8000
   ```
   
   Luego visitar: `http://localhost:8000`

### **Configuración de Progreso**

Para modificar los porcentajes de progreso, edita el objeto `weeklyProgress` en `js/script.js` (línea 246):

```javascript
const weeklyProgress = {
    "1": { progreso: 100 },   // Semana 1: 100% completado
    "2": { progreso: 85 },    // Semana 2: 85% completado
    "V-4": { progreso: 0 },   // Viernes 4: Sin progreso
    // ... más configuraciones
};
```

## 🎨 Mejoras de Diseño Implementadas

### **🔄 Sistema de Desplegables Modernizado**
- **Bordes Redondeados**: Radio de 30px para aspecto suave
- **Gradientes Sutiles**: Fondo con gradiente linear para profundidad
- **Sombras Multicapa**: Box-shadow con efectos flotantes
- **Efectos Interactivos**:
  - **Hover**: Elevación sutil (-1px) con sombra mejorada
  - **Focus**: Transformación (-2px) y resaltado azul
- **Iconografía SVG**: Flechas personalizadas integradas
- **Transiciones**: Animaciones suaves de 0.3s

### **📊 Tabla de Cronograma Renovada**
- **Efectos Glassmorphism**: Transparencias y blur effects
- **Gradientes en Encabezados**: Colores degradados modernos
- **Animaciones Hover**: Transformaciones y elevación en filas
- **Estados Visuales**: Indicadores para semanas completadas
- **Barras de Progreso**: Animaciones pulsantes

### **⚡ Optimizaciones de Rendimiento**
- **Lazy Loading**: Carga diferida de elementos
- **Debounce**: En funciones de búsqueda y filtrado
- **CSS Optimizado**: Uso eficiente de selectores
- **JavaScript Modular**: Funciones reutilizables

## 📊 Métricas del Proyecto

- **📝 Líneas de Código**: ~1,487 líneas totales
  - HTML: 137 líneas
  - CSS: 663 líneas
  - JavaScript: 687 líneas
- **🎯 Semanas Totales**: 16 semanas académicas
- **📋 Fases del Proyecto**: 5 fases principales
- **🔧 Funcionalidades**: 15+ características implementadas
- **📱 Vistas**: 3 modos de visualización
- **🎨 Animaciones**: 10+ efectos CSS

## 🤝 Contribución y Desarrollo

### **Guía de Contribución**

1. **Fork** el repositorio
2. **Crear** una rama para tu feature:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. **Commit** tus cambios:
   ```bash
   git commit -m "feat: agregar nueva funcionalidad"
   ```
4. **Push** a la rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. **Crear** un Pull Request

### **Convenciones de Código**
- **HTML**: Usar elementos semánticos
- **CSS**: Metodología BEM para clases
- **JavaScript**: ES6+ con funciones puras
- **Commits**: Conventional Commits format

### **Roadmap de Desarrollo**
- [ ] 🌙 Modo oscuro/claro
- [ ] 📊 Gráficos interactivos con Chart.js
- [ ] 💾 Persistencia local con localStorage
- [ ] 🔔 Sistema de notificaciones
- [ ] 📱 PWA (Progressive Web App)
- [ ] 🌐 Internacionalización (i18n)

## 📝 Licencia

Este proyecto está licenciado bajo la **Licencia MIT**. Ver el archivo [LICENSE](LICENSE) para más detalles.

```
MIT License

Copyright (c) 2025 Antony Stiven Salcedo Rodriguez

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

## 📞 Contacto y Soporte

### **Desarrollador Principal**
- **👨‍💻 Nombre**: Antony Stiven Salcedo Rodriguez
- **📧 Email**: [salcedoantony007@gmail.com](mailto:salcedoantony007@gmail.com)
- **🐙 GitHub**: [@Toony-007](https://github.com/Toony-007)
- **💼 LinkedIn**: [Antony Salcedo](https://linkedin.com/in/antony-salcedo)

### **Enlaces del Proyecto**
- **🌐 Repositorio**: [Cronograma-Actividades-Inicial-DAE-](https://github.com/Toony-007/Cronograma-Actividades-Inicial-DAE-)
- **📋 Issues**: [Reportar problemas](https://github.com/Toony-007/Cronograma-Actividades-Inicial-DAE-/issues)
- **🔄 Pull Requests**: [Contribuir](https://github.com/Toony-007/Cronograma-Actividades-Inicial-DAE-/pulls)

## 🙏 Agradecimientos

- **🎓 Ingenieros Supervisores**: Por su guía técnica y académica
- **🏫 Institución Educativa**: Por proporcionar el marco de prácticas
- **👥 Comunidad Open Source**: Por las herramientas y recursos
- **🎨 Diseñadores UI/UX**: Por la inspiración en tendencias modernas
- **📚 Documentación**: MDN Web Docs, CSS-Tricks, y Stack Overflow

## 📈 Estadísticas del Repositorio

<div align="center">
  <img src="https://img.shields.io/github/stars/Toony-007/Cronograma-Actividades-Inicial-DAE-?style=social" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/Toony-007/Cronograma-Actividades-Inicial-DAE-?style=social" alt="GitHub Forks">
  <img src="https://img.shields.io/github/watchers/Toony-007/Cronograma-Actividades-Inicial-DAE-?style=social" alt="GitHub Watchers">
</div>

---

<div align="center">
  <h3>🎯 Hecho con ❤️ para el programa DAE 2025</h3>
  <p><strong>⭐ ¡No olvides dar una estrella si te gustó el proyecto! ⭐</strong></p>
  <p><em>"La excelencia no es un acto, sino un hábito." - Aristóteles</em></p>
</div>