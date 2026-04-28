import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { listaStyles } from "../styles/appStyles"; // Estilos
import { RegistroIMC } from "../types"; // Interfaz de RegistroIMC

interface Props {
  historial: RegistroIMC[]; // El historial de IMC
  deleteIMC: (id: string) => void; // Función para eliminar un registro de IMC
  clearHistorial: () => void; // Función para limpiar todo el historial
}

export const ExpenseLists = ({ historial, deleteIMC, clearHistorial }: Props) => {
  return (
    <View style={listaStyles.contenedor}>
      {/* Tarjeta del historial */}
      <View style={[listaStyles.tarjeta, { backgroundColor: "#F7FAFC", padding: 20 }]}>
        <Text style={listaStyles.seccionTitulo}>HISTORIAL DE IMC</Text>
        
        {historial.length === 0 ? (
          <Text style={listaStyles.textoVacio}>
            Aún no hay registros. ¡Calcula el primero!
          </Text>
        ) : (
          historial.map((registro) => (
            <View key={registro.id} style={listaStyles.item}>
              <View style={[listaStyles.itemBarra]} />
              <Text style={listaStyles.itemEmoji}>⚖️</Text> {/* Emoji de IMC */}
              <View style={listaStyles.itemInfo}>
                <Text style={listaStyles.itemDescripcion}>
                  {registro.nombre} - IMC: {registro.imc.toFixed(2)}
                </Text>
                <Text style={listaStyles.itemCategoria}>
                  Diagnóstico: {registro.diagnostico}
                </Text>
              </View>
              <TouchableOpacity onPress={() => deleteIMC(registro.id)}>
                <Text style={listaStyles.itemEliminar}>✕</Text> {/* Eliminar */}
              </TouchableOpacity>
            </View>
          ))
        )}

        {/* Botón Limpiar historial */}
        <TouchableOpacity onPress={clearHistorial} style={listaStyles.botonLimpiar}>
          <Text style={listaStyles.botonLimpiarTexto}>Limpiar todo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};