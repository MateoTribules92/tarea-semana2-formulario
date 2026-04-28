import React from "react";
import { Text, View } from "react-native";
import { headerStyles } from "../styles/appStyles"; // Estilos del header

interface Props {
  totalRegistros: number; // Total de registros de IMC
}

export const Header = ({ totalRegistros }: Props) => {
  return (
    <View style={headerStyles.contenedor}>
      <Text style={headerStyles.titulo}>Calculadora de IMC</Text>
      <Text style={headerStyles.subtitulo}>
        {totalRegistros === 0
          ? "Registra tu primer cálculo de IMC"
          : `${totalRegistros} registros de IMC`}
      </Text>
    </View>
  );
};