// Datos del cronograma basados en el archivo Nuevo_Cronograma.txt
const cronogramaData = [
    {
        semana: "1",
        fechas: "8 - 12 de Septiembre",
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
        fechas: "15 - 19 de Septiembre",
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
        fechas: "22 - 26 de Septiembre",
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
        fechas: "29 Sep - 3 Oct",
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
        fechas: "Viernes 3 de Octubre",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo de la página DAE y chatbot SIMBOT para la semana"
        ],
        entregable: "Reporte semanal de avances página DAE y chatbot SIMBOT",
        progreso: 90
    },
    {
        semana: "5",
        fechas: "6 - 10 de Octubre",
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
        fechas: "Viernes 10 Octubre",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 80
    },
    {
        semana: "6",
        fechas: "14 - 17 de Octubre",
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
        fechas: "Viernes 17 Octubre",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 70
    },
    {
        semana: "7",
        fechas: "20 - 24 de Octubre",
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
        fechas: "Viernes 24 Octubre",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 60
    },
    {
        semana: "8",
        fechas: "27 - 31 de Octubre",
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
        fechas: "Viernes 31 Octubre",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 50
    },
    {
        semana: "9",
        fechas: "4 - 7 de Noviembre",
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
        fechas: "Viernes 7 de Noviembre",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 40
    },
    {
        semana: "10",
        fechas: "10 - 14 de Noviembre",
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
        fechas: "Viernes 14 Noviembre",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 30
    },
    {
        semana: "11",
        fechas: "18 - 21 de Noviembre",
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
        fechas: "Viernes 21 Noviembre",
        fase: "Seguimiento DAE y SIMBOT",
        tareas: [
            "Seguimiento y desarrollo página DAE y chatbot SIMBOT"
        ],
        entregable: "Reporte semanal de avances",
        progreso: 20
    },
    {
        semana: "12",
        fechas: "24 - 28 de Noviembre",
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
let currentYear = 2024;

// Mapeo de fases a clases CSS
const phaseClasses = {
    'Inmersión y Análisis': 'phase-inmersion',
    'Planificación y Definición': 'phase-planificacion',
    'Desarrollo y Pruebas': 'phase-desarrollo',
    'Entrega Final': 'phase-entrega',
    'Seguimiento DAE y SIMBOT': 'phase-seguimiento'
};

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
    // Botones de vista
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchView(this.dataset.view);
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

    // Navegación del calendario
    document.getElementById('prevMonth').addEventListener('click', () => {
        navigateMonth(-1);
    });
    
    document.getElementById('nextMonth').addEventListener('click', () => {
        navigateMonth(1);
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

    // Mostrar vista seleccionada
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
        case 'calendar':
            renderCalendarView();
            break;
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
                    <div class="progress-fill" style="width: ${item.progreso}%"></div>
                </div>
                <span>${item.progreso}%</span>
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
                        <div class="progress-fill" style="width: ${item.progreso}%"></div>
                    </div>
                    <span>Progreso: ${item.progreso}%</span>
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
                    ${item.progreso}%
                </span>
            </div>
        `;

        row.addEventListener('click', () => showDetails(item));
        ganttBody.appendChild(row);
    });
}

function renderCalendarView() {
    const calendarGrid = document.getElementById('calendarGrid');
    const currentMonthElement = document.getElementById('currentMonth');
    
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    currentMonthElement.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    
    // Limpiar grid
    calendarGrid.innerHTML = '';
    
    // Días de la semana
    const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        dayHeader.style.fontWeight = 'bold';
        dayHeader.style.textAlign = 'center';
        dayHeader.style.padding = '10px';
        calendarGrid.appendChild(dayHeader);
    });
    
    // Obtener primer día del mes y número de días
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    // Días vacíos al inicio
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Días del mes
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        // Verificar si hay tareas en este día
        const hasTask = filteredData.some(item => {
            return isDateInRange(day, currentMonth, currentYear, item.fechas);
        });
        
        if (hasTask) {
            dayElement.classList.add('has-task');
            dayElement.addEventListener('click', () => {
                const tasksForDay = filteredData.filter(item => 
                    isDateInRange(day, currentMonth, currentYear, item.fechas)
                );
                showDayDetails(day, tasksForDay);
            });
        }
        
        calendarGrid.appendChild(dayElement);
    }
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

function navigateMonth(direction) {
    currentMonth += direction;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    } else if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendarView();
}

function showDetails(item) {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    
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
            <div class="progress-fill" style="width: ${item.progreso}%"></div>
        </div>
        <p><strong>${item.progreso}% completado</strong></p>
    `;
    
    modal.style.display = 'block';
}

function showDayDetails(day, tasks) {
    const modal = document.getElementById('detailModal');
    const modalBody = document.getElementById('modalBody');
    
    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    
    modalBody.innerHTML = `
        <h2>${day} de ${monthNames[currentMonth]} ${currentYear}</h2>
        <h3>Actividades programadas:</h3>
        ${tasks.map(task => `
            <div style="background: white; padding: 15px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                <h4>Semana ${task.semana} - ${task.fase}</h4>
                <ul>
                    ${task.tareas.map(tarea => `<li>${tarea}</li>`).join('')}
                </ul>
                <p><strong>Entregable:</strong> ${task.entregable}</p>
            </div>
        `).join('')}
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('detailModal').style.display = 'none';
}

function updateStats() {
    const totalWeeks = filteredData.length;
    const phases = [...new Set(filteredData.map(item => item.fase))];
    const avgProgress = Math.round(filteredData.reduce((sum, item) => sum + item.progreso, 0) / totalWeeks);
    
    document.getElementById('totalWeeks').textContent = totalWeeks;
    document.getElementById('totalPhases').textContent = phases.length;
    document.getElementById('progressPercent').textContent = `${avgProgress}%`;
    document.getElementById('overallProgress').style.width = `${avgProgress}%`;
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