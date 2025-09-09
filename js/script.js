// Datos del cronograma basados en el archivo Nuevo_Cronograma.txt
const cronogramaData = [
    {
        semana: "1",
        fechas: "8 - 12 de Septiembre 2025",
        fase: "Inmersión y Análisis",
        tareas: [
            "Analizar presentación del 'Proyecto Respuestas Tipo con IA'",
            "Estudiar documentación funcional",
            "Revisar grabación de explicación del código"
        ],
        entregable: "Documento de Entendimiento Inicial: Resumen y listado consolidado de dudas iniciales",
        progreso: 100
    },
    {
        semana: "2",
        fechas: "15 - 19 de Septiembre 2025",
        fase: "Inmersión y Análisis",
        tareas: [
            "Configurar entorno en Google Colab",
            "Analizar librerías, funciones y lógica principal",
            "Documentar flujo de datos dentro del script"
        ],
        entregable: "Informe de Análisis de Código: Diagrama de flujo, observaciones y listado de preguntas",
        progreso: 100
    },
    {
        semana: "3",
        fechas: "22 - 26 de Septiembre 2025",
        fase: "Inmersión y Análisis",
        tareas: [
            "Investigar nuevos formatos y reglas de consulta",
            "Contrastar funcionamiento POC vs. requerimientos vigentes",
            "Elaborar listado detallado de divergencias"
        ],
        entregable: "Matriz de Brechas (Gap Analysis): Tabla comparativa de funcionamiento POC vs. requerimientos",
        progreso: 100
    },
    {
        semana: "4",
        fechas: "29 Sep - 3 Oct 2025",
        fase: "Planificación y Definición",
        tareas: [
            "Redactar propuesta de alcance basada en matriz de brechas",
            "Definir objetivos SMART hasta 30 de noviembre"
        ],
        entregable: "Borrador del Alcance: Documento formal con metas",
        progreso: 85
    },
    {
        semana: "V-4",
        fechas: "Viernes 3 de Octubre 2025",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo de la página DAE y chatbot SIMBOT para la semana"
        ],
        entregable: "Reporte semanal de avances página DAE y chatbot SIMBOT",
        progreso: 90
    },
    {
        semana: "5",
        fechas: "6 - 10 de Octubre 2025",
        fase: "Planificación y Definición",
        tareas: [
            "Diseñar plantillas para documentación técnica y usuario",
            "Definir indicadores de éxito",
            "Esbozar plan básico de pruebas"
        ],
        entregable: "Plan de Documentación y Pruebas: Índice, métricas y casos iniciales de prueba",
        progreso: 75
    },
    {
        semana: "V-5",
        fechas: "Viernes 10 Octubre 2025",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 80
    },
    {
        semana: "6",
        fechas: "14 - 17 de Octubre 2025",
        fase: "Planificación y Definición",
        tareas: [
            "Crear diagrama de arquitectura para flujo de datos",
            "Diseñar mockup simple de interfaz de usuario (front)"
        ],
        entregable: "Diagrama de Arquitectura y Mockup: Diseño técnico y propuesta de interfaz",
        progreso: 60
    },
    {
        semana: "V-6",
        fechas: "Viernes 17 Octubre 2025",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 70
    },
    {
        semana: "7",
        fechas: "20 - 24 de Octubre 2025",
        fase: "Planificación y Definición",
        tareas: [
            "Ajustes a documentos por retroalimentación",
            "Organizar y empaquetar documentación de la fase"
        ],
        entregable: "HITO 1: Paquete de Documentación de Planificación",
        progreso: 50
    },
    {
        semana: "V-7",
        fechas: "Viernes 24 Octubre 2025",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 60
    },
    {
        semana: "8",
        fechas: "27 - 31 de Octubre 2025",
        fase: "Desarrollo y Pruebas",
        tareas: [
            "Escribir y probar script de conexión a BD",
            "Implementar consultas SQL para extracción de datos",
            "Realizar pruebas unitarias de la conexión"
        ],
        entregable: "Módulo de Conexión a BD: Archivo funcional y documentado",
        progreso: 40
    },
    {
        semana: "V-8",
        fechas: "Viernes 31 Octubre 2025",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 50
    },
    {
        semana: "9",
        fechas: "4 - 7 de Noviembre 2025",
        fase: "Desarrollo y Pruebas",
        tareas: [
            "Modificar código para datos desde BD",
            "Actualizar lógica de generación de respuestas",
            "Iniciar documentación técnica de nuevos módulos"
        ],
        entregable: "Avance de Código y Documentación Técnica",
        progreso: 30
    },
    {
        semana: "V-9",
        fechas: "Viernes 7 de Noviembre 2025",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 40
    },
    {
        semana: "10",
        fechas: "10 - 14 de Noviembre 2025",
        fase: "Desarrollo y Pruebas",
        tareas: [
            "Pruebas integrales del flujo completo: consulta BD, procesamiento y respuesta",
            "Validar con casos de prueba",
            "Registrar y clasificar bugs"
        ],
        entregable: "Informe de Resultados de Pruebas",
        progreso: 20
    },
    {
        semana: "V-10",
        fechas: "Viernes 14 Noviembre 2025",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 30
    },
    {
        semana: "11",
        fechas: "18 - 21 de Noviembre 2025",
        fase: "Desarrollo y Pruebas",
        tareas: [
            "Corrección y priorización de errores reportados",
            "Finalización documentación técnica",
            "Redacción primera versión completa guía usuario"
        ],
        entregable: "Versión estable de código y documentación",
        progreso: 10
    },
    {
        semana: "V-11",
        fechas: "Viernes 21 Noviembre 2025",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 20
    },
    {
        semana: "12",
        fechas: "24 - 28 de Noviembre 2025",
        fase: "Entrega Final",
        tareas: [
            "Revisión y validación final código y documentación",
            "Organización estructura de carpetas",
            "Preparar demo o presentación de avances"
        ],
        entregable: "HITO 2: Paquete final de entrega: código, documentación y presentación",
        progreso: 0
    }
];

// Variables globales
let currentView = 'table';
let filteredData = [...cronogramaData];
let currentMonth = 8; // Septiembre (0-indexed)
let currentYear = 2025;

// Mapeo de fases a clases CSS
const phaseClasses = {
    'Inmersión y Análisis': 'phase-inmersion',
    'Planificación y Definición': 'phase-planificacion',
    'Desarrollo y Pruebas': 'phase-desarrollo',
    'Entrega Final': 'phase-entrega',
    'Seguimiento DAE y SIMBOT': 'phase-seguimiento'
};

// ========================================
// CONFIGURACIÓN DE PORCENTAJES POR SEMANA
// ========================================
// Aquí puedes modificar fácilmente el porcentaje de progreso de cada semana
// Solo cambia el número después de "progreso:" para cada semana
const weeklyProgress = {
    "1": { progreso: 0 },   // Semana 1: 100% de progreso
    "2": { progreso: 0 },  // Semana 2: 100% de progreso
    "3": { progreso: 0 },  // Semana 3: 100% de progreso
    "4": { progreso: 0 },   // Semana 4: 85% de progreso
    "V-4": { progreso: 0 }, // Viernes 4: 90% de progreso
    "5": { progreso: 0 },   // Semana 5: 75% de progreso
    "V-5": { progreso: 0 }, // Viernes 5: 80% de progreso
    "6": { progreso: 0 },   // Semana 6: 60% de progreso
    "V-6": { progreso: 0 }, // Viernes 6: 70% de progreso
    "7": { progreso: 0 },   // Semana 7: 50% de progreso
    "V-7": { progreso: 0 }, // Viernes 7: 60% de progreso
    "8": { progreso: 0 },   // Semana 8: 40% de progreso
    "V-8": { progreso: 0 }, // Viernes 8: 50% de progreso
    "9": { progreso: 0 },   // Semana 9: 30% de progreso
    "V-9": { progreso: 0 }, // Viernes 9: 40% de progreso
    "10": { progreso: 0 },  // Semana 10: 20% de progreso
    "V-10": { progreso: 0 },// Viernes 10: 30% de progreso
    "11": { progreso: 0 },  // Semana 11: 10% de progreso
    "V-11": { progreso: 0 },// Viernes 11: 20% de progreso
    "12": { progreso: 0 }    // Semana 12: 0% de progreso
};
// ========================================

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    renderCurrentView();
    updateStats();
    animateOnLoad();
}

function setupEventListeners() {
    // Botones de vista (calendario removido)
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const view = this.dataset.view;
            // Solo permitir vistas válidas (sin calendario)
            if (['table', 'timeline', 'gantt'].includes(view)) {
                switchView(view);
            }
        });
    });

    // Filtro de fase
    document.getElementById('phaseFilter').addEventListener('change', function() {
        filterByPhase(this.value);
    });

    // Búsqueda
    document.getElementById('searchInput').addEventListener('input', function() {
        searchTasks(this.value);
    });



    // Modal
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('detailModal').addEventListener('click', function(e) {
        if (e.target === this) closeModal();
    });
}

function switchView(view) {
    // Actualizar botones
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-view="${view}"]`).classList.add('active');

    // Ocultar todas las vistas
    document.querySelectorAll('.view-container').forEach(container => {
        container.classList.remove('active');
    });

    // Mostrar vista seleccionada (calendario removido)
    document.getElementById(`${view}View`).classList.add('active');
    
    currentView = view;
    renderCurrentView();
}

function renderCurrentView() {
    switch(currentView) {
        case 'table':
            renderTableView();
            break;
        case 'timeline':
            renderTimelineView();
            break;
        case 'gantt':
            renderGanttView();
            break;
        // Calendario removido según solicitud del usuario
    }
}

function renderTableView() {
    const tbody = document.getElementById('tableBody');
    tbody.innerHTML = '';

    filteredData.forEach((item, index) => {
        const row = document.createElement('tr');
        row.className = 'week-row';
        row.style.animationDelay = `${index * 0.1}s`;
        
        // Determinar si es la semana actual (ejemplo: semana 4)
        const isCurrentWeek = item.semana === '4';
        if (isCurrentWeek) {
            row.classList.add('current-week');
        }

        // Usar progreso de configuración weeklyProgress (permitir 0%)
        const progressValue = weeklyProgress[item.semana]?.progreso !== undefined ? weeklyProgress[item.semana].progreso : item.progreso;

        row.innerHTML = `
            <td class="week-cell">
                <div class="week-number">${item.semana}</div>
            </td>
            <td class="date-cell">${item.fechas}</td>
            <td class="phase-cell ${phaseClasses[item.fase]}">${item.fase}</td>
            <td class="tasks-cell">
                ${item.tareas.map(tarea => `
                    <div class="task-item">
                        <i class="fas fa-chevron-right"></i>
                        <span>${tarea}</span>
                    </div>
                `).join('')}
            </td>
            <td class="deliverable-cell">${item.entregable}</td>
            <td class="progress-cell">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${progressValue}%"></div>
                </div>
                <span>${progressValue}%</span>
            </td>
        `;

        row.addEventListener('click', () => showDetails(item));
        tbody.appendChild(row);
    });
}

function renderTimelineView() {
    const container = document.getElementById('timelineContainer');
    container.innerHTML = '<div class="timeline-line"></div>';

    filteredData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.2}s`;

        timelineItem.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <h3>Semana ${item.semana} - ${item.fechas}</h3>
                <div class="phase-cell ${phaseClasses[item.fase]}">${item.fase}</div>
                <div class="tasks-section">
                    <h4>Tareas:</h4>
                    <ul>
                        ${item.tareas.map(tarea => `<li>${tarea}</li>`).join('')}
                    </ul>
                </div>
                <div class="deliverable-section">
                    <h4>Entregable:</h4>
                    <p>${item.entregable}</p>
                </div>
                <div class="progress-section">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${weeklyProgress[item.semana]?.progreso !== undefined ? weeklyProgress[item.semana].progreso : item.progreso}%"></div>
                    </div>
                    <span>Progreso: ${weeklyProgress[item.semana]?.progreso !== undefined ? weeklyProgress[item.semana].progreso : item.progreso}%</span>
                </div>
            </div>
        `;

        timelineItem.addEventListener('click', () => showDetails(item));
        container.appendChild(timelineItem);
    });
}

function renderGanttView() {
    const ganttBody = document.getElementById('ganttBody');
    const ganttMonths = document.getElementById('ganttMonths');
    const ganttWeeks = document.getElementById('ganttWeeks');

    // Limpiar contenido
    ganttBody.innerHTML = '';
    ganttMonths.innerHTML = '';
    ganttWeeks.innerHTML = '';

    // Crear encabezados de meses
    const months = ['Septiembre', 'Octubre', 'Noviembre'];
    months.forEach(month => {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'gantt-month';
        monthDiv.textContent = month;
        monthDiv.style.flex = '1';
        ganttMonths.appendChild(monthDiv);
    });

    // Crear barras de Gantt
    filteredData.forEach((item, index) => {
        const row = document.createElement('div');
        row.className = 'gantt-row';
        row.style.animationDelay = `${index * 0.1}s`;

        const weekPosition = getWeekPosition(item.semana);
        const barColor = getPhaseColor(item.fase);
        // Usar progreso de configuración weeklyProgress (permitir 0%)
        const progressValue = weeklyProgress[item.semana]?.progreso !== undefined ? weeklyProgress[item.semana].progreso : item.progreso;

        row.innerHTML = `
            <div class="gantt-label" style="min-width: 200px; padding-right: 20px;">
                <strong>Semana ${item.semana}</strong><br>
                <small>${item.fechas}</small>
            </div>
            <div class="gantt-bar" style="
                background: ${barColor};
                width: ${100 / filteredData.length}%;
                margin-left: ${weekPosition}%;
            ">
                <span style="color: white; padding: 0 10px; font-size: 12px;">
                    ${progressValue}%
                </span>
            </div>
        `;

        row.addEventListener('click', () => showDetails(item));
        ganttBody.appendChild(row);
    });
}



function filterByPhase(phase) {
    if (phase === 'all') {
        filteredData = [...cronogramaData];
    } else {
        filteredData = cronogramaData.filter(item => item.fase === phase);
    }
    renderCurrentView();
    updateStats();
}

function searchTasks(query) {
    if (!query.trim()) {
        filteredData = [...cronogramaData];
    } else {
        const searchTerm = query.toLowerCase();
        filteredData = cronogramaData.filter(item => {
            return item.tareas.some(tarea => tarea.toLowerCase().includes(searchTerm)) ||
                   item.entregable.toLowerCase().includes(searchTerm) ||
                   item.fase.toLowerCase().includes(searchTerm);
        });
    }
    renderCurrentView();
    updateStats();
}



function showDetails(item) {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    
    // Usar progreso de configuración weeklyProgress (permitir 0%)
     const progressValue = weeklyProgress[item.semana]?.progreso !== undefined ? weeklyProgress[item.semana].progreso : item.progreso;
    
    modalBody.innerHTML = `
        <h2>Semana ${item.semana} - ${item.fechas}</h2>
        <div class="phase-cell ${phaseClasses[item.fase]}" style="display: inline-block; margin: 10px 0;">
            ${item.fase}
        </div>
        
        <h3><i class="fas fa-tasks"></i> Tareas Detalladas:</h3>
        <ul style="margin-left: 20px;">
            ${item.tareas.map(tarea => `<li style="margin-bottom: 8px;">${tarea}</li>`).join('')}
        </ul>
        
        <h3><i class="fas fa-flag-checkered"></i> Entregable:</h3>
        <p style="background: #f8f9fa; padding: 15px; border-radius: 8px; border-left: 4px solid #3498db;">
            ${item.entregable}
        </p>
        
        <h3><i class="fas fa-chart-line"></i> Progreso:</h3>
        <div class="progress-bar" style="margin: 10px 0;">
            <div class="progress-fill" style="width: ${progressValue}%"></div>
        </div>
        <p><strong>${progressValue}% completado</strong></p>
    `;
    
    modal.style.display = 'block';
}



function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

function updateStats() {
    // ========================================
    // ESTADÍSTICAS CORREGIDAS - TOTAL: 12 SEMANAS
    // ========================================
    const totalWeeks = 12; // Total correcto de semanas principales (sin contar los viernes)
    
    // Contar semanas completadas basándose en los porcentajes configurados
    const completedWeeks = Object.entries(weeklyProgress)
        .filter(([semana, data]) => {
            // Solo contar semanas principales (no los viernes "V-X")
            return !semana.startsWith('V-') && data.progreso === 100;
        }).length;
    
    const phases = [...new Set(filteredData.map(item => item.fase))];
    
    // Calcular progreso promedio basado en los porcentajes configurados
    const mainWeeks = Object.entries(weeklyProgress).filter(([semana]) => !semana.startsWith('V-'));
    const averageProgress = mainWeeks.reduce((sum, [, data]) => sum + data.progreso, 0) / mainWeeks.length;
    
    // Actualizar elementos del DOM que existen
    const totalWeeksElement = document.getElementById('totalWeeks');
    const totalPhasesElement = document.getElementById('totalPhases');
    const progressPercentElement = document.getElementById('progressPercent');
    const overallProgressElement = document.getElementById('overallProgress');
    
    if (totalWeeksElement) totalWeeksElement.textContent = totalWeeks;
    if (totalPhasesElement) totalPhasesElement.textContent = phases.length;
    
    // Actualizar progreso usando el promedio calculado
    const progressPercentage = Math.round(averageProgress);
    if (progressPercentElement) progressPercentElement.textContent = `${progressPercentage}%`;
    if (overallProgressElement) overallProgressElement.style.width = `${progressPercentage}%`;
}

function animateOnLoad() {
    // Animar elementos al cargar
    const elements = document.querySelectorAll('.header, .view-controls, .stats-panel');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Funciones auxiliares
function getWeekPosition(semana) {
    // Calcular posición aproximada de la semana en el timeline
    const weekNum = parseInt(semana.replace('V-', '')) || parseInt(semana);
    return (weekNum - 1) * 8; // Aproximadamente 8% por semana
}

function getPhaseColor(fase) {
    const colors = {
        'Inmersión y Análisis': 'linear-gradient(135deg, #3498db, #2980b9)',
        'Planificación y Definición': 'linear-gradient(135deg, #e67e22, #d35400)',
        'Desarrollo y Pruebas': 'linear-gradient(135deg, #27ae60, #229954)',
        'Entrega Final': 'linear-gradient(135deg, #e74c3c, #c0392b)',
        'Seguimiento DAE y SIMBOT': 'linear-gradient(135deg, #9b59b6, #8e44ad)'
    };
    return colors[fase] || 'linear-gradient(135deg, #95a5a6, #7f8c8d)';
}

function isDateInRange(day, month, year, dateRange) {
    // Función simplificada para verificar si una fecha está en el rango
    // En una implementación real, se haría un parsing más robusto
    const dateStr = dateRange.toLowerCase();
    const monthNames = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
                       'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
    
    return dateStr.includes(monthNames[month]);
}

// Efectos adicionales
document.addEventListener('mousemove', function(e) {
    // Efecto parallax sutil en el fondo
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.body.style.backgroundPosition = `${mouseX * 20}px ${mouseY * 20}px`;
});

// Animación de carga de barras de progreso
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach((bar, index) => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-out';
            bar.style.width = width;
        }, index * 100);
    });
}

// Llamar animación de barras cuando se renderiza la vista
setInterval(() => {
    if (document.querySelector('.progress-fill')) {
        animateProgressBars();
    }
}, 5000); // Cada 5 segundos

// Exportar datos (funcionalidad adicional)
function exportData(format = 'json') {
    const dataToExport = {
        cronograma: filteredData,
        generatedAt: new Date().toISOString(),
        totalWeeks: filteredData.length,
        phases: [...new Set(filteredData.map(item => item.fase))]
    };
    
    if (format === 'json') {
        const blob = new Blob([JSON.stringify(dataToExport, null, 2)], 
                             { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'cronograma-practicas.json';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// Agregar botón de exportación (opcional)
if (document.querySelector('.filter-group')) {
    const exportBtn = document.createElement('button');
    exportBtn.innerHTML = '<i class="fas fa-download"></i> Exportar';
    exportBtn.className = 'view-btn';
    exportBtn.style.background = 'linear-gradient(135deg, #27ae60, #229954)';
    exportBtn.addEventListener('click', () => exportData());
    document.querySelector('.filter-group').appendChild(exportBtn);
}