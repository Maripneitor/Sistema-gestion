// import { google } from 'googleapis';
// import { JWT } from 'google-auth-library';
// import path from 'path';

// MODALIDAD AISLADA: Google Sheets desactivado para pruebas locales en Docker
/*
const KEY_FILE_PATH = path.join(process.cwd(), 'google-service-account.json');
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

const auth = new JWT({
  keyFile: KEY_FILE_PATH,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });
*/

export const sheetsService = {
  /**
   * Registra una asistencia en Google Sheets (MODO MOCK)
   */
  async appendAssistance(data: { nombre: string; fecha: string; estado: string; registradoPor: string }) {
    console.log(`[MOCK Google Sheets] Sincronización simulada para: ${data.nombre} (${data.estado})`);
    // En modo aislado, no realizamos peticiones externas.
  },

  /**
   * Actualiza el nivel de un miembro (MODO MOCK)
   */
  async updateMemberLevel(data: { nombre: string; nivel: number }) {
    console.log(`[MOCK Google Sheets] Cambio de nivel simulado para: ${data.nombre} -> Nivel ${data.nivel}`);
  }
};
