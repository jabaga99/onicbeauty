# ONIC Beauty - Sitio Web Estático

Una aplicación web estática mobile-first responsive para el salón de belleza ONIC Beauty en Madrid, convertida desde React a HTML, CSS y JavaScript vanilla.

## 🚀 Características

- **Mobile-First Responsive**: Diseñado primero para móviles con adaptación perfecta a tablets y desktop
- **HTML Estático**: Sin dependencias de frameworks, solo HTML, CSS y JavaScript vanilla
- **Diseño Moderno**: Gradientes, animaciones suaves y micro-interacciones
- **Accesibilidad**: Navegación por teclado, ARIA labels y focus management
- **WhatsApp Integration**: Botón flotante y reservas directas por WhatsApp
- **Modal Interactivo**: Detalles de servicios con modal responsive
- **Animaciones CSS**: Efectos de hover, transiciones y animaciones de entrada

## 📁 Estructura del Proyecto

```
onic-beauty-static/
├── index.html          # Página principal
├── styles.css          # Estilos CSS mobile-first
├── script.js           # JavaScript vanilla para funcionalidad
└── README.md           # Este archivo
```

## 🎨 Diseño y Funcionalidades

### Secciones Principales

1. **Header**: Logo, navegación y botón de reserva
2. **Hero**: Título principal, descripción y valoraciones
3. **Servicios**: Grid responsive con cards interactivas
4. **Reseñas**: Testimonios de clientes con estrellas
5. **Información**: Ubicación, horarios, métodos de pago y equipo
6. **Footer**: Información de contacto y call-to-action

### Funcionalidades Interactivas

- **Modal de Servicios**: Click en cualquier servicio para ver detalles
- **WhatsApp Integration**: Reservas directas con mensaje pre-rellenado
- **Animaciones**: Entrada progresiva de elementos con Intersection Observer
- **Responsive Design**: Breakpoints en 768px (tablet) y 1024px (desktop)

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Grid, Flexbox, Custom Properties y animaciones
- **JavaScript ES6+**: Vanilla JS con módulos y funciones modernas
- **Lucide Icons**: Iconografía consistente y moderna
- **Google Fonts**: Tipografía Inter para mejor legibilidad

## 📱 Responsive Breakpoints

```css
/* Mobile First (default) */
/* Hasta 767px */

/* Tablet */
@media (min-width: 768px) {
  /* Estilos para tablet */
}

/* Desktop */
@media (min-width: 1024px) {
  /* Estilos para desktop */
}
```

## 🎯 Servicios Incluidos

1. **Cejas**: Diseño + Depilación con Pinzas + Botox (15€)
2. **Pestañas**: LASH LIFT. Rizado + Tinte + Botox (45€)
3. **Facial**: SKINCARE. Limpieza Facial Profunda (65€)
4. **Micropigmentación**: Varios servicios desde 125€ hasta 390€
5. **Glass Skin**: Microneedling Phibright (165€)

## 📞 Integración WhatsApp

El sitio incluye integración completa con WhatsApp:

- Botón flotante siempre visible
- Mensajes pre-rellenados según el servicio seleccionado
- Reservas directas desde el modal de servicios

**Número configurado**: +34 642 814 899 (ONIC Beauty)

### 🗺️ Google Maps Integrado

El sitio incluye un mapa interactivo de Google Maps:

- **Ubicación exacta**: Calle de Lombía 6, Madrid
- **Pin personalizado** con colores de la marca
- **Info window** con detalles del salón
- **Fallback automático** si no se configura API Key

**Para activar Google Maps**: Ver `GOOGLE_MAPS_SETUP.md` para instrucciones detalladas

## 🚀 Cómo Usar

1. **Abrir el sitio**: Simplemente abrir `index.html` en cualquier navegador
2. **Desarrollo local**: Usar un servidor local para mejor experiencia:
   ```bash
   # Con Python
   python -m http.server 8000
   
   # Con Node.js
   npx serve .
   
   # Con PHP
   php -S localhost:8000
   ```

## 🎨 Personalización

### Colores Principales
```css
:root {
  --primary-pink: #ec4899;
  --primary-purple: #8b5cf6;
  --text-gray: #374151;
  --light-gray: #6b7280;
}
```

### Modificar Servicios
Editar el array `services` en `script.js`:
```javascript
const services = [
  {
    name: "Nombre del Servicio",
    duration: "Duración",
    price: "Precio €",
    category: "Categoría",
    icon: "icono-lucide"
  }
];
```

## 📊 Performance

- **Carga rápida**: Sin dependencias externas pesadas
- **Optimizado**: CSS y JS minificables para producción
- **Lazy Loading**: Animaciones solo cuando los elementos son visibles
- **Accesibilidad**: Cumple estándares WCAG 2.1

## 🔧 Desarrollo

### Estructura CSS
- **Mobile-First**: Estilos base para móvil, media queries para pantallas más grandes
- **CSS Grid**: Layout principal responsive
- **Flexbox**: Alineación y distribución de elementos
- **Custom Properties**: Variables CSS para fácil personalización

### JavaScript Modular
- **Separación de responsabilidades**: Funciones específicas para cada característica
- **Event Delegation**: Manejo eficiente de eventos
- **Error Handling**: Gestión de errores y fallbacks
- **Accessibility**: Focus management y navegación por teclado

## 📈 SEO y Accesibilidad

- **Meta tags**: Título, descripción y viewport configurados
- **Estructura semántica**: HTML5 con roles ARIA apropiados
- **Alt texts**: Todas las imágenes con texto alternativo
- **Focus management**: Navegación por teclado completa
- **Color contrast**: Cumple ratios de contraste WCAG

## 🚀 Despliegue

El sitio es completamente estático y se puede desplegar en:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Surge.sh**
- **Cualquier hosting web tradicional**

Simplemente subir los archivos HTML, CSS y JS al servidor.

## 📝 Notas de Conversión

Este proyecto fue convertido desde una aplicación React original manteniendo:

- ✅ Toda la funcionalidad original
- ✅ Diseño visual idéntico
- ✅ Responsividad mobile-first
- ✅ Interactividad y animaciones
- ✅ Integración con WhatsApp
- ✅ Accesibilidad mejorada

### Beneficios de la Conversión

1. **Mejor Performance**: Carga más rápida sin bundle de React
2. **SEO Mejorado**: HTML estático indexable por buscadores
3. **Hosting Económico**: Compatible con cualquier servidor web
4. **Mantenimiento Simple**: Sin dependencias ni builds complejos
5. **Accesibilidad**: Mejor control sobre elementos y navegación

---

**ONIC Beauty** - Tu belleza, nuestra pasión ✨
