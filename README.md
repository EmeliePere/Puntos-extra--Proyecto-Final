# Puntos-extra--Proyecto-Final
# Cotizador de Seguros

## Funcionamiento
El programa solicita datos del asegurado (nombre, salario, cantidad de propiedades y valor base de la cotización).  
Se calculan dos recargos:
- 35% de la cotización por cada propiedad.
- 5% sobre el salario del asegurado.

El resultado se muestra en pantalla y el programa continúa solicitando nuevas cotizaciones hasta que el usuario escriba "Salir".

## Partes importantes del problema
- Control de flujo con un ciclo que se repite hasta que el usuario decida salir.
- Conversión de entradas de texto a números (`parseFloat`, `parseInt`).
- Cálculo de recargos y suma al valor base.
- Uso de `readline` para interacción en consola.

## Posibles mejoras
- Validar que los datos ingresados sean números válidos.
- Permitir guardar las cotizaciones en un archivo para consulta posterior.
- Agregar opciones de diferentes tipos de seguros con tarifas distintas.
- Crear una interfaz gráfica para hacerlo más amigable.
