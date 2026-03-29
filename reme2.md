# 🚀 Nexus Admin: Centro de Control Operativo

Este documento contiene los comandos críticos y accesos para el sistema Nexus. Todo se ejecuta de manera local y aislada dentro de Docker.

---

### 🔑 Credenciales de Acceso Maestro

| Rol | Correo Electrónico | Contraseña |
| :--- | :--- | :--- |
| **Administrador** | `admin@sistema.com` | `password123` |
| **Asistente** | `asistente@sistema.com` | `password123` |

---

### 🚦 Gestión de Servicios (Comandos Directos)

Usa estos comandos en la terminal desde la raíz del proyecto:

| Acción | Comando |
| :--- | :--- |
| **Levantar Sistema** | `docker compose up -d --build` |
| **Ver Logs Real-Time (Todo)** | `docker compose logs -f` |
| **Ver Logs Backend (API)** | `docker compose logs -f api` |
| **Ver Logs Frontend (Vite)** | `docker compose logs -f frontend` |
| **Reiniciar Backend** | `docker compose restart api` |
| **Detener Todo** | `docker compose down` |
| **Limpiar y Resetear BD** | `docker compose down -v && docker compose up -d` |

---

### 🌐 Puntos de Acceso Externo

- **Panel de Control (Frontend)**: [http://localhost:5173](http://localhost:5173)
- **Documentación API (Backend)**: [http://localhost:3000/api](http://localhost:3000/api)
- **Gestor de BD (Postgres)**: `localhost:5432` (User: `admin`, Pass: `password123`, DB: `sistema_gestion`)

---

### 🎨 Estado del Diseño (Curator System)
- **Login**: ✅ Rediseñado/Traducido (Modo Nexus Administrative).
- **Dashboard**: ✅ Métricas Premium / Gráficos de Asistencia.
- **Directorio**: ✅ Tabla Avanzada / Estados Localizados.
- **Asistencias**: ✅ Control Semanal / Status Activo.
- **Registro**: ✅ Formulario Administrativo Estilo 'Authority'.

---

### 🛠️ Entorno de Desarrollo Local
- **Aislamiento**: Las conexiones externas (Google APIs) están simuladas para pruebas rápidas.
- **Hot Reload**: Los cambios en el código se reflejan instantáneamente en Docker sin reconstruir.
- **Pruebas**: Toda validación debe realizarse contra la instancia de Docker antes de cualquier despliegue.

