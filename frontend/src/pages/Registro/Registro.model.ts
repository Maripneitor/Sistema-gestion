export const countryOptions = [
  { value: 'ES', label: 'España' },
  { value: 'PE', label: 'Perú' },
  { value: 'MX', label: 'México' },
  { value: 'AR', label: 'Argentina' },
];

export const availabilityDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

export type RegistroFormData = {
  appName: string;
  realName: string;
  age: number;
  country: string;
  isStreamer: boolean;
  availability: string[];
  whatsapp: string;
  discord: string;
  instagram: string;
};

export const initialFormData: RegistroFormData = {
  appName: 'Curador_Alpha⚡',
  realName: '',
  age: 17,
  country: 'España',
  isStreamer: true,
  availability: ['S', 'D'],
  whatsapp: '',
  discord: '',
  instagram: '',
};
