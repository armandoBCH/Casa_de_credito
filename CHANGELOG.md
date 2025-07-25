# Registro de Cambios (Changelog)

Todas las modificaciones notables en este proyecto serán documentadas en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Fixed
- **2024-07-26:** Corregidos errores de tipo de TypeScript en los componentes `Calendar` y `Chart` para asegurar la compatibilidad con las librerías `react-day-picker` y `recharts`.
- **2024-07-26:** Solucionado un error de compilación masivo (`allowImportingTsExtensions`) al eliminar las extensiones de archivo (`.tsx`, `.ts`) de todas las rutas de importación de módulos en la aplicación.
- **2024-07-26:** Estandarizadas todas las rutas de importación para usar el alias `@/` en lugar de rutas relativas, mejorando la mantenibilidad y solucionando errores de build en Vercel.
- **2024-07-25:** Solucionado error de compilación en Vercel al renombrar `postcss.config.js` a `postcss.config.cjs`. Esto resuelve el error `ReferenceError: module is not defined in ES module scope` causado por la configuración `"type": "module"` en `package.json`.
- **2024-07-24:** Corregido el conflicto de dependencias de `eslint` (`ERESOLVE`) al degradar `eslint` a la versión 8 y ajustar los paquetes relacionados para asegurar la compatibilidad con `eslint-config-next`.

### Added
- **2024-07-23:** Creación del archivo `CHANGELOG.md` para registrar todas las modificaciones futuras del proyecto y mantener un historial de cambios.

### Changed
- **2024-07-26:** Actualizada la documentación (`CONTEXT.md`) para reflejar las últimas correcciones y establecer directrices de desarrollo claras.

### Removed
- **2024-07-23:** Eliminados archivos obsoletos de la configuración SPA anterior (`index.html`, `index.tsx`, `metadata.json`) para finalizar la migración a Next.js y solucionar errores de resolución de módulos en el navegador.
