# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir al Cronograma de Prácticas Profesionales! Este documento te guiará a través del proceso de contribución.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [¿Cómo puedo contribuir?](#cómo-puedo-contribuir)
- [Proceso de Desarrollo](#proceso-de-desarrollo)
- [Estándares de Código](#estándares-de-código)
- [Reportar Bugs](#reportar-bugs)
- [Sugerir Mejoras](#sugerir-mejoras)

## 📜 Código de Conducta

Este proyecto se adhiere a un código de conducta. Al participar, se espera que mantengas este código. Por favor reporta comportamientos inaceptables.

## 🚀 ¿Cómo puedo contribuir?

### Reportar Bugs 🐛

Los bugs se rastrean como issues de GitHub. Cuando crees un issue de bug, incluye:

- **Título claro y descriptivo**
- **Pasos para reproducir el problema**
- **Comportamiento esperado vs actual**
- **Capturas de pantalla** (si aplica)
- **Información del entorno** (navegador, OS, etc.)

### Sugerir Mejoras ✨

Las sugerencias de mejoras también se rastrean como issues. Incluye:

- **Título claro y descriptivo**
- **Descripción detallada de la mejora**
- **Justificación** de por qué sería útil
- **Ejemplos** de cómo funcionaría

### Pull Requests 🔄

1. **Fork** el repositorio
2. **Crea una rama** desde `master`:
   ```bash
   git checkout -b feature/mi-nueva-caracteristica
   ```
3. **Realiza tus cambios** siguiendo los estándares de código
4. **Commit** tus cambios:
   ```bash
   git commit -m "feat: agregar nueva característica"
   ```
5. **Push** a tu rama:
   ```bash
   git push origin feature/mi-nueva-caracteristica
   ```
6. **Abre un Pull Request**

## 🛠️ Proceso de Desarrollo

### Configuración Local

1. **Clona tu fork**:
   ```bash
   git clone https://github.com/tu-usuario/Cronograma-Actividades-Inicial-DAE-.git
   ```

2. **Navega al directorio**:
   ```bash
   cd Cronograma-Actividades-Inicial-DAE-
   ```

3. **Configura el upstream**:
   ```bash
   git remote add upstream https://github.com/Toony-007/Cronograma-Actividades-Inicial-DAE-.git
   ```

4. **Inicia el servidor local**:
   ```bash
   python -m http.server 8000
   ```

### Flujo de Trabajo

1. **Sincroniza con upstream**:
   ```bash
   git fetch upstream
   git checkout master
   git merge upstream/master
   ```

2. **Crea una nueva rama**:
   ```bash
   git checkout -b feature/nombre-descriptivo
   ```

3. **Desarrolla y prueba** tus cambios

4. **Commit** siguiendo las convenciones

## 📝 Estándares de Código

### HTML
- Usa indentación de 2 espacios
- Usa etiquetas semánticas
- Incluye atributos `alt` en imágenes
- Valida el HTML

### CSS
- Usa indentación de 4 espacios
- Organiza las propiedades alfabéticamente
- Usa nombres de clases descriptivos
- Prefiere flexbox/grid sobre floats
- Usa variables CSS para colores y medidas

### JavaScript
- Usa indentación de 4 espacios
- Usa `const` y `let` en lugar de `var`
- Usa nombres descriptivos para variables y funciones
- Comenta código complejo
- Evita variables globales

### Convenciones de Commit

Usa el formato de [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nueva característica
- `fix:` corrección de bug
- `docs:` cambios en documentación
- `style:` cambios de formato (espacios, comas, etc.)
- `refactor:` refactorización de código
- `test:` agregar o modificar tests
- `chore:` cambios en build, dependencias, etc.

Ejemplos:
```
feat: agregar funcionalidad de búsqueda avanzada
fix: corregir problema con el scroll en móviles
docs: actualizar README con nuevas instrucciones
style: mejorar espaciado en la tabla principal
```

## 🧪 Testing

Antes de enviar un PR:

1. **Prueba en múltiples navegadores**:
   - Chrome/Chromium
   - Firefox
   - Safari (si es posible)
   - Edge

2. **Prueba en diferentes dispositivos**:
   - Desktop
   - Tablet
   - Móvil

3. **Verifica la accesibilidad**:
   - Navegación con teclado
   - Lectores de pantalla
   - Contraste de colores

## 📚 Recursos Útiles

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript.info](https://javascript.info/)
- [A11y Project](https://www.a11yproject.com/)

## ❓ ¿Preguntas?

Si tienes preguntas, puedes:

1. **Crear un issue** con la etiqueta "question"
2. **Contactar** al mantenedor principal
3. **Revisar** issues existentes por respuestas similares

## 🙏 Reconocimientos

Todos los contribuidores serán reconocidos en el README del proyecto. ¡Gracias por hacer este proyecto mejor!

---

¡Esperamos tus contribuciones! 🎉