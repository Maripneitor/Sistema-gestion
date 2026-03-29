# Usar la imagen oficial de Node.js
FROM node:20-alpine

# Crear directorio de trabajo
WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml* ./

# Instalar pnpm globalmente e instalar dependencias
RUN npm install -g pnpm && pnpm install

# Copiar el resto del código
COPY . .

# Generar el cliente de Prisma
RUN pnpm prisma generate

# Exponer el puerto
EXPOSE 3000

# Comando para desarrollo con recarga automática
CMD ["pnpm", "dev"]
