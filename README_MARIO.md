# 👨‍💻 Manual de Desarrollo para Mario (Nexus Admin)

Este manual contiene los comandos rápidos para desarrollar en tu laptop, ya sea usando Docker o de forma local. El frontend está configurado para correr en el puerto **5173**.

---

## 🚀 Comandos Rápidos (Desde la Raíz)

| Acción | Comando | Descripción |
| :--- | :--- | :--- |
| **Iniciar Todo** | `pnpm dev` | Levanta Docker y corre Frontend/Backend en paralelo. |
| **Solo Frontend (Local)** | `pnpm --filter frontend dev` | Corre solo el React en tu PC (requiere que el Backend esté arriba). |
| **Ver Logs** | `pnpm logs` | Muestra qué está pasando en los contenedores de Docker. |
| **Reiniciar** | `pnpm restart` | Reinicia todos los servicios de Docker. |
| **Detener/Apagar** | `pnpm stop` | Apaga y limpia los contenedores de Docker. |
| **Base de Datos** | `pnpm db:studio` | Abre una pestaña en el navegador para ver los datos de la DB. |

---

## 🛠️ Desarrollo en Local (Más rápido para Frontend)

Si sientes que Docker es lento para el frontend, puedes correrlo directo en tu PC:

1.  Asegúrate de que la Base de Datos esté arriba: `pnpm docker:up`.
2.  Inicia el Backend: `pnpm --filter backend dev`.
3.  Inicia el Frontend: `pnpm --filter frontend dev`.
4.  Entra a: `http://localhost:5173`.

---

## 🐳 Desarrollo en Docker (Totalmente aislado)

Simplemente corre:
```bash
pnpm dev
```
Y abre `http://localhost:5173`. Todo se sincroniza automáticamente con tus archivos.

---

## 📝 Notas de Configuración
- **Puerto Frontend**: `5173` (Configurado en `frontend/package.json`).
- **Puerto Backend**: `3000`.
- **Database**: PostgreSQL en puerto `5432`.

¡A darle átomos! 🚀
