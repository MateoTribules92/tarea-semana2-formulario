import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Text } from "react-native";
import { formularioStyles } from "../styles/appStyles"; // Estilos del formulario
import Slider from '@react-native-community/slider'; // Slider para peso y altura

interface Props {
  setDatosPaciente: (nombre: string, peso: number, altura: number) => void; // Función para pasar los datos al componente padre
}

export const ExpenseForm = ({ setDatosPaciente }: Props) => {
  const [nombre, setNombre] = useState<string>(""); // Nombre del paciente
  const [peso, setPeso] = useState<number>(65); // Peso inicial
  const [altura, setAltura] = useState<number>(1.68); // Altura inicial

  // Función para manejar el cálculo del IMC y pasar los datos al componente padre
const handleCalcularIMC = () => {
  // Verificar los valores de las variables
  console.log("Nombre:", nombre);
  console.log("Peso:", peso);
  console.log("Altura:", altura);

  // Verifica que nombre, peso y altura sean válidos
  if (!nombre || peso <= 0 || altura <= 0) {
    alert("Por favor, completa todos los campos correctamente.");
    return;
  }

  // Si los valores son válidos, realiza el cálculo
  setDatosPaciente(nombre, peso, altura);
};

  return (
    <View style={formularioStyles.tarjeta}>
      <Text style={formularioStyles.seccionTitulo}>Nuevo Registro de IMC</Text>

      {/* Campo de texto para el nombre */}
      <Text style={formularioStyles.etiqueta}>Nombre</Text>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={formularioStyles.input}
      />

      {/* Campo para peso */}
      <Text style={formularioStyles.etiqueta}>Peso (kg)</Text>
      <Slider
        minimumValue={30}
        maximumValue={200}
        step={0.1}
        value={peso}
        onValueChange={(value) => setPeso(value)}
        style={{ marginBottom: 20 }}
      />
      <Text style={formularioStyles.input}>{peso.toFixed(1)} kg</Text>

      {/* Campo para altura */}
      <Text style={formularioStyles.etiqueta}>Altura (m)</Text>
      <Slider
        minimumValue={0.5}
        maximumValue={2.5}
        step={0.01}
        value={altura}
        onValueChange={(value) => setAltura(value)}
        style={{ marginBottom: 20 }}
      />
      <Text style={formularioStyles.input}>{altura.toFixed(2)} m</Text>

      {/* Botón para calcular IMC */}
      <TouchableOpacity
        style={formularioStyles.botonAgregar}
        onPress={handleCalcularIMC}
      >
        <Text style={formularioStyles.botonAgregarTexto}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
};