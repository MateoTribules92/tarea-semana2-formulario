import { StyleSheet } from "react-native";

export const COLORS = {
  primario: "#6C63FF",
  fondo: "#F4F6FA",
  blanco: "#FFFFFF",
  textoOscuro: "#1A1A2E",
  textoGris: "#888888",
  borde: "#E0E0E0",
  inputFondo: "#FAFAFA",
};

export const headerStyles = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    paddingTop: 52,
    paddingBottom: 20,
    backgroundColor: COLORS.fondo,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "800",
    color: COLORS.textoOscuro,
    textAlign: "center",
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: COLORS.textoGris,
    textAlign: "center",
  },
});
export const formularioStyles = StyleSheet.create({
  tarjeta: {
    backgroundColor: COLORS.blanco,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  seccionTitulo: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.textoGris,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 14,
  },
  etiqueta: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.textoOscuro,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.borde,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: COLORS.textoOscuro,
    backgroundColor: COLORS.inputFondo,
    marginBottom: 14,
  },
  filaCategorias: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 18,
    flexWrap: "wrap",
  },
  botonCategoria: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: COLORS.borde,
    backgroundColor: COLORS.inputFondo,
    gap: 4,
  },
  botonCategoriaEmoji: {
    fontSize: 15,
  },
  botonCategoriaTexto: {
    fontSize: 13,
    fontWeight: "600",
    color: "#555",
  },
  botonAgregar: {
    backgroundColor: COLORS.primario,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
  },
  botonAgregarTexto: {
    color: COLORS.blanco,
    fontSize: 16,
    fontWeight: "700",
  },
});

export const totalRegistroStyles = StyleSheet.create({
  tarjeta: {
    backgroundColor: COLORS.primario,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginBottom: 16,
  },
  etiqueta: {
    fontSize: 11,
    color: "rgba(255,255,255,0.7)",
    letterSpacing: 2,
    fontWeight: "700",
  },
  monto: {
    fontSize: 42,
    fontWeight: "800",
    color: COLORS.blanco,
    marginVertical: 4,
  },
  subTexto: {
    fontSize: 13,
    color: "rgba(255,255,255,0.6)",
  },
});

export const listaStyles = StyleSheet.create({
  contenedor: {
     backgroundColor: COLORS.blanco,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  tarjeta: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#F7FAFC", // Fondo suave para la tarjeta
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Sombra para dispositivos Android
  },
  seccionTitulo: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.textoGris,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 14,
  },
  item: {
    flexDirection: "row",  // Mantenemos los elementos en fila horizontal
    alignItems: "center",  // Centra los elementos verticalmente
    backgroundColor: "#fff", // Color de fondo blanco para el item
    borderRadius: 12,
    padding: 14,
    marginBottom: 8,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    gap: 10,
  },
  itemEmoji: {
    fontSize: 22,
  },
  itemInfo: {
    flex: 1,  // Hace que el contenido ocupe el espacio disponible
    marginLeft: 10,
  },
  itemDescripcion: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  itemCategoria: {
    fontSize: 14,
    fontStyle: "italic",
    color: "#777",
  },
  itemEliminar: {
    color: "#EF4444", // Rojo para el botón eliminar
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 4,
  },
  botonLimpiar: {
    backgroundColor: "#EF4444", // Rojo para el botón "Limpiar"
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  botonLimpiarTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  textoVacio: {
    textAlign: "center",
    color: "#777",
    fontSize: 16,
  },
   itemBarra: {
    width: 4,
    height: 40,
    borderRadius: 4,
  },
});

export const globalStyles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: COLORS.fondo,
  },
});

export const totalStyles = StyleSheet.create({
  container: {
      backgroundColor: COLORS.blanco,
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3, // Para darle sombra en dispositivos Android
  },
  seccionTitulo: {
    fontSize: 13,
    fontWeight: "700",
    color: COLORS.textoGris,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 14,
  },
  estadisticasContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  estadisticasBox: {
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F0FDF4", // Fondo suave para las cajas de estadísticas
    borderRadius: 10,
    width: "30%",
  },
  estadisticasNumero: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#10B981", // Verde para mostrar las estadísticas
  },
  botonLimpiar: {
    backgroundColor: "#EF4444", // Rojo para el botón "Limpiar"
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 15,
  },
  botonLimpiarTexto: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});