# 🔐 Cerrajería 24 Horas — Landing Page Profesional

Landing page estratégica orientada a **conversión inmediata** para servicios de cerrajería de emergencia 24 horas.

Este proyecto no es un sitio informativo tradicional.  
Está diseñado como una **máquina de conversión** enfocada en llamadas y contacto directo por WhatsApp.

## 🎯 Objetivo del Proyecto

Maximizar conversiones mediante:

- 📞 Llamada telefónica directa (`tel:`)
- 💬 WhatsApp inmediato (`wa.me`)

El flujo estratégico responde al modelo:

> Impacto → Urgencia → Confianza → Prueba social → Acción inmediata

## 🧠 Enfoque Arquitectónico

Arquitectura modular ligera con separación estricta por responsabilidades:

UI → Application → Domain
Infrastructure implementa detalles
Domain no depende de nadie

Principios aplicados:

- Separación clara de capas
- Código mantenible y escalable
- Portabilidad futura a backend
- Sin sobreingeniería
- Preparado para evolucionar a SaaS vertical

## 📁 Estructura del Proyecto

src/
├── core/ # Orquestador principal (main.ts)
│
├── domain/ # Modelo del negocio y reglas puras
│
├── application/ # Casos de uso
│
├── infrastructure/ # Datos mock, configuración y adaptadores
│
├── ui/ # Renderizado y eventos DOM
│
├── styles/ # Sistema CSS estructurado
│
├── assets/ # Imágenes e íconos optimizados
│
└── utils/ # Funciones auxiliares puras

## 🏗 Capas del Sistema

### 1️⃣ Domain
Contiene:
- Modelado de entidades (TypeScript básico)
- Union types
- Reglas puras del negocio
- Validaciones lógicas

No depende del DOM ni de infraestructura.  
Es portable a backend sin modificaciones.

### 2️⃣ Application
Orquesta comportamiento del sistema:

- Obtención de servicios
- Filtros por categoría
- Generación de enlaces dinámicos
- Preparación de datos para render

Conecta dominio con implementación.

### 3️⃣ Infrastructure
Implementación concreta:

- Datos mock tipados
- Configuración editable del negocio
- Adaptadores para WhatsApp y teléfono

Preparado para reemplazarse por API REST en v2.

### 4️⃣ UI
Responsable del DOM:

- Render dinámico por secciones
- Delegación de eventos
- Componentes reutilizables
- Selectores centralizados

Regla crítica:
> No hay lógica de negocio dentro de la UI.

## ⚙ Requerimientos Funcionales

- Render dinámico de servicios
- Servicio destacado automático
- Filtro por tipo de servicio
- Botón flotante WhatsApp persistente
- Generación dinámica de enlaces
- Testimonios dinámicos
- Lazy loading en imágenes

## 🚀 Requerimientos No Funcionales

### Performance
- Imágenes WebP
- JS mínimo
- Carga < 2s
- Lighthouse > 90

### Responsive
- Mobile-first obligatorio
- Optimizado para tráfico móvil (>80%)

### SEO Técnico
- Title optimizado por ciudad
- Meta description orientada a urgencia
- Open Graph configurado
- robots.txt

## 🎨 Sistema Visual

- Paleta estratégica (urgencia + seguridad)
- Tipografía sans-serif fuerte
- Sistema CSS modular
- Tokens reutilizables
- Componentes escalables
- Layout mobile-first

Diseñado para claridad y conversión, no para decoración innecesaria.

## 🔐 Riesgos Técnicos Evitados

- Lógica de negocio mezclada en UI
- Datos hardcodeados en HTML
- Animaciones pesadas innecesarias
- Generación insegura de enlaces WhatsApp

## 🔄 Preparado para Evolución

Este sistema puede evolucionar hacia:

- API REST (Node/Express)
- Persistencia con base de datos
- Versión multi-ciudad
- SaaS vertical
- Migración futura a React

La arquitectura permite escalar sin romper la base.

## 📌 Estado del Proyecto

✔ Arquitectura modular definida  
✔ Separación estricta de responsabilidades  
✔ Sistema CSS estructurado  
✔ Enfoque estratégico de conversión  
✔ Preparado para escalabilidad  

**Tipo de proyecto:** Landing Page profesional orientada a conversión  
**Stack:** Vite + TypeScript (fundamentos) + HTML + CSS modular  
**Enfoque:** Rendimiento, claridad estructural y mantenibilidad
