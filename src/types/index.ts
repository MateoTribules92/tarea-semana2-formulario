// Tipos posibles para el diagnóstico
export type Diagnostico = 'Bajo peso' | 'Peso normal' | 'Sobrepeso' | 'Obesidad';

// Interfaz para cada registro de IMC
export interface RegistroIMC {
  id: string;
  nombre: string;
  peso: number;
  altura: number;
  imc: number;
  diagnostico: Diagnostico;
}