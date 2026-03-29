# 🚀 Nexus Admin: Sistema de Gestión y Asistencias

Bienvenido al panel administrativo de **The Curator**. Este monorepo contiene una arquitectura desacoplada y robusta diseñada para el control de comunidad, seguimiento de niveles y sincronización en tiempo real con Google Sheets.

---

## 🛠️ Stack Tecnológico
- **Frontend**: React + TypeScript + Vite + Tailwind CSS + Zustand (vistas premium by Stitch).
- **Backend**: Node.js + Express + Prisma ORM.
- **Base de Datos**: PostgreSQL vía Docker.
- **Integraciones**: Google Sheets API.

---

## 🏗️ Estructura del Proyecto
```bash
.
├── aplicacion-cliente/   # React Frontend (Vite)
├── servidor-api/         # Express Backend (Prisma)
├── docker-compose.yml    # Configuración de Postgres
└── package.json          # Scripts de gestión global
```

---

## 🚦 Comandos Rápidos

Para trabajar de manera eficiente, usa los siguientes comandos desde la **raíz del proyecto**:

### 1. Configuración Inicial (Solo la primera vez)
Instala dependencias, levanta la DB y aplica migraciones automáticamente.
```bash
pnpm setup
```

### 2. Levantar el Proyecto (Desarrollo)
Levanta Docker (si no está arriba) y corre el Frontend y Backend en paralelo.
```bash
pnpm dev
```
- **Frontend**: `http://localhost:5173`
- **Backend**: `http://localhost:3000/api`

### 3. Apagar el Proyecto
Detiene los servicios y baja el contenedor de Docker para liberar recursos.
```bash
pnpm stop
```

### 4. Gestión de Base de Datos
- **Migrar cambios**: `pnpm db:migrate`
- **Generar cliente Prisma**: `pnpm db:generate`
- **Explorador Visual (Prisma Studio)**: `pnpm db:studio`

---

## 🔑 Configuración de Variables de Entorno

### Backend (`servidor-api/.env`)
Asegúrate de tener definidas estas variables:
- `DATABASE_URL`: `postgresql://user:pass@localhost:5432/gestion_db`
- `JWT_SECRET`: Tu clave secreta para tokens.
- `SPREADSHEET_ID`: El ID de tu Google Sheet.
- **Extra**: Coloca tu `google-service-account.json` en la carpeta `servidor-api`.

---

## 🛡️ Roles y Accesos
- **ENCARGADO**: Acceso total (Dashboard, Directorio, Registro de Staff).
- **ASISTENTE**: Acceso a Dashboard y Directorio (Solo lectura/edición limitada).

---

## ✨ Créditos de Diseño
Las pantallas de este sistema fueron diseñadas con la tecnología **Stitch** (Google DeepMind), asegurando una estética premium y moderna.
