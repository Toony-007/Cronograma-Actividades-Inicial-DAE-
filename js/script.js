// Datos del cronograma
const cronogramaData = [
    {
        semana: 1,
        fechas: "8 - 12 de Septiembre",
        fase: "Inmersión y Análisis",
        tareas: [
            "Analizar la presentación del 'Proyecto Respuestas Tipo con IA'.",
            "Estudiar a fondo la documentación funcional entregada.",
            "Revisar la grabación de la explicación del código."
        ],
        entregable: {
            titulo: "Documento de Entendimiento Inicial:",
            items: [
                "Resumen de tu comprensión del problema.",
                "Listado consolidado de dudas iniciales."
            ]
        }
    },
    {
        semana: 2,
        fechas: "15 - 19 de Septiembre",
        fase: "Inmersión y Análisis",
        tareas: [
            "Configurar el entorno en Google Colab para cargar y ejecutar el código.",
            "Analizar el código: identificar librerías, funciones y lógica principal.",
            "Documentar el flujo de datos dentro del script."
        ],
        entregable: {
            titulo: "Informe de Análisis de Código:",
            items: [
                "Diagrama de flujo del código.",
                "Observaciones sobre la estructura.",
                "Listado de preguntas técnicas específicas."
            ]
        }
    },
    {
        semana: 3,
        fechas: "22 - 26 de Septiembre",
        fase: "Inmersión y Análisis",
        tareas: [
            "Investigar los nuevos formatos y reglas de consulta.",
            "Contrastar el funcionamiento de la POC con los requerimientos vigentes.",
            "Elaborar un listado detallado de las divergencias."
        ],
        entregable: {
            titulo: "Matriz de Brechas (Gap Analysis):",
            items: [
                "Tabla comparando 'Funcionamiento POC' vs. 'Requerimiento Actual'."
            ]
        }
    },
    {
        semana: 4,
        fechas: "29 de Sep - 3 de Oct",
        fase: "Planificación y Definición",
        tareas: [
            "Redactar una propuesta de alcance basada en la matriz de brechas.",
            "Definir objetivos SMART para el proyecto hasta el 30 de noviembre."
        ],
        entregable: {
            titulo: "Borrador del Alcance del Proyecto:",
            items: [
                "Documento formal para revisión, detallando las metas de la implementación."
            ]
        }
    },
    {
        semana: 5,
        fechas: "6 - 10 de Octubre",
        fase: "Planificación y Definición",
        tareas: [
            "Diseñar plantillas para la documentación técnica y de usuario.",
            "Definir indicadores de éxito para medir la precisión del modelo.",
            "Esbozar un plan de pruebas básico."
        ],
        entregable: {
            titulo: "Plan de Documentación y Pruebas:",
            items: [
                "Índice y estructura de los documentos a generar.",
                "Métricas de evaluación.",
                "Listado inicial de casos de prueba."
            ]
        }
    },
    {
        semana: 6,
        fechas: "14 - 17 de Octubre",
        fase: "Planificación y Definición",
        tareas: [
            "Crear un diagrama de arquitectura para el nuevo flujo de datos.",
            "Diseñar un mockup simple de la interfaz de usuario (el 'front')."
        ],
        entregable: {
            titulo: "Diagrama de Arquitectura y Mockup:",
            items: [
                "Documento visual con el diseño técnico y la propuesta de interfaz."
            ]
        }
    },
    {
        semana: 7,
        fechas: "20 - 24 de Octubre",
        fase: "Planificación y Definición",
        tareas: [
            "Realizar ajustes a los documentos de planificación según la retroalimentación.",
            "Organizar y empaquetar toda la documentación de la fase."
        ],
        entregable: {
            titulo: "HITO 1: Paquete de Documentación de Planificación:",
            items: [
                "Entrega formal de todos los documentos de la Fase 2."
            ]
        }
    },
    {
        semana: 8,
        fechas: "27 - 31 de Octubre",
        fase: "Desarrollo y Pruebas",
        tareas: [
            "Escribir y probar el script de conexión a la base de datos misional.",
            "Implementar las consultas SQL necesarias para la extracción de datos.",
            "Realizar pruebas unitarias de la conexión."
        ],
        entregable: {
            titulo: "Módulo de Conexión a BD:",
            items: [
                "Archivo .py funcional y documentado para la conexión."
            ]
        }
    },
    {
        semana: 9,
        fechas: "4 - 7 de Noviembre",
        fase: "Desarrollo y Pruebas",
        tareas: [
            "Modificar el código para que procese datos desde la BD.",
            "Actualizar la lógica de generación de respuestas según nuevos formatos.",
            "Iniciar la documentación técnica de los nuevos módulos."
        ],
        entregable: {
            titulo: "Avance de Código y Documentación Técnica:",
            items: [
                "Versión actualizada del código y borrador de su documentación."
            ]
        }
    },
    {
        semana: 10,
        fechas: "10 - 14 de Noviembre",
        fase: "Desarrollo y Pruebas",
        tareas: [
            "Ejecutar el proceso completo: consulta a BD, procesamiento y generación de respuesta.",
            "Utilizar los casos de prueba definidos para validar el funcionamiento.",
            "Registrar y clasificar todos los bugs encontrados."
        ],
        entregable: {
            titulo: "Informe de Resultados de Pruebas:",
            items: [
                "Documento con resultados, capturas de pantalla de errores y lista de bugs."
            ]
        }
    },
    {
        semana: 11,
        fechas: "18 - 21 de Noviembre",
        fase: "Desarrollo y Pruebas",
        tareas: [
            "Priorizar y corregir los errores reportados en las pruebas.",
            "Finalizar la redacción de la documentación técnica.",
            "Redactar la primera versión completa de la guía de usuario."
        ],
        entregable: {
            titulo: "Versión Estable del Código y Documentación Completa:",
            items: [
                "Código corregido y borradores finales de la documentación."
            ]
        }
    },
    {
        semana: 12,
        fechas: "24 - 28 de Noviembre",
        fase: "Entrega Final",
        tareas: [
            "Realizar una última revisión y validación del código y la documentación.",
            "Organizar el trabajo en una estructura de carpetas limpia.",
            "Preparar una breve presentación o demo de los avances."
        ],
        entregable: {
            titulo: "HITO 2: Paquete Final de Entrega:",
            items: [
                "Carpeta comprimida con el código fuente, documentación y presentación de resultados."
            ]
        }
    }
];

// Variables globales
let isCompactView = false;
let currentWeek = getCurrentWeek();

// Función para obtener la semana actual basada en la fecha
function getCurrentWeek() {
    const now = new Date();
    const currentMonth = now.getMonth() + 1; // JavaScript months are 0-indexed
    const currentDay = now.getDate();
    
    // Lógica simplificada para determinar la semana actual
    if (currentMonth === 9) { // Septiembre
        if (currentDay >= 8 && currentDay <= 12) return 1;
        if (currentDay >= 15 && currentDay <= 19) return 2;
        if (currentDay >= 22 && currentDay <= 26) return 3;
        if (currentDay >= 29) return 4;
    } else if (currentMonth === 10) { // Octubre
        if (currentDay <= 3) return 4;
        if (currentDay >= 6 && currentDay <= 10) return 5;
        if (currentDay >= 14 && currentDay <= 17) return 6;
        if (currentDay >= 20 && currentDay <= 24) return 7;
        if (currentDay >= 27) return 8;
    } else if (currentMonth === 11) { // Noviembre
        if (currentDay <= 7) return 9;
        if (currentDay >= 10 && currentDay <= 14) return 10;
        if (currentDay >= 18 && currentDay <= 21) return 11;
        if (currentDay >= 24) return 12;
    }
    
    return 1; // Default to week 1
}

// Función para renderizar el cronograma
function renderCronograma(data = cronogramaData) {
    const container = document.getElementById('cronograma');
    
    // Crear tabla
    const table = document.createElement('table');
    table.className = 'cronograma-table';
    
    // Crear encabezado
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th style="width: 80px; text-align: center; padding: 15px; background: linear-gradient(135deg, #2c3e50, #34495e); color: white; font-weight: bold;">Semana</th>
        <th style="width: 200px; text-align: center; padding: 15px; background: linear-gradient(135deg, #2c3e50, #34495e); color: white; font-weight: bold;">Rango de Fechas</th>
        <th style="width: 220px; text-align: center; padding: 15px; background: linear-gradient(135deg, #2c3e50, #34495e); color: white; font-weight: bold;">Fase del Proyecto</th>
        <th style="text-align: center; padding: 15px; background: linear-gradient(135deg, #2c3e50, #34495e); color: white; font-weight: bold;">Tareas Detalladas</th>
        <th style="text-align: center; padding: 15px; background: linear-gradient(135deg, #2c3e50, #34495e); color: white; font-weight: bold;">Entregable Semanal / Hito</th>
    `;
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    // Crear cuerpo de la tabla
    const tbody = document.createElement('tbody');
    
    data.forEach(week => {
        const row = document.createElement('tr');
        row.className = 'week-row fade-in';
        
        // Determinar el estado de la semana
        if (week.semana < currentWeek) {
            row.classList.add('completed');
        } else if (week.semana === currentWeek) {
            row.classList.add('current');
        }
        
        // Crear celdas
        const weekCell = document.createElement('td');
        weekCell.className = 'week-cell';
        weekCell.innerHTML = `<div class="week-number">${week.semana}</div>`;
        
        const dateCell = document.createElement('td');
        dateCell.className = 'week-cell';
        dateCell.innerHTML = `<div class="date-range">${week.fechas}</div>`;
        
        const phaseCell = document.createElement('td');
        phaseCell.className = 'week-cell';
        phaseCell.innerHTML = `<div class="phase">${week.fase}</div>`;
        
        const tasksCell = document.createElement('td');
        tasksCell.className = 'week-cell';
        const tasksList = week.tareas.map(task => `<li>${task}</li>`).join('');
        tasksCell.innerHTML = `<div class="tasks"><ul>${tasksList}</ul></div>`;
        
        const deliverableCell = document.createElement('td');
        deliverableCell.className = 'week-cell';
        const deliverableItems = week.entregable.items.map(item => `${item}`).join('<br>');
        deliverableCell.innerHTML = `
            <div class="deliverable">
                <strong>${week.entregable.titulo}</strong>
                ${deliverableItems}
            </div>
        `;
        
        row.appendChild(weekCell);
        row.appendChild(dateCell);
        row.appendChild(phaseCell);
        row.appendChild(tasksCell);
        row.appendChild(deliverableCell);
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    container.innerHTML = '';
    container.appendChild(table);
}

// Función para alternar vista compacta
function toggleCompactView() {
    isCompactView = !isCompactView;
    const container = document.querySelector('.timeline-container');
    const button = document.getElementById('toggleView');
    
    if (isCompactView) {
        container.classList.add('compact-view');
        button.textContent = 'Vista Normal';
    } else {
        container.classList.remove('compact-view');
        button.textContent = 'Vista Compacta';
    }
}

// Función de búsqueda
function searchCronograma(query) {
    if (!query.trim()) {
        renderCronograma();
        return;
    }
    
    const filteredData = cronogramaData.filter(week => {
        const searchText = (
            week.fechas + ' ' +
            week.fase + ' ' +
            week.tareas.join(' ') + ' ' +
            week.entregable.titulo + ' ' +
            week.entregable.items.join(' ')
        ).toLowerCase();
        
        return searchText.includes(query.toLowerCase());
    });
    
    renderCronograma(filteredData);
    
    // Resaltar términos de búsqueda
    highlightSearchTerms(query);
}

// Función para resaltar términos de búsqueda
function highlightSearchTerms(query) {
    const container = document.getElementById('cronograma');
    const walker = document.createTreeWalker(
        container,
        NodeFilter.SHOW_TEXT,
        null,
        false
    );
    
    const textNodes = [];
    let node;
    
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    
    textNodes.forEach(textNode => {
        const text = textNode.textContent;
        const regex = new RegExp(`(${query})`, 'gi');
        
        if (regex.test(text)) {
            const highlightedText = text.replace(regex, '<span class="highlight">$1</span>');
            const span = document.createElement('span');
            span.innerHTML = highlightedText;
            textNode.parentNode.replaceChild(span, textNode);
        }
    });
}



// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar cronograma inicial
    renderCronograma();
    
    // Event listener para el botón de vista compacta
    document.getElementById('toggleView').addEventListener('click', toggleCompactView);
    
    // Event listener para la búsqueda
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        searchCronograma(e.target.value);
    });
    
    // Event listener para limpiar búsqueda con Escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            e.target.value = '';
            renderCronograma();
        }
    });
    
    // Animación de entrada mejorada para las filas
    setTimeout(() => {
        const rows = document.querySelectorAll('.week-row');
        rows.forEach((row, index) => {
            row.style.opacity = '0';
            row.style.transform = 'translateY(30px) scale(0.95)';
            setTimeout(() => {
                row.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                row.style.opacity = '1';
                row.style.transform = 'translateY(0) scale(1)';
            }, index * 150);
        });
    }, 200);
    
    // Animación para las tarjetas de estadísticas
    setTimeout(() => {
        const statCards = document.querySelectorAll('.stat-card');
        statCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.9)';
            setTimeout(() => {
                card.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, 1000 + (index * 200));
        });
    }, 100);
});

// Función para exportar cronograma (funcionalidad adicional)
function exportCronograma() {
    const data = cronogramaData.map(week => ({
        Semana: week.semana,
        Fechas: week.fechas,
        Fase: week.fase,
        Tareas: week.tareas.join('; '),
        Entregable: `${week.entregable.titulo} ${week.entregable.items.join('; ')}`
    }));
    
    console.log('Datos del cronograma:', data);
    alert('Datos del cronograma exportados a la consola del navegador');
}

// Función para marcar semana como completada (funcionalidad adicional)
function markWeekCompleted(weekNumber) {
    const rows = document.querySelectorAll('.week-row');
    if (rows[weekNumber - 1]) {
        rows[weekNumber - 1].classList.add('completed');
        rows[weekNumber - 1].classList.remove('current');
    }
    
    if (weekNumber >= currentWeek) {
        currentWeek = weekNumber + 1;
    }
}

// Agregar funcionalidad de click en las filas para marcar como completadas
document.addEventListener('click', function(e) {
    const row = e.target.closest('.week-row');
    if (row && e.ctrlKey) { // Ctrl + click para marcar como completada
        const weekNumber = parseInt(row.querySelector('.week-number').textContent);
        markWeekCompleted(weekNumber);
    }
});