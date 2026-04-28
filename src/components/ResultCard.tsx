import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { formularioStyles } from "../styles/appStyles"; // Estilos
import { Diagnostico, RegistroIMC } from "../types"; // Asegúrate de tener la interfaz RegistroIMC

interface Props {
  nombre: string;
  peso: number;
  altura: number;
  imc: number;
  diagnostico: Diagnostico;
  addIMC: (nuevoRegistro: RegistroIMC) => void; // Función que recibe un objeto completo de tipo RegistroIMC
}

export const ResultCard = ({
  nombre,
  peso,
  altura,
  imc,
  diagnostico,
  addIMC,
}: Props) => {
  // Asignar el color según el diagnóstico
  let colorDiagnostico = "";
  if (diagnostico === "Bajo peso") {
    colorDiagnostico = "#3B82F6"; // Azul
  } else if (diagnostico === "Peso normal") {
    colorDiagnostico = "#10B981"; // Verde
  } else if (diagnostico === "Sobrepeso") {
    colorDiagnostico = "#F59E0B"; // Amarillo
  } else {
    colorDiagnostico = "#EF4444"; // Rojo
  }

  // Función que maneja el clic en "Agregar al historial"
  const handleAddIMC = () => {
    // Crear un nuevo objeto RegistroIMC y pasarlo a la función addIMC
    const nuevoRegistro: RegistroIMC = {
      id: Date.now().toString(), // ID único generado con la fecha
      nombre,
      peso,
      altura,
      imc,
      diagnostico,
    };

    // Llamar a la función para agregar al historial
    addIMC(nuevoRegistro); // Pasamos el objeto completo a la función addIMC
  };

  return (
    <View style={formularioStyles.tarjeta}>
      <Text style={formularioStyles.seccionTitulo}>Resultado del IMC</Text>

      <Text style={formularioStyles.input}>Nombre: {nombre}</Text>
      <Text style={formularioStyles.input}>
        {nombre} - IMC: {imc.toFixed(2)}
      </Text>
      <Text style={formularioStyles.input}>
        Diagnóstico:{" "}
        <Text style={{ color: colorDiagnostico }}>{diagnostico}</Text>
      </Text>

      {/* Botón para agregar al historial */}
      <TouchableOpacity
        style={formularioStyles.botonAgregar}
        onPress={handleAddIMC} // Llamamos a la función cuando se presiona
      >
        <Text style={formularioStyles.botonAgregarTexto}>
          + Agregar al historial
        </Text>
      </TouchableOpacity>
    </View>
  );
};
