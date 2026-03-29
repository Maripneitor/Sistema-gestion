# Usar la imagen oficial de Node.js
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
# Nota: Copiamos pnpm-lock.yaml si existe, de lo contrario lo omitimos
COPY package.json pnpm-lock.yaml* ./

# Instalar pnpm globalmente e instalar dependencias
RUN npm install -g pnpm && pnpm install

# Copiar el resto del código
COPY . .

# Exponer el puerto de Vite (por defecto 5173)
EXPOSE 5173

# Comando para desarrollo con Vite expuesto a todos los hosts
CMD ["pnpm", "dev", "--host"]
