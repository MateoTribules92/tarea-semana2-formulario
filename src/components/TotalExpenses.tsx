import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { totalStyles } from "../styles/appStyles"; // Estilos para el componente de estadísticas

interface Props {
  total: number;  // Total de IMC calculados
  quantity: number;  // Total de registros
  clearHistorial: () => void;  // Función para limpiar el historial
  historialIMC: { imc: number }[];  // Historial de IMC
}

export const TotalExpenses = ({ total, quantity, clearHistorial, historialIMC }: Props) => {
  // Promedio de IMC
  const promedioIMC = quantity === 0 ? 0 : total / quantity;

  // IMC más alto
  const maxIMC = quantity === 0 ? 0 : Math.max(...historialIMC.map((registro) => registro.imc));

  return (
    <View style={totalStyles.container}>
      <Text style={totalStyles.seccionTitulo}>ESTADÍSTICAS</Text>

      <View style={totalStyles.estadisticasContainer}>
        <View style={totalStyles.estadisticasBox}>
          <Text style={totalStyles.estadisticasNumero}>{quantity}</Text>
          <Text>Registros</Text>
        </View>
        <View style={totalStyles.estadisticasBox}>
          <Text style={totalStyles.estadisticasNumero}>{promedioIMC.toFixed(2)}</Text>
          <Text>Promedio</Text>
        </View>
        <View style={totalStyles.estadisticasBox}>
          <Text style={totalStyles.estadisticasNumero}>{maxIMC.toFixed(2)}</Text>
          <Text>Máximo</Text>
        </View>
      </View>

      <TouchableOpacity onPress={clearHistorial} style={totalStyles.botonLimpiar}>
        <Text style={totalStyles.botonLimpiarTexto}>Limpiar todo</Text>
      </TouchableOpacity>
    </View>
  );
};