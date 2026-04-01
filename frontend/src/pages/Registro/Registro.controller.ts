import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initialFormData } from './Registro.model';
import type { RegistroFormData } from './Registro.model';

export const useRegistroController = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegistroFormData>(initialFormData);
  const [validationErrors] = useState<string[]>([
    'Edad insuficiente: Se requieren 18+ años.',
    'Territorio restringido: España detectado.',
    'Conflicto de intereses: Rol de Streamer activo.'
  ]);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    // Correctly handle the change event to support different input types
    const target = e.target;
    const name = target.name;
    const value = target instanceof HTMLInputElement && target.type === 'checkbox' 
      ? target.checked 
      : target.value;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggleStreamer = () => {
    setFormData(prev => ({
      ...prev,
      isStreamer: !prev.isStreamer
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering record:', formData);
    // Simular guardado exitoso
    alert('Expediente registrado correctamente.');
    navigate('/');
  };

  const handleDiscard = () => {
    if (confirm('¿Estás seguro de que deseas descartar los cambios?')) {
      navigate('/');
    }
  };

  return {
    formData,
    validationErrors,
    handleChange,
    handleToggleStreamer,
    handleSubmit,
    handleDiscard
  };
};

