# Portal Copropiedad - Demo

Este repositorio contiene un **portal de copropiedad** funcional en HTML, CSS y JavaScript. Permite gestionar reservas, fracciones, reportes de mantenimiento y votaciones de manera local (guardando datos en `localStorage`). Ideal para demos o prototipos de proyectos de copropiedad.

---

## Vista previa

![Dashboard ejemplo](https://via.placeholder.com/600x300?text=Dashboard+Demo)

---

## Características

- **Dashboard** con resumen de reservas, fracciones, reportes y votaciones.
- **Calendario** para visualizar reservas por fecha.
- **Gestión de fracciones** (agregar, listar y eliminar).
- **Reportes de mantenimiento** (crear, marcar como resuelto, eliminar).
- **Votaciones comunitarias** (crear, votar, cerrar/reabrir, eliminar).
- **Exportación de datos** en JSON.
- **Persistencia local** con `localStorage` (sin backend).

---

## Archivos

- `index.html` → estructura principal de la aplicación.
- `style.css` → estilos y diseño responsivo.
- `app.js` → lógica en JavaScript (reservas, fracciones, reportes, votaciones, exportación de datos).

---

## Instalación / Uso

1. Clona o descarga este repositorio.
2. Abre `index.html` en tu navegador.
3. Interactúa con la app: cambia de vistas, agrega reservas, fracciones, reportes y votaciones.
4. Para exportar los datos: haz clic en **Exportar JSON**.
5. Todos los datos se guardan localmente en tu navegador (localStorage).

---

## Subir a GitHub Pages

1. Sube los 3 archivos (`index.html`, `style.css`, `app.js`) a tu repositorio.
2. Ve a **Settings → Pages → Branch: main → / (root)** y haz clic en *Save*.
3. Accede a tu app desde la URL que GitHub Pages te proporciona.

---

## Licencia

MIT License © 2025

---

## Notas

- Este portal es una **demo**: no requiere backend ni base de datos.
- Para una versión real con usuarios y base de datos, se recomienda integrar un **backend (Node.js, PHP, etc.)** y autenticación.
- Puedes personalizar estilos, colores, logos y agregar funcionalidades según tus necesidades.

---

**Autor:** Diego Hernández Espinosa
