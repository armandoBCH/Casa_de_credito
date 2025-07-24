# Registro de Cambios (Changelog)

Todas las modificaciones notables en este proyecto serán documentadas en este archivo.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), y este proyecto se adhiere a [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Fixed
- **2024-07-25:** Solucionado error de compilación en Vercel al renombrar `postcss.config.js` a `postcss.config.cjs`. Esto resuelve el error `ReferenceError: module is not defined in ES module scope` causado por la configuración `"type": "module"` en `package.json`.
- **2024-07-24:** Corregidas las rutas de importación en toda la aplicación para usar consistentemente el alias de ruta `@/` en lugar de rutas relativas o alias incorrectos. Esto soluciona los errores `Module not found` durante el proceso de compilación de Vercel.
- **2024-07-24:** Corregido el conflicto de dependencias de `eslint` (`ERESOLVE`) al degradar `eslint` a la versión 8 y ajustar los paquetes relacionados para asegurar la compatibilidad con `eslint-config-next`.

### Added
- **2024-07-23:** Creación del archivo `CHANGELOG.md` para registrar todas las modificaciones futuras del proyecto y mantener un historial de cambios.

### Removed
- **2024-07-23:** Eliminados archivos obsoletos de la configuración SPA anterior (`index.html`, `index.tsx`, `metadata.json`) para finalizar la migración a Next.js y solucionar errores de resolución de módulos en el navegador.