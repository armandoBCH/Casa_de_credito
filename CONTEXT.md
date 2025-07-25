# Contexto del Proyecto: Casa del Crédito

Este documento proporciona el contexto esencial para entender y desarrollar la aplicación web de Casa del Crédito.

## 1. Visión General del Proyecto

- **Aplicación:** E-commerce para "Casa del Crédito".
- **Negocio:** Venta de muebles, electrodomésticos y productos para el hogar.
- **Propuesta de Valor Principal:** Ofrecer productos de calidad con opciones de financiamiento accesibles y transparentes (cuotas, descuentos).
- **Público Objetivo:** Familias de Olavarría, Argentina y alrededores.
- **Plataforma de Despliegue:** Vercel.
- **Nota Histórica:** La migración a Next.js está completa. Archivos heredados como `index.html`, `index.tsx` y `metadata.json` son obsoletos, no tienen ninguna función y deben ser ignorados o eliminados.

## 2. Pila Tecnológica (Tech Stack)

- **Framework:** Next.js 14+ con App Router.
- **Lenguaje:** TypeScript.
- **Estilos:** Tailwind CSS.
- **Componentes UI:** `shadcn/ui` (basado en Radix UI y estilizado con Tailwind). La base de componentes se encuentra en `src/components/ui`.
- **Gestión de Estado:**
    - **Cliente (Carrito):** React Context (`src/context/CartContext.tsx`) con persistencia en `localStorage`.
    - **Servidor (Fetching):** TanStack Query (`@tanstack/react-query`) gestionado en `src/components/Providers.tsx`.
- **Formularios:** React Hook Form (`react-hook-form`) con Zod (`zod`) para validación de esquemas.
- **Notificaciones:** `sonner` para toasts (notificaciones flotantes).

## 3. Estructura de Archivos Clave

```
.
├── app/                  # Rutas principales (App Router)
│   ├── layout.tsx        # Plantilla HTML principal (<html>, <body>, Providers)
│   ├── page.tsx          # Página de inicio (/)
│   ├── globals.css       # Sistema de diseño: variables CSS (temas claro/oscuro) y estilos base.
│   ├── catalog/page.tsx  # Página del catálogo de productos.
│   ├── product/[id]/     # Página de detalle de producto (ruta dinámica).
│   └── ...otras-rutas
│
├── src/                  # Código fuente de la aplicación
│   ├── components/       # Componentes React reutilizables
│   │   ├── ui/           # Componentes base de shadcn/ui (Button, Card, etc.)
│   │   ├── Header.tsx    # Encabezado global.
│   │   └── Footer.tsx    # Pie de página global.
│   │
│   ├── context/
│   │   └── CartContext.tsx # Lógica y estado global del carrito de compras.
│   │
│   ├── data/
│   │   └── products.ts   # Mock de base de datos. Contiene el array de productos y el tipo `Product`.
│   │
│   └── lib/
│       └── utils.ts      # Funciones de utilidad (ej. `cn` para clases de Tailwind).
│
└── package.json          # Dependencias y scripts del proyecto.
```

## 4. Conceptos y Lógica de Negocio

-   **Productos (`src/data/products.ts`):**
    -   Actualmente, los datos son estáticos en este archivo. Es la **única fuente de verdad** para la información de los productos.
    -   El tipo `Product` define la estructura de cada producto, incluyendo precios, imágenes, descuentos y especificaciones.

-   **Carrito de Compras (`src/context/CartContext.tsx`):**
    -   Gestiona toda la funcionalidad del carrito: agregar, eliminar, actualizar cantidad.
    -   Calcula el `totalItems` y `totalPrice`.
    -   El estado se persiste en `localStorage` para mantener el carrito entre sesiones.
    -   Se accede al contexto a través del hook `useCart()`.

-   **Precios y Financiación:**
    -   Cada producto puede tener `price` (precio final), `originalPrice` (para mostrar descuentos) e `installmentPrice` (precio por cuota).
    -   La página de checkout (`app/checkout/page.tsx`) y el simulador (`app/simulator/page.tsx`) aplican lógica de descuentos según el método de pago.

-   **Estilos y Tema (`app/globals.css` y `tailwind.config.ts`):**
    -   El diseño se basa en una paleta de colores cálidos (naranja/rojo) inspirada en el logo.
    -   Las variables CSS en `globals.css` definen los colores para los temas claro y oscuro.
    -   `tailwind.config.ts` extiende la configuración base de Tailwind para incluir estos colores, animaciones y sombras personalizadas.

## 5. Directrices para Desarrollo (IA)

-   **Consistencia de UI:** Para nuevos elementos visuales, **utilizar siempre** los componentes de `src/components/ui/`.
-   **Manejo de Estado:**
    -   Para lógica del carrito, usar el hook `useCart()`.
    -   Para fetching de nuevos datos del servidor (futuro), integrar con TanStack Query.
-   **Navegación:** Usar el componente `<Link>` de `next/link`. Las nuevas páginas deben seguir la estructura del App Router.
-   **Datos:** Por ahora, cualquier modificación o adición de productos se debe realizar en `src/data/products.ts`.
-   **Responsividad:** Todos los componentes deben ser mobile-first y completamente responsivos.
-   **Accesibilidad:** Priorizar el uso de HTML semántico y atributos ARIA. `shadcn/ui` ya proporciona una base sólida.

### Directrices Críticas (Resolución de Errores de Build)

-   **Rutas de Importación:** Utilizar **siempre** el alias de ruta `@/` configurado en `tsconfig.json` para importar módulos desde el directorio `src/` (ej. `import Component from '@/components/Component';`). No usar rutas relativas (`../../`). La inconsistencia en esto fue una fuente de errores de build recientemente corregida.
-   **No incluir extensiones de archivo:** Nunca importes módulos con su extensión (p. ej., `import ... from './button.tsx'`). Esto causa un error de compilación de TypeScript (`Type error: An import path can only end with a '.tsx' extension when 'allowImportingTsExtensions' is enabled.`). La forma correcta es `import ... from './button'`.
-   **Configuración de PostCSS:** El archivo `postcss.config.js` utiliza sintaxis de Módulos ES (`export default`) para ser compatible con la configuración `"type": "module"` del proyecto. No se debe cambiar su sintaxis o renombrarlo.
