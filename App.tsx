import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Header } from "./src/components/Header"; // Header para mostrar los registros
import { globalStyles } from "./src/styles/appStyles"; // Estilos generales
import { ExpenseForm } from "./src/components/ExpenseForm"; // Formulario para calcular IMC
import { Diagnostico, RegistroIMC } from "./src/types"; // Tipos de IMC y Diagnóstico
//import { TotalExpenses } from "./src/components/TotalExpenses"; // Estadísticas de IMC
import { ExpenseLists } from "./src/components/ExpenseList"; // Historial de IMC
import { ResultCard } from "./src/components/ResultCard"; // Resultado IMC
import { TotalExpenses } from "./src/components/TotalExpenses";

const App = () => {
  const [historialIMC, setHistorialIMC] = useState<RegistroIMC[]>([]);
  const [nombre, setNombre] = useState<string>("");
  const [peso, setPeso] = useState<number>(65);
  const [altura, setAltura] = useState<number>(1.68);
  const [imc, setImc] = useState<number | null>(null);
  const [diagnostico, setDiagnostico] = useState<Diagnostico>('Peso normal'); // Diagnóstico inicial

  const clearHistorial = () => {
  setHistorialIMC([]);  // Limpiar el historial (vaciar el array)
  };

  // Función para agregar al historial de IMC
  const addIMC = (nuevoRegistro: RegistroIMC) => {
    console.log("Nuevo registro agregado:", nuevoRegistro);
    setHistorialIMC([...historialIMC, nuevoRegistro]);
  };

  // Función para manejar todos los datos del paciente
  const setDatosPaciente = (nombre: string, peso: number, altura: number) => {
    setNombre(nombre);
    setPeso(peso);
    setAltura(altura);
    
    // Calcular IMC
    const calculatedIMC = peso / (altura * altura);
    setImc(calculatedIMC);

    // Asignar diagnóstico basado en el IMC calculado
    if (calculatedIMC < 18.5) {
      setDiagnostico("Bajo peso");
    } else if (calculatedIMC < 24.9) {
      setDiagnostico("Peso normal");
    } else if (calculatedIMC < 29.9) {
      setDiagnostico("Sobrepeso");
    } else {
      setDiagnostico("Obesidad");
    }
  };

  // Calcular el total de IMC
  const total: number = historialIMC.reduce((acumTotal, registro) => acumTotal + registro.imc, 0);

  // Función para eliminar un registro de IMC
  const deleteIMC = (id: string) => {
    setHistorialIMC(historialIMC.filter((registro) => registro.id !== id));
  };

  return (
    <ScrollView style={globalStyles.pantalla}>
      <Header totalRegistros={historialIMC.length} />

      {/* Formulario para ingresar datos del paciente */}
      <ExpenseForm setDatosPaciente={setDatosPaciente} />

      {imc !== null && (
        <ResultCard
          nombre={nombre}
          peso={peso}
          altura={altura}
          imc={imc}
          diagnostico={diagnostico} // Pasar diagnóstico como un string
          addIMC={addIMC}
        />
      )}

     <TotalExpenses 
        total={total} 
        quantity={historialIMC.length} 
        clearHistorial={clearHistorial} 
        historialIMC={historialIMC}
      />

      <ExpenseLists historial={historialIMC} deleteIMC={deleteIMC} clearHistorial={clearHistorial} />
    </ScrollView>
  );
};

export default App;