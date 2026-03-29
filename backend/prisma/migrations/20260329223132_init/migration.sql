-- CreateEnum
CREATE TYPE "EstadoMiembro" AS ENUM ('ACTIVO', 'INACTIVO', 'CON_PERMISO', 'EN_RIESGO_DE_BAJA');

-- CreateEnum
CREATE TYPE "EstadoAsistencia" AS ENUM ('PRESENTE', 'FALTA', 'PERMISO');

-- CreateEnum
CREATE TYPE "PlataformaGrupo" AS ENUM ('WHATSAPP', 'APP_EXTERNA');

-- CreateEnum
CREATE TYPE "RolUsuario" AS ENUM ('ENCARGADO', 'ASISTENTE');

-- CreateTable
CREATE TABLE "miembros" (
    "id" UUID NOT NULL,
    "nombre_real" TEXT NOT NULL,
    "nombre_app" TEXT NOT NULL,
    "nombre_tiktok" TEXT,
    "telefono" TEXT,
    "edad" INTEGER NOT NULL,
    "pais" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL DEFAULT 1,
    "faltas_acumuladas" INTEGER NOT NULL DEFAULT 0,
    "es_super_fan" BOOLEAN NOT NULL DEFAULT false,
    "estado" "EstadoMiembro" NOT NULL DEFAULT 'ACTIVO',
    "fecha_registro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "miembros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asistencias" (
    "id" SERIAL NOT NULL,
    "miembro_id" UUID NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado_asistencia" "EstadoAsistencia" NOT NULL,
    "registrado_por" TEXT NOT NULL,

    CONSTRAINT "asistencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "grupos" (
    "id" SERIAL NOT NULL,
    "nombre_grupo" TEXT NOT NULL,
    "plataforma" "PlataformaGrupo" NOT NULL,
    "nivel_minimo_requerido" INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT "grupos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "miembros_grupos" (
    "miembro_id" UUID NOT NULL,
    "grupo_id" INTEGER NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "miembros_grupos_pkey" PRIMARY KEY ("miembro_id","grupo_id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "rol" "RolUsuario" NOT NULL DEFAULT 'ASISTENTE',
    "fecha_creacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "asistencias" ADD CONSTRAINT "asistencias_miembro_id_fkey" FOREIGN KEY ("miembro_id") REFERENCES "miembros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "miembros_grupos" ADD CONSTRAINT "miembros_grupos_miembro_id_fkey" FOREIGN KEY ("miembro_id") REFERENCES "miembros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "miembros_grupos" ADD CONSTRAINT "miembros_grupos_grupo_id_fkey" FOREIGN KEY ("grupo_id") REFERENCES "grupos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
