import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import path from 'path';

// Cargamos la Service Account
// En producción, es mejor usar variables de entorno o un archivo de secretos montado
const KEY_FILE_PATH = path.join(process.cwd(), 'google-service-account.json');
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;

const auth = new JWT({
  keyFile: KEY_FILE_PATH,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export const sheetsService = {
  /**
   * Registra una asistencia en Google Sheets (Hoja: 'Asistencias')
   * No bloquea el hilo principal.
   */
  async appendAssistance(data: { nombre: string; fecha: string; estado: string; registradoPor: string }) {
    if (!SPREADSHEET_ID) return;

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'Asistencias!A:D',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [data.nombre, data.fecha, data.estado, data.registradoPor]
          ],
        },
      });
      console.log(`[Google Sheets] Asistencia de ${data.nombre} sincronizada.`);
    } catch (error) {
      console.error('[Google Sheets] Error al sincronizar asistencia:', error);
    }
  },

  /**
   * Actualiza el nivel de un miembro en la hoja 'Miembros'
   * Nota: Esto requiere que los miembros estén en una lista. Buscamos por nombre o ID.
   */
  async updateMemberLevel(data: { nombre: string; nivel: number }) {
    if (!SPREADSHEET_ID) return;

    try {
      // Logic for appending a change or updating a specific cell
      // Aquí simplificaremos usando append para registrar el cambio de nivel en un log
      await sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: 'CambiosNivel!A:C',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [
            [data.nombre, data.nivel, new Date().toISOString()]
          ],
        },
      });
      console.log(`[Google Sheets] Nivel de ${data.nombre} actualizado a ${data.nivel}.`);
    } catch (error) {
      console.error('[Google Sheets] Error al sincronizar cambio de nivel:', error);
    }
  }
};
