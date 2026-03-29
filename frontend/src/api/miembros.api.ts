import apiClient from './axios';

export const miembrosApi = {
  getAll: async () => {
    const { data } = await apiClient.get('/miembros');
    return data;
  },
  
  create: async (miembroData: any) => {
    const { data } = await apiClient.post('/miembros', miembroData);
    return data;
  },
  
  update: async (id: string, miembroData: any) => {
    const { data } = await apiClient.put(`/miembros/${id}`, miembroData);
    return data;
  },
  
  delete: async (id: string) => {
    await apiClient.delete(`/miembros/${id}`);
  }
};
